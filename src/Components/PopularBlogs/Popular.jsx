import React from "react";
import "./Popular.css";
import backgroundimg from "../../Assets/background1.webp";
const Popular = () => {
  return (
    <div className="pupular-section">
      <h2 className="Blog-heading">Popular Reads</h2>
      <p>
        Discover our most-read articles, packed with valuable insights and
        proven tactics to elevate your marketing game.
      </p>

      <div className="grid-section">
        <div className="left">
          <div className="content-section">
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${backgroundimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            >
              <div className="blackscreen3">
                <div className="text-section3">
                  <h1>Services widwoi iwudnhiow iwjudnhwi iwjdiwu ijwuiuw </h1>
                  <p>diuw iwhdw iwhdiw jwidbiw iwdbiwu wdbiwu idwbiwu </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content-section">
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${backgroundimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
                overflow: "hidden",
              }}
            >
              <div className="blackscreen4">
                <div className="text-section4">
                  <h1>Services widwoi iwudnhiow iwjudnhwi iwjdiwu ijwuiuw </h1>
                  <p>
                    diuw iwhdw iwhdiw jwidbiw iwdbiwu wdbiwu idwbiwu diuw iwhdw
                    iwhdiw jwidbiw iwdbiwu wdbiwu idwbiwudiuw iwhdw iwhdiw
                    jwidbiw iwdbiwu wdbiwu idwbiwu{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <div
              className="feature-section"
              style={{
                backgroundImage: `url(${backgroundimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.8s ease-in-out",
              }}
            >
              <div className="blackscreen4">
                <div className="text-section4">
                  <h1>Services widwoi iwudnhiow iwjudnhwi iwjdiwu ijwuiuw </h1>
                  <p>diuw iwhdw iwhdiw jwidbiw iwdbiwu wdbiwu idwbiwu </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
