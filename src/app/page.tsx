import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./components/HomePage";
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from "next/dist/lib/constants";
import BackgroundAni from "./components/BackgroundAni";

export default function Home() {
  return (
    <>
      <BackgroundAni />
      <HomePage />
    </>
  );
}
