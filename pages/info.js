import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { PortableText } from "@portabletext/react";

import client from "../client";

const Info = ({ info }) => {
  const location = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ y: "100vh", opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100vh", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ width: "100vw", height: "100vh" }}>
          <div className="infoWrapper">
            <PortableText value={info[0].text} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Info;

export async function getServerSideProps() {
  const info = await client.fetch(`
  *   [_type == "info"]{...}`);

  return {
    props: {
      info,
    },
  };
}
