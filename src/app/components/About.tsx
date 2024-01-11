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

const About = () => {
  return (
    <>
      <h1 id="name">Jessica Romo</h1>
      <p id="title">Frontend developer</p>
      <p id="desc">
        {/* React developer with a passion for creating user-focused web apps with
        clean,
        <br /> innovative solutions for engaging digital experiences.
  */}
        small little description of me will go here
      </p>
      <div className="langs">
        <ul className="lang">
          <li>
            <RiJavascriptFill />
          </li>
          <li>
            <BiLogoTypescript />
          </li>
          <li>
            <SiNextdotjs />
          </li>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <IoLogoCss3 />
          </li>
          <li>
            <BiLogoPostgresql />
          </li>
          <li>
            <FaNodeJs />
          </li>
          <li>
            <FaReact />
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
