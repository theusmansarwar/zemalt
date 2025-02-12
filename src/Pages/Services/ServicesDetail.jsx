import React, { useEffect } from "react";
import "./ServicesDetail.css";

import headingDesign from "../../Assets/headingDesign.svg";
import ServiceTemplate2 from "../../Templates/ServiceTemplate2";
import { FaArrowRightLong } from "react-icons/fa6";
import Benefits from "../../Components/Benifits/Benefits";
import backgroundimg from "../../Assets/background3.webp";
import { useParams } from "react-router-dom";
import PricingPlan from "../../Components/PricingPlan/PricingPlan";
import Soloution from "../../Components/Soloution/Soloution";
import { FaBullhorn, FaHandshake, FaBullseye, FaSyncAlt } from "react-icons/fa";

const sections = [
  {
    icon: <FaBullhorn />,
    title: "Awareness",
    description:
      "Lorem ipsum contains the typefaces more in use, an aspect that.",
  },
  {
    icon: <FaHandshake />,
    title: "Consideration",
    description:
      "Lorem ipsum contains the typefaces more in use, an aspect that.",
  },
  {
    icon: <FaBullseye />,
    title: "Conversion",
    description:
      "Lorem ipsum contains the typefaces more in use, an aspect that.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Retention",
    description:
      "Lorem ipsum contains the typefaces more in use, an aspect that.",
  },
];
const ServicesDetail = () => {
  const { name } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <div>
      <div className="Hero-section">
        {/* Contact Section */}

        {/* Background Section */}
        <div
          className="feature-section"
          style={{
            backgroundImage: `url(${backgroundimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.8s ease-in-out",
          }}
        >
          <div className="blackscreen">
            <div className="text-section">
              <h1>{name}</h1>
              <p>
                We’re Zelmat. Your full-service marketing and software
                development partner, that feels like such a natural extension of
                your team, you’ll forget we’re not in-house.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Soloution />

      <div className="Pricing-section">
        <center>
          <h2 className="benefits-heading">
            The Benefits of Working with{" "}
            <span className="highlight">Zemalt</span>
          </h2>
          <p className="benefits-subtext">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Nascetur eget
            vulputate amet aptent vivamus; ligula suscipit feugiat mi? Mus leo
            dignissim, libero ipsum diam maecenas convallis.
          </p>
        </center>

        <div className="features-container">
          {sections.map((item, index) => (
            <div key={index} className="feature-item">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="page-heading-area">
          <p>
            Pricing{" "}
            <span>
              <img src={headingDesign} />
            </span>
          </p>
        </div>
        <div className="upper-section">
          <h1>
            <span>Client</span> Acquisition & <br /> Fulfilment{" "}
            <span>Experts</span>
          </h1>
        </div>
        <PricingPlan />
      </div>
    </div>
  );
};

export default ServicesDetail;
