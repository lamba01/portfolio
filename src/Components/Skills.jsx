import React, {useEffect, forwardRef} from "react";
import "../styles/skills.css"
import { FaFigma, FaNodeJs, FaCss3Alt, FaReact } from "react-icons/fa"
import { DiPhotoshop } from "react-icons/di"
import { SiJavascript } from "react-icons/si"
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = forwardRef((props, ref) => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <section className="skill" ref={ref}>
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
            <div className="photoshop">
            <div className="percentage-container"><DiPhotoshop size={"15px"}/><h5>Material UI</h5></div>
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
                <div className="percentage-container"><FaNodeJs size={"15px"}/><h5>Node.js</h5></div>
                <div className="completion"><div className="progress" ></div></div>
            </div>
            <div>
                <div className="percentage-container"><RiTailwindCssFill size={"15px"}/><h5>Tailwind CSS</h5></div>
                <div className="completion"><div className="progress" ></div></div>
            </div>
           <div> 
                <div className="percentage-container">< GrMysql size={"15px"}/><h5>MySQL</h5></div>
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
});

export default Skills