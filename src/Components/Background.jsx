import React from "react"; 
import '../styles/background.css'
import backgroundImage from "../images/peakpx.jpg"


function Background() {
    return (
        <div className={`background-image`} 
        style={{  backgroundImage: `url(${backgroundImage})` }}>            
        </div>
    )
}

export default Background;