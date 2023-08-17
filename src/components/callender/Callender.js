import React from "react";
import { Calendar } from "react-calendar";
import "./Callender.css";

const Callender = () => {
  return <Calendar onChange={(e) => console.log(e)} />;
};

export default Callender;
