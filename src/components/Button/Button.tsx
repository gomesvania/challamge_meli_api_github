import React from "react";

import "./Button.scss";

interface ButtonProps {
  color: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  switch (color) {
    case "primary":
      return <button className="button button-primary">{color}</button>;
    case "secondary":
      return <button className="button button-secondary">{color}</button>;
    case "tertiary":
      return <button className="button button-tertiary">{color}</button>;
  }

  return (
    <button color={color}>{text}</button>
  );
};

export default Button;
