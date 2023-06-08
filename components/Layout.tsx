import Head from "next/head";
import Navbar from "../components/Navbar";
import { Fragment } from "react";
import BackgroundImageLoader from "./BackgroundImageLoader";

interface LayoutProps {
  children: React.ReactNode;
  background: string;
}

const Layout = (props: {
  children: React.ReactNode | React.ReactNode[];
  background: string;
}) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="../public/favicon-32x32.png" type="image/png" />
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <BackgroundImageLoader background={props.background} />
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
