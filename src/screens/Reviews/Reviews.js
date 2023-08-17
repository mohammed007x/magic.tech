import React, { useEffect } from "react";
import "./Reviews.css";
import Aos from "aos";
import Effect from "../../components/Effect/Effect";

const Reviews = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="reviews center" id="reviews">
      <div className="container reviews-container">
        <div className="main-content">
          <div className="title">
            <h1>Our Client</h1>
          </div>
          <div className="cards">
            <div className="card" data-aos="fade-up" data-aos-duration="600">
              <p>
                Magic Tech delivered innovative solutions that exceeded our
                expectations. Their attention to detail and commitment to
                high-quality work truly impressed me. I highly recommend Magic
                Tech for their professionalism, expertise, and ability to bring
                ideas to life.
              </p>
              <div className="more-info">
                <div className="personal-info">
                  <div className="name">Mohamemd Khalid</div>
                  <div className="email">
                    mohammed.khalid.business@gmail.com
                  </div>
                </div>
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="card" data-aos="fade-down" data-aos-duration="600">
              <p>
                Magic Tech provided outstanding service throughout our project,
                from start to finish. Their team's expertise in software
                development and web solutions is impressive. They delivered
                cutting-edge solutions that transformed our business and
                exceeded our expectations.
              </p>
              <div className="more-info">
                <div className="personal-info">
                  <div className="name">Ibrahim Hassan</div>
                  <div className="email">ibrahim.ashi@gmail.com</div>
                </div>
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="revwies-effect">
        <Effect />
      </div>
    </div>
  );
};

export default Reviews;
