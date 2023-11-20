import React from "react";

import "./Button.scss";

interface ButtonProps {
  color: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text, type = "submit" }) => {
 
  return (
    <button className={`button ${color}`} type={type}>{text}</button>
  );
};

export default Button;
