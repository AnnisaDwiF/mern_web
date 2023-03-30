import React from 'react'
import profileImage from '../asserts/image/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <div>
        <section id="home">
            <div className="container px-0">
                <div className="row">
                    <div className="col-md-8 mt-5">
                        <h1 className="logo1 mt-5">Annisa Dwi Febryanti</h1>
                        <div className="d-flex align-items-center">
                            <div className="line" style={{ width: "15%", height: "2px", backgroundColor: "#000000", 
                                                           marginTop: "10px", marginBottom: "10px" }}></div>
                            <div className="ms-3">I am a freshgraduate from Padang State Polytechnic</div>
                        </div>
                        <p className="mt-3">
                            I am always eager to learn and explore new things.<br/> My passion
                            for programming and web development has driven me to <br/> continuously
                            improve my skills and knowledge in this field.
                        </p>
                        <button className="btn btn-dark mt-3">
                          Say Hello <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                        </button>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="d-flex justify-content-end">
                            <img src={profileImage} alt="Profile" style={{ width: "200px", height: "200px", borderRadius: "50%", marginTop: "40px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
