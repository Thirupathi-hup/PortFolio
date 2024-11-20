import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing specific icons
import "./Cover.css";

const Cover = () => {
  return (
    <div className="container py-5 mb-5 my-5" id="home">
      <div className="row align-items-center my-5 py-5">
        {/* Profile Image Section */}
        <div className="col-12 col-md-4 text-center py-3">
          <img
            src="https://res.cloudinary.com/delfvydbg/image/upload/v1732084754/1732084182919_yfn2el.jpg"
            alt="Profile"
            className="img-fluid profile-image"
          />
        </div>

        {/* Text Content Section */}
        <div className="col-12 col-md-8 py-3">
          <h4 className="font-weight-bold">Hello, It's me</h4>
          <h2 className="font-weight-bold">Thirupathi P</h2>
          <h4 className="font-weight-bold mb-4 pb-2">
            I'm a{" "}
            <span>
              <marquee behavior="scroll" direction="left" scrollamount="10">
                Full Stack Developer, Front End Developer, Back End Developer,
                MERN Stack Developer
              </marquee>
            </span>
          </h4>
          <p className="font-weight-normal">
            I'm an employee interested in Full Stack Development, Front End
            Development, Back End Development, and MERN Stack Development.{" "}
            <span style={{ color: "red" }}>
              I am available to join immediately and look forward to contributing right away.
            </span>
          </p>

          <div className="social-media py-3">
            <a
              href="https://www.linkedin.com/in/thirupathi-p-1594361a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLinkedin size={20} color="white" /> {/* React Icon for LinkedIn */}
            </a>
            <a
              href="https://github.com/Thirupathi-hup"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaGithub size={20} color="white" /> {/* React Icon for GitHub */}
            </a>
            <a
              href="mailto:thirupathi7321@gmail.com?subject=Hello&body=Hi%20there,%0A%0AJust%20wanted%20to%20say%20hello!"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaEnvelope size={20} color="white" /> {/* React Icon for Email */}
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1jc5Y2rBFOLxcuybBslwVxAwCyRLXbV1F/view?usp=sharing"
            download="resume.pdf"
          >
            <button className="button my-3">Download Resume 🫠</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cover;
