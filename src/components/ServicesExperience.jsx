import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container" id="coding">
       
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1200+</h3>
            <p>Hrs Coding</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <h6>Mini Projects</h6>
            </div>
            <div className="portfolio">
              <h4>05+</h4>
              <h6>Major Projects</h6>
            </div>
            <div className="portfolio">
              <h4>300+</h4>
              <h6>DSA Problem</h6>
            </div>
            <div className="portfolio">
              <h4>200+</h4>
              <h6>Hrs Soft Skills</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
