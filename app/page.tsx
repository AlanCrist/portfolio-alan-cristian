"use client";

import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import profilePic from "./assets/ai.jpg";
import background from "./assets/background.jpg";
import Footer from "./components/Footer";
import NewsSection from "./components/News";
import { Article } from "./types";
import { getGpt4GeneratedSummary } from "./services/openai";
import { fetchNewsFromGNews } from "./services/gnews";

interface HomePageProps {
  news: Article[];
}

const Home: React.FC<HomePageProps> = () => {
  const [open, setOpen] = useState(false);

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });

  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchAndGenerateNews() {
      try {
        const res = await fetchNewsFromGNews();

        console.log(res);

        const newsData = await Promise.all(
          res.slice(0, 9).map(async (article: any) => {
            const summary = await getGpt4GeneratedSummary(
              `${article.description} ${article.content}`
            );
            return {
              title: article.title,
              summary,
            };
          })
        );

        console.log(newsData);

        setNews(newsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAndGenerateNews();
  }, []);

  return (
    <div>
      <Head>
        <title>Alan Cristian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header open={open} setOpen={setOpen} />

      <main>
        <section
          id="hero"
          className="relative flex items-center justify-center h-screen text-center"
        >
          <Image
            src={background}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
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
        <NewsSection news={news} />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
