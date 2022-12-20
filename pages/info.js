import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { PortableText } from "@portabletext/react";

import client from "../client";


const Info = ({ info }) => {
  const location = useRouter();

  console.log(info);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="infoWrapper">
        <PortableText value={info[0].text} />

      </div>
    </div>
  );
};

export default Info;

export async function getStaticProps() {
  const info = await client.fetch(`
  *   [_type == "info"]{...}`);

  return {
    props: {
      info,
    },
    revalidate: 10,
  };
}
