"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Header from "./Header";
import About from "./About";
import ProjectsSection from "./Projects";
import TechNewsSection from "./TechNews";
import ProgrammingTipsSection from "./ProgrammingTips";
import ContactSection from "./Contact";
import Footer from "./Footer";
import { Article } from "../types";

interface HomeClientProps {
  techNews: Article[];
  tips: Article[];
}

const glitchBlocks = [
  { left: "5%",  top: "18%", width: "65%", height: "7%", delay: 0,   duration: 0.12 },
  { left: "0%",  top: "42%", width: "45%", height: "5%", delay: 1.8, duration: 0.09 },
  { left: "25%", top: "68%", width: "60%", height: "6%", delay: 3.2, duration: 0.15 },
  { left: "10%", top: "55%", width: "35%", height: "4%", delay: 0.7, duration: 0.11 },
  { left: "40%", top: "30%", width: "50%", height: "6%", delay: 4.1, duration: 0.13 },
];

const HomeClient: React.FC<HomeClientProps> = ({ techNews, tips }) => {
  const [open, setOpen] = useState(false);
  const [profileVideoError, setProfileVideoError] = useState(false);

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  // --- Motion blur effect on profile image ---
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const imgScale = useMotionValue(1);

  const filterBlur = useTransform(
    [blurX, blurY],
    ([bx, by]: number[]) => `blur(${Math.abs(bx)}px) blur(${Math.abs(by)}px)`
  );

  const svgBlurStd = useTransform(
    [blurX, blurY],
    ([bx, by]: number[]) => `${Math.abs(bx)},${Math.abs(by)}`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mx = e.clientX;
      const my = e.clientY;

      const dx = mx - lastPos.current.x;
      const dy = my - lastPos.current.y;
      lastPos.current = { x: mx, y: my };

      const maxBlur = 12;
      const bx = Math.min(Math.max(dx * 0.6, -maxBlur), maxBlur);
      const by = Math.min(Math.max(dy * 0.6, -maxBlur), maxBlur);

      blurX.set(bx);
      blurY.set(by);

      const ox = (mx - cx) * 0.08;
      const oy = (my - cy) * 0.08;
      offsetX.set(ox);
      offsetY.set(oy);
      imgScale.set(1.04);

      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        animate(blurX, 0, { duration: 0.8, ease: "easeOut" });
        animate(blurY, 0, { duration: 0.8, ease: "easeOut" });
        animate(offsetX, 0, { duration: 1, ease: "easeOut" });
        animate(offsetY, 0, { duration: 1, ease: "easeOut" });
        animate(imgScale, 1, { duration: 1, ease: "easeOut" });
      }, 1500);
    },
    [blurX, blurY, offsetX, offsetY, imgScale]
  );

  const handleMouseLeave = useCallback(() => {
    animate(blurX, 0, { duration: 0.6, ease: "easeOut" });
    animate(blurY, 0, { duration: 0.6, ease: "easeOut" });
    animate(offsetX, 0, { duration: 0.8, ease: "easeOut" });
    animate(offsetY, 0, { duration: 0.8, ease: "easeOut" });
    animate(imgScale, 1, { duration: 0.8, ease: "easeOut" });
  }, [blurX, blurY, offsetX, offsetY, imgScale]);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animId: number;
    let lastTimestamp = 0;
    let isReversing = false;

    const scrubBackward = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      const next = video.currentTime - delta;
      if (next <= 0) {
        video.currentTime = 0;
        isReversing = false;
        lastTimestamp = 0;
        video.play();
        return;
      }

      video.currentTime = next;
      animId = requestAnimationFrame(scrubBackward);
    };

    // catch it ~300ms before the end so the video never freezes on the last frame
    const handleTimeUpdate = () => {
      if (!isReversing && video.duration && video.currentTime >= video.duration - 0.3) {
        video.pause();
        isReversing = true;
        lastTimestamp = 0;
        cancelAnimationFrame(animId);
        animId = requestAnimationFrame(scrubBackward);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div>
      {/* SVG filter for directional motion blur */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="motionBlur">
            <motion.feGaussianBlur
              in="SourceGraphic"
              stdDeviation={svgBlurStd as unknown as string}
            />
          </filter>
        </defs>
      </svg>

      <Header open={open} setOpen={setOpen} />

      <main>
        <section
          id="hero"
          className="relative flex items-center justify-center h-screen text-center overflow-hidden"
          style={{ background: "var(--bg-primary)" }}
        >
          {/* Background video with overlay */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />

          {/* Animated gradient orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
                top: "10%",
                left: "10%",
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 20, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)",
                bottom: "10%",
                right: "10%",
              }}
              animate={{
                x: [0, -40, 30, 0],
                y: [0, 30, -50, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 3 + (i % 3) * 2,
                  height: 3 + (i % 3) * 2,
                  background: "var(--accent-light)",
                  opacity: 0.15,
                  left: `${10 + i * 11}%`,
                  top: `${15 + (i % 4) * 20}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.1, 0.4, 0.1],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 pt-16 sm:pt-0">
            <animated.div style={textAnimation}>
              {/* Profile image with motion blur */}
              <div
                ref={imgRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative mx-auto cursor-pointer w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
              >
                <motion.div
                  style={{
                    x: offsetX,
                    y: offsetY,
                    scale: imgScale,
                    filter: filterBlur,
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 0 40px rgba(124, 58, 237, 0.3)",
                    border: "3px solid rgba(124, 58, 237, 0.3)",
                  }}
                  className="w-full h-full"
                >
                  {profileVideoError ? (
                    <img
                      src="/logo.png"
                      alt="Alan Cristian"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src="/me.mp4"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 0%", transform: "scale(1.8)", transformOrigin: "center top" }}
                      onError={() => setProfileVideoError(true)}
                    />
                  )}

                  {/* Scanlines */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
                      zIndex: 1,
                    }}
                  />

                  {/* Sweep scan */}
                  <motion.div
                    className="absolute left-0 right-0 pointer-events-none"
                    style={{
                      height: "22%",
                      background: "linear-gradient(to bottom, transparent, rgba(124,58,237,0.1), transparent)",
                      zIndex: 2,
                    }}
                    animate={{ top: ["-22%", "122%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
                  />

                  {/* Glitch blocks */}
                  {glitchBlocks.map((b, i) => (
                    <motion.div
                      key={i}
                      className="absolute pointer-events-none"
                      style={{
                        left: b.left, top: b.top, width: b.width, height: b.height,
                        background: "var(--accent)",
                        mixBlendMode: "screen",
                        zIndex: 3,
                      }}
                      animate={{ opacity: [0, 0, 0.3, 0.3, 0] }}
                      transition={{
                        duration: b.duration,
                        repeat: Infinity,
                        repeatDelay: b.delay + 2,
                        ease: "linear",
                        times: [0, 0.45, 0.5, 0.95, 1],
                      }}
                    />
                  ))}
                </motion.div>
                {/* Glow rings */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "2px solid var(--accent)" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid var(--accent-light)" }}
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>

              {/* Title */}
              <motion.h1
                className="font-heading text-5xl sm:text-7xl md:text-9xl mt-6 md:mt-9 font-bold text-white"
                initial={{ opacity: 0, y: 20, letterSpacing: "0.3em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              >
                <span className="gradient-text">ALN</span>
                <span style={{ color: "var(--text-muted)" }}>.</span> DEV
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="font-heading text-sm sm:text-lg md:text-xl mt-4 tracking-[0.15em] sm:tracking-[0.3em] uppercase"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                Web Developer | Full Stack
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-wrap gap-3 justify-center mt-8 md:mt-10 px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <a
                  href="#projects"
                  className="px-8 py-3 rounded-full font-heading text-sm font-semibold text-white animate-gradient"
                  style={{ background: "var(--accent-gradient)" }}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="glass px-8 py-3 rounded-full font-heading text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Contact Me
                </a>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="mt-16 flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span
                  className="text-sm mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Scroll
                </span>
                <div
                  className="w-5 h-8 rounded-full flex justify-center"
                  style={{ border: "2px solid var(--border-hover)" }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full mt-1"
                    style={{ background: "var(--accent-light)" }}
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
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
