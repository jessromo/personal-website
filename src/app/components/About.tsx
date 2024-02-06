"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Nav from "./Nav";
import Dock from "./Dock";
import { FaGit, FaNode, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import "animate.css";

const About = () => {
 
  return (
    <>
      <h1 id="name">Jessica Romo</h1>
      <p id="title">Frontend Developer</p>
      <p id="desc">
        {/* React developer with a passion for creating user-focused web apps with
        clean,
        <br /> innovative solutions for engaging digital experiences.
  */}
        Self taught frontend developer
      </p>
      <div className="langs">
        <ul className="lang">
          <li>
            <RiJavascriptFill
              id="jsl"
              class="animate__animated animate__fadeIn"
            />
          </li>
          <li>
            <BiLogoTypescript
              id="tsl"
              class="animate__animated animate__fadeIn"
            />
          </li>
          <li>
            <SiNextdotjs id="njs" class="animate__animated animate__fadeIn" />
          </li>
          <li>
            <FaHtml5 id="htmll" class="animate__animated animate__fadeIn" />
          </li>
          <li>
            <IoLogoCss3 id="cssl" class="animate__animated animate__fadeIn" />
          </li>
          <li>
            <BiLogoPostgresql
              id="pgl"
              class="animate__animated animate__fadeIn"
            />
          </li>
          <li>
            <FaNodeJs id="njsl" class="animate__animated animate__fadeIn" />
          </li>
          <li>
            <FaReact id="rl" class="animate__animated animate__fadeIn" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
