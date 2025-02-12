import React, { useEffect, useState } from "react";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.jpeg";
import "./Home.css";


const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const products = [
    { name: "SYRUP", images: product1 },
    { name: "TABLETS", images: product2 },
    { name: "TABLETS", images: product3 },
    { name: "TABLETS", images: product4 },
    { name: "TABLETS", images: product5 },
    { name: "TABLETS", images: product6 }
  ];

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
        <h2 style={{ fontSize: "50px" }}>
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
          <div className="box1" style={{ backgroundColor: "#aee6ff" }}>
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

      <section className="about-section">
        <div className="about-container">
          <div className="image-container">
            <img
              src="https://penrythlabs.com/wp-content/uploads/2023/08/about-us-image.png" // Replace with your actual image
              alt="Scientist using microscope"
              className="about-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="text-container">
            <h2 className="about-heading">
              Welcome To <span className="highlight">Penryth Labs Pvt. Ltd.</span>
            </h2>
            <p className="about-text">
              We are an ISO certified company engaged in supplier, trader and distributor
              quality assured range of Pharmaceutical Medicines. We have capitalized on every
              opportunity to bring our high-quality products to more people around the world.
              Our transparent and strong relationships with pharmacy chains, insurance funds
              and other distributor networks help us deliver upon our promise to customers and
              patients globally. Our offerings deliver quality at cost-effective prices in the highly
              regulated markets of the India. We are very much interested in making new venture having
              valuable bonds in un represented areas and we expect you to avail the opportunity you have
              in your hands. Let’s join hands to exceed your expectation and excel in the quality of life
              for long term business relationships.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </section>

      <section className="product-section">
        <h2 className="title">
          Product <span className="highlight">Categories</span>
        </h2>
        <p className="description">
          We are an ISO-certified company specializing in supplying, trading, and distributing a
          high-quality range of pharmaceutical medicines.</p>
        <div className="grid-container">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.images} alt={product.name} className="product-image" />
              <div className="overlays">{product.name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
