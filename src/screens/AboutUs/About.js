import React, { useEffect } from "react";
import "./About.css";
import Effect from "../../components/Effect/Effect";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="section" id="about">
      <div className="about center">
        <div className="about-center container ">
          <div className="main-content">
            <div
              className="images"
              data-aos="flip-left"
              data-aos-duration="500">
              <div className="img-1"></div>
              <div className="img-2"></div>
            </div>
            <div className="text" data-aos="slide-up" data-aos-duration="600">
              <h1>
                What is <span>Magic Tech</span>
              </h1>
              <p>
                We are your trusted technology partner, offering customized
                software development, web solutions, and AI expertise. Elevate
                your business with our innovative solutions. Unleash your
                potential with us.
              </p>
            </div>
          </div>
        </div>
        <div className="effect-3">
          <Effect />
        </div>
      </div>
    </div>
  );
};

export default About;
