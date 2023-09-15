import React from "react";
import "../styles/skills.css"
import {FaFigma, FaHtml5, FaCss3Alt, FaBootstrap, FaReact} from "react-icons/fa"
import {DiPhotoshop} from "react-icons/di"
import {SiJavascript} from "react-icons/si"

function Skills() {
    return (
        <section className="skill">
            <h1>My Skills</h1>
            <div className="skills">
            <div className="design"><h1>Design</h1>
            <div className="design-container">
            <div className="figma">
                <div className="percentage-container"><div><FaFigma size={"15px"}/><h5>Figma</h5></div><span>55%</span></div>
                <div className="completion"><div className="progress"></div></div>
            </div>
            <div className="photoshop">
            <div className="percentage-container"><div><DiPhotoshop size={"15px"}/><h5>Photoshop</h5></div><span>60%</span></div>
                <div className="completion"><div className="progress"></div></div>
            </div>
            </div>
            </div>
            
            
            <div className="coding"><h1>Coding</h1>
            <div className="coding-container">
            <div>
                <div className="percentage-container"> <div><SiJavascript size={"15px"}/><h5>JavaScript</h5></div><span>90%</span></div>
                <div className="completion"><div className="progress"></div></div>
            </div>
            <div>
                <div className="percentage-container"><div><FaCss3Alt size={"15px"}/><h5>CSS3</h5></div><span>80%</span></div>
                <div className="completion"><div className="progress"></div></div>
            </div>
            <div>
                <div className="percentage-container"><div><FaHtml5 size={"15px"}/><h5>HTML5</h5></div><span>40%</span></div>
                <div className="completion"><div className="progress"></div></div>
            </div>
            <div>
                <div className="percentage-container"><div><FaBootstrap size={"15px"}/><h5>Bootstrap</h5></div><span>70%</span></div>
                <div className="completion"><div className="progress"></div></div>
            </div>
           <div> 
                <div className="percentage-container"><div><FaReact size={"15px"}/><h5>React</h5></div><span>55%</span></div>
                <div className="completion"><div className="progress"></div></div>
            </div>
            </div>
            </div>
            </div> 
        </section>
    )
}

export default Skills