import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import "./my-carousal.style.css";
import Slide1 from "../../assets/img/carousal/Background.png";


const MyCarousal = () => {
  return (
    <div id="home">
      <div >
        
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
      </div>
    </div>
  );
};

export { MyCarousal };
