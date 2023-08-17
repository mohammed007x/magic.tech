import React, { useEffect } from "react";
import Effect from "../../components/Effect/Effect";
import "./Servise.css";
import Aos from "aos";
const Servise = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="section" id="servise">
      <div className="servise center">
        <div className="container servise-center">
          <div className="main-content">
            <div className="title">
              <h1> Our Servises </h1>
            </div>
            <div className="cards">
              <div className="card" data-aos="slide-up" data-aos-duration="600">
                <img src={require("../../asset/web.png")} alt="wrb" />
                <h3>Web Development</h3>
                <p>
                  Stunning, responsive websites that captivate your audience and
                  drive results, built by our expert web development team.
                </p>
              </div>
              <div className="card" data-aos="slide-up" data-aos-duration="600">
                <img src={require("../../asset/ai.png")} alt="wrb" />
                <h3>Ai Development</h3>
                <p>
                  Harness the power of AI with chatbots, recommendation systems,
                  and data analysis tools to revolutionize operations and drive
                  business growth.
                </p>
              </div>
              <div className="card" data-aos="slide-up" data-aos-duration="600">
                <img src={require("../../asset/app.png")} alt="wrb" />
                <h3>App Development</h3>
                <p>
                  Intuitive and engaging apps crafted by our skilled developers,
                  delivering seamless user experiences across mobile and desktop
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="effect-4">
          <Effect />
        </div>
      </div>
    </div>
  );
};

export default Servise;
