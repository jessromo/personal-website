"use client";
import Link from "next/link";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import { useRef } from "react";

const Nav: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);

  const autoScroll = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div id="navbar">
          {/* Buttons to scroll to different sections */}
          <ul id="navs">
            <li>
              {" "}
              <button
                onClick={() => autoScroll(sectionRef1)}
                className="buttons"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => autoScroll(sectionRef2)}
                className="buttons"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => autoScroll(sectionRef3)}
                className="buttons"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        {/* Elements to scroll to */}
        <div ref={sectionRef1}>{<About />}</div>
        <div ref={sectionRef2}>{<Projects />}</div>
        <div ref={sectionRef3}>{<Contact />}</div>
      </div>
    </>
  );
};
export default Nav;
