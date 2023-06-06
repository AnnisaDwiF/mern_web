import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodePullRequest, faObjectGroup } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Services = () => {
  return (
    <div>
      <section id="Services">
        <div className="container">
          <h1 className="mt-5 text-center"> Services</h1>
          <div className="text-center mb-4" style={{ fontSize: '12px' }}>What i offer</div>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
            <div className="card p-3 me-4 mb-4" style={{ width: "211px", height: "215px", border: "1px solid #D4D4D4", borderRadius: "16px", marginLeft: "256px" }}>
              <FontAwesomeIcon icon={faObjectGroup} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "50px", left: "10%", transform: "translateX(-50%)" }} />
              <div style={{ display: "inline-block", marginTop: "45px", fontWeight: 'bold' }}>Web</div>
              <div style={{ display: "inline-block", fontWeight: 'bold' }}>Designer</div>
              <div className="text-center" style={{ marginTop: "20px", fontWeight: "normal", fontSize: "10px", marginLeft: '-125px' }}>View More</div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "211px", height: "215px", border: "1px solid #D4D4D4", borderRadius: "16px", marginLeft: "50px" }}>
              <FontAwesomeIcon icon={faCode} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "50px", left: "10%", transform: "translateX(-50%)" }} />
              <div style={{ display: "inline-block", marginTop: "45px", fontWeight: 'bold' }}>UI/UX</div>
              <div style={{ display: "inline-block", fontWeight: 'bold' }}>Designer</div>
              <div className="text-center" style={{ marginTop: "20px", fontWeight: "normal", fontSize: "10px", marginLeft: '-125px' }}>View More</div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "211px", height: "215px", border: "1px solid #D4D4D4", borderRadius: "16px", marginLeft: "50px" }}>
              <FontAwesomeIcon icon={faCodePullRequest} size="2x" className="mb-3 text-black" style={{ position: "relative", top: "50px", left: "10%", transform: "translateX(-50%)" }} />
              <div style={{ display: "inline-block", marginTop: "45px", fontWeight: 'bold' }}>Branding</div>
              <div style={{ display: "inline-block", fontWeight: 'bold' }}>Designer</div>
              <div className="text-center" style={{ marginTop: "20px", fontWeight: "normal", fontSize: "10px", marginLeft: '-125px' }}>View More</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services