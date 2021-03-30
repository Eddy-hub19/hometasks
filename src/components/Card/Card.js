import React from "react";
import "./Card.css";

export const CardItem = (props) => {
  return (
    <div className="card">
      <h1> {props.text || "N/A"} </h1>
      <h2> {props.name || "N/A"} </h2>
      <h3> {props.cost || "N/A"} </h3>
    </div>
  );
};
