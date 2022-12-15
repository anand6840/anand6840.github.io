import { color } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";








const GitHub = () => {
  const github = {
    margin: "auto",
    // border: "3px solid rgb(108, 99, 255)",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={{ backgroundColor:"#11111a;", marginTop:"-40px"}}>
     
     <h1 style={{color:"transparent"}}>ABOUT ME</h1>
      <h1
        _hover={{ color: "red" }}
        color="red"
        size={["xl","2xl","2xl","3xl"]}
        // mt={[2,5,7,10]}
        mb={[5,5,7,10]}
      >
        GITHUB
      </h1>
      <div w={["90%", "90%","90%","80%"]} style={github} className="github_Calender">
        <GitHubCalendar
          style={{ margin: "auto", color:"white" }}
          username="anand6840"
          year={new Date().getFullYear()}
        />
      </div>

      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px" ,marginTop:"50px", flexWrap:"wrap"}}>
      <img  id="image1" w={["70%","75%","80%","90%"]} margin="auto" src="https://github-readme-stats.vercel.app/api?username=anand6840&show_icons=true&locale=en" />
          <img
            id="image1"
            w={["70%","75%","80%","90%"]}
            margin="auto"
            src="https://github-readme-streak-stats.herokuapp.com/?user=anand6840&"
          />
      </div>

    </div>
  );
};

export default GitHub;

