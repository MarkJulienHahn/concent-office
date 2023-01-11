import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import Head from "next/head";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

import client from "../client";

export default function Home({ projects, english, setSliderTitle }) {
  const location = useRouter();

  const { ref: projectsRef, inView: projIsVisible } = useInView({
    threshold: 0.01,
  });
  const { ref: landingRef, inView: landingIsVisible } = useInView({
    threshold: 0.01,
  });

  const scrollDown = () => {
    window.scrollTo({
      top: 100000,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    projIsVisible &&
      window.scrollTo({
        top: 100000,
        behavior: "smooth",
      });
  }, [projIsVisible]);

  useEffect(() => {
    landingIsVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }, [landingIsVisible]);


  return (
    <div>
      <Head>
        <title>Concept Office</title>
        <meta name="description" content="Concept Office" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Layout>
            <div ref={landingRef} onClick={scrollDown}>
              <Landing />
            </div>
            <div ref={projectsRef}>
              <Projects projects={projects} setSliderTitle={setSliderTitle} english={english}/>
            </div>
          </Layout>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export async function getServerSideProps() {
  const projects = await client.fetch(`
  *   [_type == "projects"]|order(orderRank){"image": image.asset->{url, "dimensions": metadata.dimensions}, alt, ...}`);

  return {
    props: {
      projects,
    },
  };
}
