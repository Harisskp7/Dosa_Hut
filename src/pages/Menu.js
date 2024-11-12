import React, { useState } from "react";
import { MenuList } from "../helpers/Menulist";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleSendToWhatsApp = () => {
    if (cart.length === 0 || !name || !userPhone) return;

    const cartDetails = cart
      .map((item) => `${item.name} - Quantity: ${item.quantity}`)
      .join("\n");

    const message = `Order Details:\nName: ${name}\nPhone: ${userPhone}\n\nItems:\n${cartDetails}`;
    const whatsappURL = `https://wa.me/918825999569?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            addToCart={() => addToCart(menuItem)}
          />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart">
          <h2>Your Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter your mobile number"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            required
          />

          <button onClick={handleSendToWhatsApp}>Send Order to WhatsApp</button>
        </div>
      )}
    </div>
  );
}

export default Menu;
