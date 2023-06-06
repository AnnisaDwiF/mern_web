import React from 'react'
import figma from '../asserts/image/figma.png';
import c from '../asserts/image/c++.png';
import java from '../asserts/image/java.png';
import python from '../asserts/image/python.png';
import html from '../asserts/image/html.png';
import css from '../asserts/image/css.png';
import wordpress from '../asserts/image/wordpress.png'
import vscode from '../asserts/image/vscode.png';
import notion from '../asserts/image/notion.png';

const Skills = () => {
  return (
    <div>
      <section id="Skills">
        <div className="container">
          <h1 className="mt-5 text-center">Skills</h1>
          <div className="text-center mb-4" style={{ fontSize: '12px' }}>My technical skills</div>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
            <div className="card p-3 me-4 mb-4" style={{ width: "198px", height: "143px", border: "1px solid #D4D4D4", borderTopLeftRadius: "16px", marginLeft: "230px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={figma} alt="Skills" style={{ width: "54.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>Figma</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> UI Design, prototyping </div>
              </div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "198px", height: "143px", border: "1px solid #D4D4D4", borderRadius: "0px", marginLeft: "-10px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={c} alt="Skills" style={{ width: "54.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>C++</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> Application Development </div>
              </div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "198px", height: "143px", border: "1px solid #D4D4D4", borderRadius: "0px", marginLeft: "-10px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={java} alt="Skills" style={{ width: "64.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>Java</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> Software Development </div>
              </div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "198px", height: "143px", border: "1px solid #D4D4D4", borderTopRightRadius: "16px", borderBottomRightRadius: "0px", borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px", marginLeft: "-10px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={python} alt="Skills" style={{ width: "64.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>Python</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> Design workspace </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start" style={{ marginTop: "-10px" }}>
            <div className="card p-3 me-4 mb-4" style={{ width: "156px", height: "143px", border: "1px solid #D4D4D4", borderBottomLeftRadius: "16px", borderTopLeftRadius: "0px", marginLeft: "230px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={html} alt="Skills" style={{ width: "54.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>HTML 5</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> Structural Design </div>
              </div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "156px", height: "143px", border: "1px solid #D4D4D4", borderRadius: "0px", marginLeft: "-10px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={css} alt="Skills" style={{ width: "64.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>CSS 3</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> Style Design </div>
              </div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "156px", height: "143px", border: "1px solid #D4D4D4", borderRadius: "0px", marginLeft: "-10px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={wordpress} alt="Skills" style={{ width: "64.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>Wordpress</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> Web development </div>
              </div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "156px", height: "143px", border: "1px solid #D4D4D4", borderRadius: "0px", marginLeft: "-10px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={vscode} alt="Skills" style={{ width: "44.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>VS Code</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> Code editor </div>
              </div>
            </div>
            <div className="card p-3 me-4 mb-4" style={{ width: "156px", height: "143px", border: "1px solid #D4D4D4", borderBottomRightRadius: "16px", borderTopRightRadius: "0px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", marginLeft: "-10px" }}>
              <div className="card-body text-left" style={{ fontSize: "11px", fontWeight: "bold" }}>
                <img src={notion} alt="Skills" style={{ width: "54.81px", height: "54.81px", position: "relative", top: "-10px", left: "50%", transform: "translateX(-50%)" }} />
                <div className="text-center" style={{ marginTop: "-5px" }}>Notion</div>
                <div className="text-center" style={{ marginTop: "6px", fontWeight: "normal", fontSize: "10px" }}> Project managment </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills