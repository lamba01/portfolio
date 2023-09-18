import React from "react";
import "../styles/services.css"
import { CgWebsite } from "react-icons/cg"
import { AiFillAppstore } from "react-icons/ai"
import { TbSeo } from "react-icons/tb"
import { BiLogoShopify } from "react-icons/bi"
import { PiCodeSimpleThin } from "react-icons/pi"
import { SiCraftcms } from "react-icons/si"
function Services() {
    return (
        <section className="services">
            <h1>What i do</h1>
            <div className="list">
                <div><CgWebsite size={"2em"}/><h3>Website Development</h3></div>
                <div><AiFillAppstore size={"2em"}/><h3>Web Application Development</h3></div>
                <div><TbSeo size={"2em"}/><h3>SEO Optimization</h3></div>
                <div><BiLogoShopify size={"2em"}/><h3> E-Commerce Development</h3></div>
                <div><PiCodeSimpleThin size={"2em"}/><h3> Website Redesign</h3></div>
                <div><SiCraftcms size={"2em"}/><h3>Content Management Systems (CMS)</h3></div>
            </div>
        </section>
    )
}

export default Services;