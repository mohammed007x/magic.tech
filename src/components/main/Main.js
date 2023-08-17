import React, { useEffect } from "react";
import "./Main.css";
import Effect from "../Effect/Effect";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="section">
      <div className="main center">
        <div className="container">
          <div className="main-contect">
            <div
              className="text"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="400">
              <p className="headText">Unleash Your potential with</p>
              <div className="name">
                <Typewriter words={["Magic Tech"]} loop={true} />
              </div>
              <p className="lowText">
                Fuel your innovation and witness your projects and ideas come
                alive with Magic Tech's extraordinary capabilities.
              </p>
              <div>
                <a href="#servise" className="first">
                  Get Started
                </a>

                <a href="#about" className="secound">
                  Explore now
                </a>
              </div>
            </div>
            <Tilt
              tiltEnable={true}
              scale={1.02}
              tiltMaxAngleY={10}
              perspective={1000}>
              <div
                className="image "
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="400"></div>
            </Tilt>
          </div>
          <div className="effect-2">
            <Effect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
