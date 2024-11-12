// import React, { useState } from "react";
// import { MenuList } from "../helpers/Menulist";
// import MenuItem from "../components/MenuItem";
// import "../styles/Menu.css";
// import qrCodeImage from "../assets/qrCode.png"; // Import your QR code image

// function Menu() {
//   const [cart, setCart] = useState([]);
//   const [name, setName] = useState("");
//   const [userPhone, setUserPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [isPaid, setIsPaid] = useState(false);
//   const [showQRCode, setShowQRCode] = useState(false);

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.name === item.name
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   // Calculate total price of all items in the cart
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handlePay = () => {
//     setShowQRCode(true); // Show the QR code when "Pay" is clicked
//   };

//   const handlePaymentConfirmation = () => {
//     setIsPaid(true); // Mark as paid when payment is confirmed
//     setShowQRCode(false); // Hide QR code after payment
//   };

//   const handleSendToWhatsApp = () => {
//     if (!isPaid) {
//       alert("Please complete the payment before sending the order.");
//       return;
//     }

//     if (cart.length === 0 || !name || !userPhone || !address) return;

//     const cartDetails = cart
//       .map((item) => `${item.name} - Quantity: ${item.quantity}, Price: Rs. ${item.price * item.quantity}`)
//       .join("\n");

//     const message = `Order Details:\nName: ${name}\nPhone: ${userPhone}\nAddress: ${address}\n\nItems:\n${cartDetails}\n\nTotal Price: Rs. ${totalPrice}`;
    
//     const whatsappURL = `https://wa.me/918825999569?text=${encodeURIComponent(message)}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <div className="menu">
//       <h1 className="menuTitle">Our Menu</h1>
//       <div className="menuList">
//         {MenuList.map((menuItem, key) => (
//           <MenuItem
//             key={key}
//             image={menuItem.image}
//             name={menuItem.name}
//             price={menuItem.price}
//             addToCart={() => addToCart(menuItem)}
//           />
//         ))}
//       </div>

//       {cart.length > 0 && (
//         <div className="cart">
//           <h2>Your Cart</h2>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 <span>{item.name}</span>
//                 <span>Quantity: {item.quantity}</span>
//                 <span>Price: Rs. {item.price * item.quantity}</span>
//               </li>
//             ))}
//           </ul>

//           <p><strong>Total Price: Rs. {totalPrice}</strong></p>

//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <input
//             type="text"
//             placeholder="Enter your mobile number"
//             value={userPhone}
//             onChange={(e) => setUserPhone(e.target.value)}
//             required
//           />

//           <input
//             type="text"
//             placeholder="Enter your address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />

//           <button onClick={handlePay}>Pay</button>

//           {showQRCode && (
//             <div className="qrCodeSection">
//               <p>Scan this QR code to complete the payment:</p>
//               <img src={qrCodeImage} alt="QR Code for Payment" style={{ width: "200px", height: "200px" }} />
//               <button onClick={handlePaymentConfirmation}>I Have Paid</button>
//             </div>
//           )}

//           <button onClick={handleSendToWhatsApp} disabled={!isPaid}>
//             Send Order to WhatsApp
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Menu;


import React, { useState } from "react";
import { MenuList } from "../helpers/Menulist";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import qrCodeImage from "../assets/qrCode.png"; // Import your QR code image

function Menu() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

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

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePay = () => {
    setShowQRCode(true); // Show the QR code when "Pay" is clicked
  };

  const handlePaymentConfirmation = () => {
    // Show popup when user clicks "I Have Paid"
    const isConfirmed = window.confirm(
      "Send payment details to the owner, then only your order is confirmed."
    );

    if (isConfirmed) {
      setIsPaid(true); // Mark as paid when payment is confirmed
      setShowQRCode(false); // Hide QR code after payment
    }
  };

  const handleSendToWhatsApp = () => {
    if (!isPaid) {
      alert("Please complete the payment before sending the order.");
      return;
    }

    if (cart.length === 0 || !name || !userPhone || !address) return;

    const cartDetails = cart
      .map((item) => `${item.name} - Quantity: ${item.quantity}, Price: Rs. ${item.price * item.quantity}`)
      .join("\n");

    const message = `Order Details:\nName: ${name}\nPhone: ${userPhone}\nAddress: ${address}\n\nItems:\n${cartDetails}\n\nTotal Price: Rs. ${totalPrice}`;
    
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
                <span>Price: Rs. {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <p><strong>Total Price: Rs. {totalPrice}</strong></p>

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

          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <button onClick={handlePay}>Pay</button>

          {showQRCode && (
            <div className="qrCodeSection">
              <p>Scan this QR code to complete the payment:</p>
              <img src={qrCodeImage} alt="QR Code for Payment" style={{ width: "200px", height: "200px" }} />
              <button onClick={handlePaymentConfirmation}>I Have Paid</button>
            </div>
          )}

          <button onClick={handleSendToWhatsApp} disabled={!isPaid}>
            Send Order to WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
