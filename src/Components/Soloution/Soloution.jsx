import React from "react";
import "./Soloution.css";
import backgroundImg from "../../Assets/background2.webp";

const Soloution = () => {
  return (
    <div className="Soloution-main-area">
      <div className="background-box" />
      <div className="content-area">
        <div className="left">
          <p>One Step at a Time</p>
          <h2>
            Creative Solutions for <br />
            <span>Your Brand</span>
          </h2>
          <p>
            Lorem ipsum contains the typefaces more in use, an aspect that
            allows you to have an overview of the rendering of the text in terms
            of font choice and font size .
          </p>
        </div>
        <div className="right">
          <div className="image-area">
            <div className="image-section">
              <img src={backgroundImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-area2">
        <div className="right">
          <div className="image-area">
            <div className="image-section">
              <img src={backgroundImg} />
            </div>
          </div>
        </div>
        <div className="left">
          <p>One Step at a Time</p>
          <h2>
            Creative Solutions for <br />
            <span>Your Brand</span>
          </h2>
          <p>
            Lorem ipsum contains the typefaces more in use, an aspect that
            allows you to have an overview of the rendering of the text in terms
            of font choice and font size .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Soloution;
