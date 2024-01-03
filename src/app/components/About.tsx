"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Nav from "./Nav";
import Dock from "./Dock";

const About = () => {
  return (
    <>
      <h1 id="name">Jessica Romo</h1>
      <p id="title">Frontend developer</p>
      <p id="desc">
        React developer with a passion for creating user-focused web apps with
        clean,
        <br /> innovative solutions for engaging digital experiences.
      </p>
    </>
  );
};

export default About;
