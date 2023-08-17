import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" footer-container">
        <div className="about-footer item">
          <h1>Magic Tech</h1>
          <p>
            Magic Tech is a leading technology company dedicated to empowering
            businesses with innovative solutions. With our expertise in software
            development, web development, and artificial intelligence, we help
            organizations thrive in the digital era. Our team is committed to
            delivering exceptional results, tailored to meet the unique needs of
            our clients. Trust Magic Tech as your technology partner to unlock
            your business's full potential and achieve success in today's
            rapidly evolving technological landscape.
          </p>
        </div>
        <div className="pages-footer item">
          <h3>Pages</h3>
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#servise">Servise</a>
          <a href="#contact">Contact us</a>
          <a href="#reviews">Reviews</a>
        </div>
        <div className="servise-footer item">
          <h3>Servises</h3>
          <div>Web Development</div>
          <div>App Develpment</div>
          <div>Ai Development</div>
          <div>Electronic Development</div>
        </div>
        <div className="contact-footer item">
          <h3>Contant</h3>
          <div>
            <i className="fa-brands fa-whatsapp fa-lg"> </i>
            <i className="fa-regular fa-envelope fa-lg"></i>
            <i className="fa-brands fa-instagram fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
