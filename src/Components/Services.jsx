import React, {useEffect} from "react";
import "../styles/services.css"
import { CgWebsite } from "react-icons/cg"
import { AiFillAppstore } from "react-icons/ai"
import { TbSeo } from "react-icons/tb"
import { BiLogoShopify } from "react-icons/bi"
import { PiCodeSimpleThin } from "react-icons/pi"
import { SiCraftcms } from "react-icons/si"
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <section className="services">
            <h1 data-aos="fade-right">What i do</h1>
            <div className="list">
                <div data-aos="fade-left"><CgWebsite size={"2em"}/><h3>Website Development</h3></div>
                <div data-aos="fade-left"><AiFillAppstore size={"2em"}/><h3>Web Application Development</h3></div>
                <div data-aos="fade-left"><TbSeo size={"2em"}/><h3>SEO Optimization</h3></div>
                <div data-aos="fade-left"><BiLogoShopify size={"2em"}/><h3> E-Commerce Development</h3></div>
                <div data-aos="fade-left"><PiCodeSimpleThin size={"2em"}/><h3> Website Redesign</h3></div>
                <div data-aos="fade-left"><SiCraftcms size={"2em"}/><h3>Content Management Systems (CMS)</h3></div>
            </div>
        </section>
    )
}

export default Services;

