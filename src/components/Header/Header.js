/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import "./Header.css";
import Effect from "../Effect/Effect";

const Header = () => {
  let [isClick, setClick] = useState(false);
  const whenClick = (e) => {
    setClick(!isClick);
  };

  const whenAclick = () => {
    if (isClick === true) {
      setClick(!isClick);
    }
  };

  let [isScroll, setScroll] = useState("");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      isScroll = "scroll";
      setScroll(isScroll);
    } else {
      setScroll("");
    }
  });
  return (
    <div>
      <div
        className={
          isScroll === ""
            ? isClick === true
              ? "header center scroll"
              : "header center"
            : "header center scroll"
        }>
        <div className="container container-header">
          <div className="logo">
            <h1>Magic Tech</h1>
          </div>

          <div className={isClick === false ? "links" : "menu"}>
            <ul>
              <li>
                <a href="#home" onClick={whenAclick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={whenAclick}>
                  About us
                </a>
              </li>
              <li>
                <a href="#servise" onClick={whenAclick}>
                  {" "}
                  Servises
                </a>
              </li>
              <li>
                <a href="#contact" onClick={whenAclick}>
                  Contact us
                </a>
              </li>

              <li>
                <a href="#reviews" onClick={whenAclick}>
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              isClick === true ? "swich swich-click" : "swich swich-unclick"
            }
            onClick={whenClick}>
            <div className="swich-line swich-line-1"></div>
            <div className="swich-line swich-line-2"></div>
            <div className="swich-line swich-line-3"></div>
          </div>
        </div>
      </div>
      <div className="effect-1">
        <Effect />
      </div>
    </div>
  );
};

export default Header;
