"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Nav from "./Nav";
import Dock from "./Dock";
import About from "./About";
import Link from "next/link";
import Projects from "./Projects";
import BackgroundAni from "./BackgroundAni";

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <BackgroundAni />
      <Nav />

      {/* <button onClick={() => setCount(count + 1)}>click meee {count}</button>*/}
    </>
  );
};

export default HomePage;
