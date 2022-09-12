import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="col-md-6 my-4 text-dark project-card">
      <div className="card border shadow p-3 h-100">
        <img src={data.img} className="img-fluid border project-image" alt="" />
        <h4 className="text-center my-2 font-weight-bold">{data.name}</h4>
        <p className="px-2 text-center">{data.desc}</p>
        <div className="row">
          <div className="col-md-6">
            <a
              className="btn btn-outline-dark btn-block btn-sm"
              href={data.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
          <div className="col-md-6">
            <a
              className="btn btn-outline-dark btn-block btn-sm"
              href={data.codeLink}
              target="_blank"
              rel="noreferrer"
            >
              Github Code
            </a>
          </div>
          <div className="d-flex justify-content-center px-5 py-3 w-100 flex-wrap">
            {data.techstack.map((elem, index) => (
              <img
                key={index}
                src={elem}
                width="32px"
                className="img-fluid mx-2 d-inline-block"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
