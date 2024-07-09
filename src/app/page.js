'use client'
import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
   <>
   <main>
    <Hero/>
    <Projects/>
    <Skills/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </main>
   </>
  );
}
