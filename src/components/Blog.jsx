import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../asserts/image/profile1.png'

const Blog = () => {
  return (
    <div>
      <section id='Blog'>
        <div className="container" style={{ marginTop: "50px" }}>
          <h1 className="mt-5 text-center">Qualification</h1>
          <div className="text-center mb-4" style={{ fontSize: '12px' }}>My personal journey</div>
          <div className="row align-items-start"  ></div>
          <div className="col-md-6">
            <div className="d-flex align-items-center" style={{ marginTop: "10px", fontWeight: "bold" }}>
              <FontAwesomeIcon icon={faGraduationCap} size="1x" style={{ marginLeft: "515px" }} />
              <div className="ms-3">Educations</div>
              <FontAwesomeIcon icon={faBagShopping} size="1x" style={{ marginLeft: "50px" }} />
              <div className="ms-3">Experience</div>
            </div>

          </div>
          <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "50px", marginLeft: '500px' }}>
            <div style={{ marginTop: '-350px' }}>Text on the left</div>
            <span style={{ display: "flex", alignItems: "center" }}>
              <div className="line" style={{ width: "2px", height: "400px", backgroundColor: "#000000" }}></div>
            </span>
            <div style={{ marginRight: '500px', marginTop: '-150px' }}>Text on the right</div>
          </div>
        </div>
        <h1 className="mt-5 text-center" >Testimonial</h1>
        <div className="text-center mb-4" style={{ fontSize: '12px' }}>My client saying</div>
        <div className="d-flex flex-wrap justify-content-center justify-content-md-start" style={{ marginTop: "60px" }}>
          <div className="card p-3 me-4 mb-4 shadow" style={{ width: "411px", height: "180px", border: "1px solid #D4D4D4", borderRadius: "16px", marginLeft: "335px", fontSize: '14.9px' }}>
            <div className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
            <div className="d-flex justify-content-start">
              <img src={profileImage} alt="Profile" style={{ width: "55.65px", height: "55.65px", borderRadius: "50%", marginTop: "12px", boxSizing: "border-box" }} />
              <div className="ms-3" style={{ marginTop: '12px', fontSize: '14.9px', fontWeight: "bold", color: 'orange' }}>Lorem ipsum dolor </div>
              {/* <div className="ms-4" style={{ marginTop: '12px', fontSize: '14.9px', color: 'orange' }}>Lorem ipsum dolor </div> */}
            </div>
          </div>
          <div className="card p-3 me-4 mb-4 shadow" style={{ width: "411px", height: "180px", border: "1px solid #D4D4D4", borderRadius: "16px", marginLeft: "2px" }}>
            <div className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
            <div className="d-flex justify-content-start">
              <img src={profileImage} alt="Profile" style={{ width: "55.65px", height: "55.65px", borderRadius: "50%", marginTop: "12px", boxSizing: "border-box" }} />
              <div className="ms-3" style={{ marginTop: '12px', fontSize: '14.9px', fontWeight: "bold", color: 'orange' }}>Lorem ipsum dolor </div>
              {/* <div className="ms-4" style={{ marginTop: '12px', fontSize: '14.9px', color: 'orange' }}>Lorem ipsum dolor </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog