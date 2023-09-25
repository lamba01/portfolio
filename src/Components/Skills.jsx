import React, {useEffect} from "react";
import "../styles/skills.css"
import { FaFigma, FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa"
import { DiPhotoshop } from "react-icons/di"
import { SiJavascript } from "react-icons/si"
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <section className="skill">
            <h1 data-aos="fade-up">My Skills</h1>
            <div className="skills">
            <div className="design" data-aos= "fade-right"><h1>Design</h1>
            <div className="design-container">
            <div className="figma">
                <div className="percentage-container"><FaFigma size={"15px"}/><h5>Figma</h5></div>
                <div className="completion"><div className="progress"></div></div>
            </div>
            <div className="photoshop">
            <div className="percentage-container"><DiPhotoshop size={"15px"}/><h5>Photoshop</h5></div>
                <div className="completion"><div className="progress" ></div></div>
            </div>
            </div>
            </div>
            
            
            <div className="coding" data-aos= "fade-left"><h1>Coding</h1>
            <div className="coding-container" >
            <div>
                <div className="percentage-container"><SiJavascript size={"15px"}/><h5>JavaScript</h5></div>
                <div className="completion"><div className="progress" ></div></div>
            </div>
            <div>
                <div className="percentage-container"><FaCss3Alt size={"15px"}/><h5>CSS3</h5></div>
                <div className="completion"><div className="progress" ></div></div>
            </div>
            <div>
                <div className="percentage-container"><FaHtml5 size={"15px"}/><h5>HTML5</h5></div>
                <div className="completion"><div className="progress" ></div></div>
            </div>
            <div>
                <div className="percentage-container"><FaBootstrap size={"15px"}/><h5>Bootstrap</h5></div>
                <div className="completion"><div className="progress" ></div></div>
            </div>
           <div> 
                <div className="percentage-container"><FaReact size={"15px"}/><h5>React</h5></div>
                <div className="completion"><div className="progress" ></div></div>
            </div>
            </div>
            </div>
            </div> 
        </section>
    )
}

export default Skills