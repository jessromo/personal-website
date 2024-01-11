"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Nav from "./Nav";
import Dock from "./Dock";
import { FaSquareGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
//import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/Jessromo", "_blank");
  };
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/jessica-romo-607083273", "_blank");
  };
  return (
    <>
      <h1 id="contactTitle">Get in touch!</h1>
      <div className="emailInfo">
        <MdEmail className="emailicon" />
        <p id="email">Jessiromo06@gmail.com</p>
      </div>
      <div className="phoneInfo">
        <FaPhoneSquareAlt className="phoneicon" />
        <p id="number">817-896-9945</p>
      </div>
      <div className="gitinfo">
        <a
          href="https://github.com/Jessromo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub
            icon={FaSquareGithub}
            className="githublogo"
            onClick={handleGithubClick}
          />
        </a>
        <p id="gittext">You can check out my Github here!</p>
      </div>
      <div className="linkedinfo">
        <a
          href="https://www.linkedin.com/in/jessica-romo-607083273"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            icon={FaLinkedin}
            className="linkedin"
            onClick={handleLinkedinClick}
          />
        </a>
        <p id="linkedtext"> You can visit my LinkedIn profile here!</p>
      </div>
    </>
  );
};

export default Contact;
