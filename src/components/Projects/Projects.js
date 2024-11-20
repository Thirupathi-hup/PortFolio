import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      <h3 className="py-5 ">
        My <span>Projectss</span>...
      </h3>
      <p style={{color:"blue"}}> username:rahul , password:rahul@2021</p>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-12 col-md-6 px-4 py-4">
            <a href='https://nxttrendzpravee.ccbp.tech/login' target="_blank"  rel="noreferrer">
            <img
              src='https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png'
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
            </a>
            
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
          <a href='https://todothiruresume.ccbp.tech' target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/delfvydbg/image/upload/v1731995409/Screenshot_2024-11-19_110246_sc2tce.png" 
              alt="Project 2"
              className="img-fluid shadow rounded projImg"
            />
            
            </a>
            
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
          <a href='https://jobbybypraveen.ccbp.tech/login' target="_blank" rel="noreferrer">
            <img
              src='https://res.cloudinary.com/delfvydbg/image/upload/v1731996118/Screenshot_2024-11-19_103649_hiav3g.png'
              alt="Project 3"
              className="img-fluid shadow rounded projImg"
            />
            </a>
            
          </div>
           <div className="col-12 col-md-6 px-4 py-4">
          <a href='https://tix.ccbp.tech' target="_blank" rel="noreferrer">
            <img
              src='https://res.cloudinary.com/delfvydbg/image/upload/v1731996175/Screenshot_2024-11-19_103800_dzbu35.png'
              alt="Project 4"
              className="img-fluid shadow rounded projImg"
            />
            
            </a>
            
          </div>
          
        </div>
      </div>
      <h4 className="py-5" style={{color:"blue"}}>For more projects and code samples, head over to <a href="https://github.com/Thirupathi-hup"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:"lightgreen"}}
              > my GitHub profile!</a></h4>
    </div>
  );
};

export default Projects;