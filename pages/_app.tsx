import React from "react";
import type { AppProps } from "next/app";
import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
