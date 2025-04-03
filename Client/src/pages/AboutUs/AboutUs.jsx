import React from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <img src={assets.logo_blur} alt="Qurotark workshop" />
        <p>Your Trusted Source for Unique and Exclusive Products</p>
      </header>

      <section className="about-us-intro">
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            At Qurotark, we believe that every product has a story. Founded with a passion for 
            uniqueness and an eye for perfection, we specialize in offering one-of-a-kind products 
            that stand out. Our team is dedicated to curating and creating exclusive items that cater 
            to those who appreciate quality and originality.
          </p>
          <p>
            We combine craftsmanship, innovation, and a love for distinctive products to bring
            exceptional creations to life. Whether you're looking for something stylish, functional, 
            or both, Qurotark ensures that every item in our collection meets the highest standards 
            of uniqueness and quality.
          </p>
        </div>
        <div className="about-us-image">
        </div>
      </section>

      <section className="about-us-services">
        <h2>Our Offerings</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Exclusive Product Collections</h3>
            <p>
              Our team carefully selects and curates unique products, ensuring that you get access to items 
              that can't be found anywhere else. From handcrafted goods to limited-edition pieces, we bring you the best.
            </p>
          </div>
          <div className="service-card">
            <h3>Quality and Craftsmanship</h3>
            <p>
              Every product we offer is chosen for its superior craftsmanship and attention to detail. 
              We prioritize quality and durability in all our selections.
            </p>
          </div>
          <div className="service-card">
            <h3>Innovative & Unique Creations</h3>
            <p>
              Our collection features innovative designs that redefine style and functionality. 
              We take pride in offering products that inspire and enhance everyday life.
            </p>
          </div>
        </div>
      </section>

      <section className="about-us-brands">
        <h2>We Partner with the Best</h2>
        <p>We collaborate with renowned brands and independent creators to bring you an exclusive selection of products:</p>
        <div className="brands-logos">
          <img src="https://via.placeholder.com/120x60?text=Brand+1" alt="Brand 1" />
          <img src="https://via.placeholder.com/120x60?text=Brand+2" alt="Brand 2" />
          <img src="https://via.placeholder.com/120x60?text=Brand+3" alt="Brand 3" />
          <img src="https://via.placeholder.com/120x60?text=Brand+4" alt="Brand 4" />
        </div>
      </section>

      <footer className="about-us-footer">
        <p>Contact us today to explore our unique and exclusive collections!</p>
      </footer>
    </div>
  );
};

export default AboutUs;