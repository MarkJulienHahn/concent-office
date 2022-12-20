import Head from "next/head";

import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <main>
      <Head></Head>
      {children}
    </main>
  );
};

export default Layout;
