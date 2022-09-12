import React from "react";
import { Card } from "./Card";
import stylecraze from "../assets/img/projects/stylecraze.JPG";
import mytheresa from "../assets/img/projects/mytheresa.JPG";
import shop from "../assets/img/projects/shop.JPG";
import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "Stylecraze-Clone",
        desc: "StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty – we provide answers to women in all spheres to celebrate their unique needs and individuality. ",
        img: stylecraze,
        demoLink: "https://stylecraze-pink.vercel.app/",
        codeLink: "https://github.com/anand6840/Stylecraze.com",
        techstack: [
           "/icons/react.svg",
           "/icons/html-5.svg",
          "/icons/css-3.svg",
           "/icons/javascript.svg",
           "/icons/npm.svg",
        ],
      },
      
      {
        name: "Shop-Clone",
        desc: "It is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. Our shopping experts have drawn on their industry experience and insider connections to bring you the best collection of the stores you can't live without, and the brands and products you love - all in one place.",
        img: shop,
        demoLink: "https://gregarious-truffle-6d95b1.netlify.app/",
        codeLink: "https://github.com/Tarun22sharma/Shop.com",
        techstack: [
           "/icons/html-5.svg",
           "/icons/css-3.svg",
           "/icons/javascript.svg",
        ],
      },
      {
        name: "Mytheresa-Clone",
        desc: "Mytheresa is a German e-commerce luxury fashion company, with headquarters in Munich, Germany. Founded in 2006, it operates local-language based websites for international markets in English, German, Spanish, French, Italian, Arabic, Chinese and Korean. Its CEO is Michael Kliger. ",
        img: mytheresa,
        demoLink: "https://deluxe-starship-a4a459.netlify.app/",
        codeLink: "https://github.com/br-lovanshi/mytheresa.com",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
        ],
      },
    ],
  };
  return (
    <div className="project-container">
      <div id="projects" className="container width">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
