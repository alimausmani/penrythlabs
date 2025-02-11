import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <h3>Penryth Labs Pvt. Ltd.</h3>
        <h1>We Develop High Quality <br /> Affordable Medicines</h1>
        <p>
          We are an ISO-certified company engaged in supplying and distributing
          quality pharmaceutical medicines. We bring high-quality products to
          people around the world.
        </p>
        <button className="btn">Read More</button>
      </div>
    </section>
  );
};

export default Hero;
