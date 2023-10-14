import React from "react";
import "./services.css";
import frame1 from "../assets/Frame1.svg";
import frame2 from "../assets/Frame2.svg";
import frame3 from "../assets/Frame3.svg";
import frame4 from "../assets/Frame4.svg";
import frame5 from "../assets/Frame5.svg";
import frame6 from "../assets/Frame6.svg";
import bgillustration from "../assets/bg-Frame.svg";
import elements from "../assets/element.svg";
import ilustration2 from "../assets/illustration2.svg";
import ilustration3 from "../assets/illustration3.svg";
import arrow from "../assets/arrow.svg";

const Services = () => {
  return (
    <section className="services-section">
      <h1 className="services-text-header">Our Services</h1>
      <p className="services-text">
        We provide to you the best choices for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="services">
        <div className="service-item">
          <img src={frame1} alt="Search doctor" />
          <p className="service-item-header">Search doctor</p>
          <p>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </p>
        </div>
        <div className="service-item">
          <img src={frame2} alt="Online pharmacy" />
          <p className="service-item-header">Online pharmacy</p>
          <p>
            Buy your medicines with our mobile application with a simple
            delivery system
          </p>
        </div>
        <div className="service-item">
          <img src={frame3} alt="Consultation" />
          <p className="service-item-header">Consultation</p>
          <p>
            Free consultation with our trusted doctors and get the best
            recomendations
          </p>
        </div>
        <div className="service-item">
          <img src={frame4} alt="Details info" />
          <p className="service-item-header">Details info</p>
          <p>
            Free consultation with our trusted doctors and get the best
            recomendations
          </p>
        </div>
        <div className="service-item">
          <img src={frame5} alt="Emergency care" />
          <p className="service-item-header">Emergency care</p>
          <p>
            You can get 24/7 urgent care for yourself or your children and your
            lovely family
          </p>
        </div>
        <div className="service-item">
          <img src={frame6} alt="Tracking" />
          <p className="service-item-header">Tracking</p>
          <p>Track and save your medical history and health data </p>
        </div>
        <img src={elements} alt="" className="elements" />
      </div>
      <img src={bgillustration} alt="" className="bg-illustration" />
      <button className="services-first-cta cta-btn">Learn more</button>

      <div className="healthcare">
        <div className="healthcare-illustration">
          <img src={ilustration2} alt="healthcare" className="illustration" />
        </div>
        <div className="healthcare-texts">
          <h2 className="healthcare-texts-heading">
            Leading healthcare providers
          </h2>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="healthcare-texts-cta cta-btn">Learn more</button>
        </div>
      </div>

      <div className="healthcare">
        <div className="healthcare-texts">
          <h2 className="healthcare-texts-heading">Download our mobile apps</h2>
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedious form, long calls, or
            administrative hassle) and securely
          </p>
          <div className="flexx cta-btn">
            <p className="">Download</p>
              <img src={arrow} alt=""/>
          </div>
        </div>
        <div className="healthcare-illustration">
          <img src={ilustration3} alt="healthcare" className="illustration" />
        </div>
      </div>
      <img src={elements} alt="" className="second-element" />
    </section>
  );
};

export default Services;
