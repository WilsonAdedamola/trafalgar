import React from "react";
import "./feedback.css";
import avatar from "../assets/avatar.png";
import arrow from "../assets/arrow.svg";

const Feedback = () => {
  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <h1 className="feedback-section-heading">
          What our customer are saying
        </h1>
        <div className="feedback-content">
          <div className="feedback-img">
            <img src={avatar} alt="Edward Newgate" />
            <div className="name">
              <p>Edward Newgate</p>
              <p>Founder Circle</p>
            </div>
          </div>
          <div className="feedback-texts">
            <p>
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedious form, long calls, or
            administrative hassle) and securely”</p>
          </div>
        </div>
      </div>
      <div className="direction">
              <img src={arrow} alt="" className="back"/>
              <div className="dots">
                <div className=" active-dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <img src={arrow} alt="" className="next"/>
      </div>
    </section>
  );
};

export default Feedback;
