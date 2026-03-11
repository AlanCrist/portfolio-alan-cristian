"use client";

import { useState } from "react";
import { animated, useSpring } from "react-spring";
import Image from "next/image";
import Header from "./Header";
import About from "./About";
import ProjectsSection from "./Projects";
import TechNewsSection from "./TechNews";
import ProgrammingTipsSection from "./ProgrammingTips";
import ContactSection from "./Contact";
import Footer from "./Footer";
import profilePic from "../assets/ai.jpg";
import background from "../assets/background.jpg";
import { Article } from "../types";

interface HomeClientProps {
  techNews: Article[];
  tips: Article[];
}

const HomeClient: React.FC<HomeClientProps> = ({ techNews, tips }) => {
  const [open, setOpen] = useState(false);

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  return (
    <div>
      <Header open={open} setOpen={setOpen} />

      <main>
        <section
          id="hero"
          className="relative flex items-center justify-center h-screen text-center"
        >
          <Image
            src={background}
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="relative">
            <animated.div style={textAnimation}>
              <Image
                src={profilePic}
                alt="Alan Cristian"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h1 className="font-serif text-9xl mt-9 text-white font-bold">
                ALN. DEV
              </h1>
              <p className="font-serif text-xl mt-4 text-white">
                WEB DEVELOPER | FULL STACK
              </p>
            </animated.div>
          </div>
        </section>

        <About />
        <ProjectsSection />
        <TechNewsSection articles={techNews} />
        <ProgrammingTipsSection articles={tips} />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default HomeClient;
