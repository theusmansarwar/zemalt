import React, { useState, useEffect } from "react";
import BlogTemplate2 from "../../Templates/BlogTemplate2";
import serviceimg1 from "../../Assets/seo.webp";
import serviceimg2 from "../../Assets/content-writing.webp";
import serviceimg3 from "../../Assets/google-ads.webp";
import serviceimg4 from "../../Assets/social-media-marketing.webp";
import serviceimg5 from "../../Assets/website-development.webp";
import serviceimg6 from "../../Assets/ui-ux-design.webp";
import backgroundimg from "../../Assets/background3.webp";
import "./Blog.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Popular from "../../Components/PopularBlogs/Popular";

const Blog = () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const Blogs = [
    {
      id: 1,
      title:
        "Search Engine Optimization (SEO) At Zemalt, we optimize your website to enhance search",
      description:
        "At Zemalt, we optimize your website to enhance search engine rankings, increase visibility, and drive organic traffic.",
      image: serviceimg1,
      date: "20/02/2024",
    },
    {
      id: 2,
      title: "Content Writing",
      description:
        "Zemalt creates engaging and relevant content that resonates with your audience.",
      image: serviceimg2,
      date: "20/02/2024",
    },
    {
      id: 3,
      title: "Google Ads",
      description:
        "Leverage Zemalt's expertise in targeted Google Ads to reach potential customers.",
      image: serviceimg3,
      date: "20/02/2024",
    },
    {
      id: 4,
      title: "Social Media Ads",
      description:
        "Utilize Zemalt’s social media advertising strategies to increase brand awareness.",
      image: serviceimg4,
      date: "20/02/2024",
    },
    {
      id: 5,
      title: "Web Development",
      description:
        "Zemalt specializes in designing and developing responsive, user-friendly websites.",
      image: serviceimg5,
      date: "20/02/2024",
    },
    {
      id: 6,
      title: "UI Designing",
      description:
        "Enhance user experience with Zemalt's intuitive UI/UX design.",
      image: serviceimg6,
      date: "20/02/2024",
    },
  ];

  // Pagination Logic

  const itemsPerPage = 5;
  const totalPages = Math.ceil(Blogs.length / itemsPerPage);

  const paginatedBlogs = Blogs.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="Hero-section">
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
            <div className="text-section2">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="Blog-grid">
        <h2 className="Blog-heading">Blog</h2>
        <p>Drive Digital Success with Expert Strategies and Insights.</p>

        <BlogTemplate2 Blogs={paginatedBlogs} />

        <Stack spacing={2} alignItems="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            shape="rounded"
          />
        </Stack>
      </div>
      <Popular />
    </>
  );
};

export default Blog;
