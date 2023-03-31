import React from 'react';
import profileImage from '../asserts/image/profile1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload, faFileLines, faHeadphonesAlt, faMedal } from "@fortawesome/free-solid-svg-icons";


const About = () => {
  return (
    <div>
      <section id="About">
        <div className="container"  style={{marginTop: "50px"}}>
          <h1 className="mt-5 text-center">About Me</h1>
          <div className="text-center mb-4">My Introduction</div>
          <div className="row align-items-start"  style={{marginTop: "60px"}}>
            <div className="col-md-6">
              <div className="d-flex justify-content-center justify-content-md-start mb-4">
                <img src={profileImage} alt="About" style={{ width: "354px", height: "302px", borderRadius: "32px", border: "9px solid #E9E9E9"}} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
              <div className="card p-3 me-4 mb-4" style={{ width: "124px", height: "103px", border: "1px solid #D4D4D4", borderRadius: "16px", marginLeft: "-30px"}}>
                  <div className="card-body text-left" style={{fontSize: "11px", fontWeight: "bold"}}>
                  <FontAwesomeIcon icon={faMedal} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "-20px", left: "50%", transform: "translateX(-50%)" }} />
                  <div className="text-center" style={{marginTop: "-35px"}}>Experience</div>
                  <div className="text-center" style={{marginTop: "6px", fontWeight: "normal", fontSize: "10px"}}>- 1 year</div>
                  </div>
                </div>
                <div className="card p-3 me-4 mb-4" style={{ width: "124px", height: "103px", border: "1px solid #D4D4D4", borderRadius: "16px", marginLeft: "50px"}}>
                  <div className="card-body text-left" style={{fontSize: "11px", fontWeight: "bold"}}>
                  <FontAwesomeIcon icon={faCloudUpload} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "-20px", left: "50%", transform: "translateX(-50%)" }} />
                  <div className="text-center" style={{marginTop: "-35px"}}>Completed</div>
                  <div className="text-center" style={{marginTop: "6px", fontWeight: "normal", fontSize: "10px"}}>10 + project</div>
                  </div>
                </div>
                <div className="card p-3 me-4 mb-4" style={{ width: "124px", height: "103px", border: "1px solid #D4D4D4", 
                                                              borderRadius: "16px", marginLeft: "50px",
                                                              fontSize: "10px"}}>
                  <div className="card-body text-left" style={{fontSize: "11px", fontWeight: "bold"}}>
                  <FontAwesomeIcon icon={faHeadphonesAlt} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "-20px", left: "50%", transform: "translateX(-50%)" }} />
                  <div className="text-center" style={{marginTop: "-35px"}}>Supports</div>
                  <div className="text-center" style={{marginTop: "6px", fontWeight: "normal", fontSize: "10px"}}>online 24/7</div>
                  </div>
                </div>
              </div>
              <div style={{fontSize: "12px", marginTop: "10px", marginLeft: "-30px", fontStyle:"-moz-initial"}}>As a fresh graduate studying MERN, I studied these 
              technologies in isolation <br/> and then learned how to integrate them to build full stack web applications.
              </div>
              <button className="btn btn-dark mt-3" style={{marginLeft: "-30px"}}>
                          Download cv <FontAwesomeIcon icon={faFileLines} className="ms-2" />
                        </button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default About;
