import React from "react";
import "./Button.css";

export const Button = () => {
  return (
    <div className="btn">
      <button onClick={() => {'click'}}>BUY</button>
    </div>
  );
};