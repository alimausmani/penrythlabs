import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100); // Small delay to trigger animation
  }, []);

  return (
    <>
      <section className="hero">
        <div className={`overlay ${animate ? "animate" : ""}`}>
          <h3>Penryth Labs Pvt. Ltd.</h3>
          <h1>We Develop High Quality <br /> Affordable Medicines</h1>
          <p>
            We are an ISO-certified company engaged in supplying and distributing
            quality pharmaceutical medicines. We bring high-quality products to
            people around the world.
          </p>
          <button className="button">Read More</button>
        </div>
      </section>


      <section className="about">

        {/* <h2>Why Choose us</h2> */}
        <h2 style={{fontSize:"50px"}}>
          Why <span className="highlight">Choose Us</span>
        </h2>

        <p>
          We are an ISO certified company engaged in supplier, trader and distributor
          quality assured range of Pharmaceutical Medicines.</p>
        <div className="boxes">
          <div className="box1">
            <img src="https://penrythlabs.com/wp-content/uploads/2023/08/Dedicated-workforce-1.png" alt="Quality" />
            <h2>Our Quality Approach</h2>
            <p>
              Penryth Labs Pvt. Ltd. has arranged top-class infrastructure and all necessary preparations to
              assist a stringent quality policy. All our systems are well documented and are implemented
              by an expertly trained staff with a line of reporting that is independent of manufacturing.
            </p>
          </div>

          <div className="box1" style={{ backgroundColor: "#aee6ff"}}>
            <img src="https://penrythlabs.com/wp-content/uploads/2023/08/Dedicated-workforce-1.png" alt="Dedicated Workforce" />
            <h2>Dedicated Workforce</h2>
            <p> 
              Our team is highly skilled with experienced practitioners,
              that work with immense dedication to providing 100% result.
            </p>
          </div>

          <div className="box1">
            <img src="https://penrythlabs.com/wp-content/uploads/2023/08/vision-1.png" alt="Our Vision" />
            <h2>Our Vision</h2>
            <p>
              The company focuses on offering 100% customer satisfaction and for this,
              we can go to any level. The company formulates its entire product range
              safely to meet the set Industry, WHO, and GMP standards.
            </p>
          </div>
        </div>
      </section>
    </>

  );
};

export default Home;
