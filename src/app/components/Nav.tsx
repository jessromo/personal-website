"use client";
//import Link from "next/link";
import { Element, scroller, Link } from "react-scroll";
import Contact from "../contact/page";
import Projects from "../projects/page";
import About from "./About";
const Nav = () => {
  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart", // Smooth scrolling animation
    });
  };

  const handleClick = () => {
    scrollToSection("section1");
  };

  return (
    <>
      {/*} <nav id="navbar">
        <ul>
          <li>Home</li>
          <li>
            <Link href="../projects">Projects</Link>
          </li>
          <li>
            <Link href="../contact">Contact</Link>
          </li>
        </ul>
  </nav>*/}
      <div>
        {/* Button to trigger scroll */}
        <button onClick={handleClick}>Scroll to Section</button>

        {/* Section you want to scroll to */}
        <div id="section1">
          
        </div>
      </div>
    </>
  );
};

export default Nav;
