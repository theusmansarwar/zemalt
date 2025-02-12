import React from "react";
import "./ContactSection.css";

const GetintouchSection = () => {
  return (
    <div className="contact-container">
      {/* Map Section */}
      <div className="map-container">
        {/* Embed Google Map or Static Image */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27196.815520858014!2d74.35768828150634!3d31.56253725262324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db30353c6bcc97%3A0xba25d94524e2c12b!2sZemalt%20Pvt.%20Ltd!5e0!3m2!1sen!2s!4v1738664015654!5m2!1sen!2s"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Enter Your Name" required />
          <input type="tel" placeholder="Enter Your Phone Number" required />
          <input type="email" placeholder="Enter Your Email Address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetintouchSection;
