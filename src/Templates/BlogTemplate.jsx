import React from "react";
import "./BlogTemplate.css";

const BlogTemplate = ({ image, title, content }) => {
  return (
    <div className="Blog-area">
      <div className="blogimg">
        <img src={image} alt="Blog" />
      </div>
      <div className="blog-text-section">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogTemplate;
