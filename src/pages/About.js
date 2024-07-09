import React from "react";
import MultiplePizzas from "../assets/Dosa_bg.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        When it comes to Dosas, think no further than Dosa Hut. We’re the pioneers when it comes to bringing authentic South Indian food culture to Australia.

Established in 2007, Dosa Hut was born out of a passion for food. Praveen Indukuri and Anil Kumar Karpurapu both came to Australia to study telecommunications. 
Being the foodies they were, they decided to bring alive their love for South Indian food with Dosa Hut, as there weren’t many places where one could get authentic South Indian food at that time.
 What started off as a foodie venture has now become an increasingly successful brand of quality Indian cuisine in Melbourne.
        </p>
      </div>
    </div>
  );
}

export default About;