import React, { useEffect, useState } from "react";
import headingDesign from "../../Assets/headingDesign.svg";
import "./Blogsection.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import BlogTemplate from "../../Templates/BlogTemplate";
import BlogImg1 from "../../Assets/Person.jpg";
import BlogImg2 from "../../Assets/Person.jpg";
import BlogImg3 from "../../Assets/Person.jpg";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    id: 1,
    image: BlogImg1,
    title: "Understanding React Props",
    content:
      "Props allow components to receive data from a parent component, making them reusable.",
  },
  {
    id: 2,
    image: BlogImg2,
    title: "State Management in React",
    content:
      "Learn how to manage state effectively in React using useState and useReducer.",
  },
  {
    id: 3,
    image: BlogImg3,
    title: "React Hooks Explained",
    content:
      "Explore the power of React hooks such as useEffect, useContext, and custom hooks.",
  },
  {
    id: 4,
    image: BlogImg1,
    title: "Understanding React Props",
    content:
      "Props allow components to receive data from a parent component, making them reusable.",
  },
  {
    id: 5,
    image: BlogImg2,
    title: "State Management in React",
    content:
      "Learn how to manage state effectively in React using useState and useReducer.",
  },
  {
    id: 6,
    image: BlogImg3,
    title: "React Hooks Explained",
    content:
      "Explore the power of React hooks such as useEffect, useContext, and custom hooks.",
  },
];

const BlogSection = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth <= 768 ? 1 : 3
  );
  const navigate = useNavigate();
  // Update itemsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
      setIndex(0); // Reset index when screen size changes
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextBlog = () => {
    if (index + itemsPerPage < blogData.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prevBlog = () => {
    if (index > 0) {
      setIndex(index - itemsPerPage);
    }
  };

  return (
    <div className="Blog-Section">
      <div className="page-heading-area">
        <p>
          BLOGS{" "}
          <span>
            <img src={headingDesign} alt="Heading Design" />
          </span>
        </p>
      </div>
      <div className="upper-section">
        <h1>
          LATEST <br /> <span>BLOGS</span>
        </h1>
        <p onClick={() => navigate(`/blog`)}>
          View All Blogs <FaArrowRightLong />
        </p>
      </div>

      {/* Display only the required blogs */}
      <div className="blog-list">
        {blogData.slice(index, index + itemsPerPage).map((blog) => (
          <BlogTemplate
            key={blog.id}
            image={blog.image}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-buttons">
        <FaArrowLeftLong
          onClick={prevBlog}
          className={`prev-btn ${index === 0 ? "disabled" : ""}`}
        />

        {[...Array(Math.ceil(blogData.length / itemsPerPage))].map((_, i) => (
          <span
            key={i}
            className={`dott ${index / itemsPerPage === i ? "Active" : ""}`}
          ></span>
        ))}

        <FaArrowRightLong
          onClick={nextBlog}
          className={`next-btn ${
            index + itemsPerPage >= blogData.length ? "disabled" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default BlogSection;
