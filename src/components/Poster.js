import React from "react";
import "../stylesheets/Poster.css";

export default function Poster({ image, title, text }) {
  return (
    <div className="main-container">
      <div className="main">
        <div className="image-border">
          <img src={image} className="logo-image" alt="Logo"></img>
        </div>
        <h1 className="react-text">{title}</h1>
        <h2>{text}</h2>
      </div>
    </div>
  );
}
