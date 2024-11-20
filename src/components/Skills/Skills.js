import React from "react";
import { Link } from "react-router-dom";

import "./Skills.css";

const Skills = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="skills">
      <h3 className="py-5 ">
        My <span>Skillss</span>* {/* &#9733 &#9733 */}
      </h3>
      <div className="container my-5 py-5 text-center" id="skillsContainer">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 my-3">
            <div className="row mx-3 align-items-center mb-5">
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYHczFbQGuy56KJ34R4K6wfCDtsJseFWb8Q&s' alt="HTML" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4  py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1SvKB4XNRk2ob1tSO_LsDAxUMoAx6F_JXQ&s' alt="CSS" className="img-fluid w-60" />
                  <h7 className="text-white mt-3">
                    
                  </h7>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://www.python.org/static/opengraph-icon-200x200.png' alt="Python" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCMwgRARiJM1er2xZMAGQ2SBAFME6ww13pQ&s'
                    alt="JavaScript"
                    className="img-fluid w-60"
                  />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhGETiCc_Hct6__P9a6iU9vs1DqRCDEiHNQ&s' alt="Bootstrap" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DSWQaLctn83MpjP8bFLKgJPetELF0TnVdg&s' alt="flexbox figma" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHN_-raoVqbd27b9HS2nbWyKRuVePKnXfyYg&s' alt="Sql" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3Sp_9UnvsXgAfScS9AHtLrnKfSkAo5RLmw&s' alt="Express js" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://icon-library.com/images/node-js-icon/node-js-icon-15.jpg' alt="Nodejs" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuIIjcBvqyhAIv1VfnNzVHOaPlaCDpOHivg&s' alt="React" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCeMvPDioAu56Rl49jfaRMEaSGgLMzDZmCw&s' alt="git" className="img-fluid w-60" />
                  <h6 className="text-white mt-3">
                    
                  </h6>
                </Link>
              </div>
            </div>
            <p className="my-3 mx-3" id="skillsText">
              Embrace growth, each step forward gets you closer transforming
              <span> mastery</span>. <br />
              Build upon your skills, transforming
              <span> 3s into 4s</span>, and <span>4s into 5s</span>, one at a
              time..!!
            </p>
            
          </div>
          <div className="col-12 col-lg-6 my-3" id="skillImg">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;