import React, {useState} from "react";
import {MdDownloading} from "react-icons/md"
import "../styles/download.css";
import CV from "../Assets/John's CV.pdf"


function DownloadButton() {
    const [isRotated, setIsRotated] = useState(false);
    const handleDownload = () => {
        const resumeUrl = CV; 
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "John's Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsRotated(true); 
      };
      return (
        <div  className={`download-button ${isRotated ? "rotated" : ""}`} onClick={handleDownload} title="Download cv">
          <MdDownloading size={"2em"} /> 
        </div>

      );
}

export default DownloadButton;
