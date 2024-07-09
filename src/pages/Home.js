import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Dosa_bg3.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h2>WE LOVE PEOPLE</h2>
        <h2>WE LOVE FOOD.</h2>
        <h1> Dosa Hut </h1>
        <p> DOSA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;