import React, { useContext } from "react";
import "./Project.css";

import stylecraze from "./projectImage/stylecraze.JPG"
import mytheresa from "./projectImage/mytheresa.JPG";
import shop from "./projectImage/shop.JPG";
import Expedia from "./projectImage/Expedia.JPG";
import PharmBuddy from "./projectImage/PharmBuddy.JPG";
import GetHarvest from "./projectImage/GetHarvest.JPG";


// import { themeContext } from "./Context";

const Project = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="Project" id="projects">
      {/* heading */}
       {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Project</span> */}
        <h1 style={{color:"transparent"}}>ABOUT ME</h1>
        <h1> Projects</h1>

        <div className="port">

          <div className="port1">
            <img src={stylecraze} className='port-img'/>
              <div class="layer">
                <h3>stylecraze</h3>
                  <p>StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty – we provide answers to women in all spheres to celebrate their unique needs and individuality. </p>
                    <p id="tmet">Tech Stack: ReactJS | ChakraUI</p>
                  <div className="portButt">
                    <a href="https://stylecraze-pink.vercel.app/"><button>VIEW SITE</button></a>
                    <a href="https://github.com/anand6840/Stylecraze.com"><button>VIEW CODE</button></a>
                    
                    
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={shop} className='port-img'/>
              <div class="layer">
                <h3>Shop.com</h3>
                  <p>It is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. Our shopping experts have drawn on their industry experience and insider connections to bring you the best collection of the stores you can't live without, and the brands.</p>
                  <p id="tmet">Tech Stack: HTML | CSS | JavaScript</p>
                  <div className="portButt">
                    <a href="https://gregarious-truffle-6d95b1.netlify.app/"><button>VIEW SITE</button></a>
                    <a href="https://github.com/Tarun22sharma/Shop.com"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={GetHarvest} className='port-img'/>
              <div class="layer">
                <h3>GetHarvest</h3>
                  <p>Harvest is a simple time tracking and fast invoicing solution built in 2006. Innovators in over 100 countries use Harvest everyday to work better Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work..</p>
                  <p id="tmet">Tech Stack: HTML | CSS | JavaScript | ReactJS | ChakraUI | MongoDB</p> 
                  <div className="portButt">
                    <a href="https://get-harvest-rct201clone.netlify.app"><button>VIEW SITE</button></a>
                    <a href="https://github.com/anand6840/Get-Harvest-clone"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={mytheresa} className='port-img'/>
              <div class="layer">
                <h3>Mytheresa</h3>
                  <p>Mytheresa is a German e-commerce luxury fashion company, with headquarters in Munich, Germany. Founded in 2006, it operates local-language based websites for international markets in English, German, Spanish, French, Italian, Arabic, Chinese and Korean. Its CEO is Michael Kliger.</p>
                  <p>Tech Stack: HTML | CSS | JavaScript </p>
                  <div className="portButt">
                    <a href="https://deluxe-starship-a4a459.netlify.app/"><button>VIEW SITE</button></a>
                    <a href="https://github.com/anand6840/mytheresa.com"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={Expedia} className='port-img'/>
              <div class="layer">
                <h3>Expedia</h3>
                  <p>Expedia is one of the fastest growing online travel portals in Asia, offering travellers an extensive selection of hotels, activities and travel services to meet every budget and activities of every kind at competitive rates. With over hundreds of thousands of hotel.</p>
                  <p>Tech Stack: HTML | CSS | JavaScript | ReactJS</p>
                  <div className="portButt">
                    <a href="https://heroic-rolypoly-f5b975.netlify.app/"><button>VIEW SITE</button></a>
                    <a href="https://github.com/anand6840/expedia"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          <div className="port1">
            <img src={PharmBuddy} className='port-img'/>
              <div class="layer">
                <h3>PharmBuddy</h3>
                  <p>PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services.</p>
                  <p>Tech Stack: HTML | JavaScript | CSS | ReactJS | MongoDB | NodeJs</p>
                  <div className="portButt">
                    <a href="https://mellifluous-gumdrop-aef3b9.netlify.app/"><button>VIEW SITE</button></a>
                    <a href="https://github.com/Anish22prakash/Nykaa"><button>VIEW CODE</button></a>
                  </div>
               </div>
          </div>

          

        </div>

      

    </div>
  );
      };

export default Project;
