import React from "react";
import "./blog.css";
import blog1 from "../assets/image 1.png";
import blog2 from "../assets/image2.png";
import blog3 from "../assets/image3.png";
import more from "../assets/arrow.svg";

const Blog = () => {
  return (
    <section className="blog-section">
      <h1 className="blog-section-heading">Check out our latest article</h1>
      <div className="article-container">
        <div className="article-card">
          <div className="card-img">
            <img src={blog1} alt="" />
          </div>
          <div className="card-texts">
            <p className="card-text-heading">
              Disease detection, check up in the laboratory
            </p>
            <p className="card-text-content">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <div className="flex">
              <p>Read more</p>
              <img src={more} alt=""/>
            </div>  
          </div>
        </div>
        <div className="article-card">
          <div className="card-img">
            <img src={blog2} alt="" />
          </div>
          <div className="card-texts">
            <p className="card-text-heading">
              Herbal medicines that are safe for consumption
            </p>
            <p className="card-text-content">
              Herbal medicine is very widely used at this time because of its
              very good for your health...
            </p>
            <div className="flex">
              <p>Read more</p>
              <img src={more} alt=""/>
            </div>
          </div>
        </div>
        <div className="article-card">
          <div className="card-img">
            <img src={blog3} alt="" />
          </div>
          <div className="card-texts">
            <p className="card-text-heading">
              Natural care for healthy facial skin
            </p>
            <p className="card-text-content">
              A healthy lifestyle should start from now and also for your skin
              health. There are some...
            </p>
            <div className="flex">
              <p>Read more</p>
              <img src={more} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <button className="button">View all</button>
    </section>
  );
};

export default Blog;
