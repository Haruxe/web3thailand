import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Web3SG" />
        <meta
          property="og:description"
          content="Bridging web2 to web3 one step at a time."
        />
        <meta property="og:image" content="/meta.png" />
        <title>Web3SG</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Script
          src="https://cdn.ethers.io/scripts/ethers-v3.min.js"
          charSet="utf-8"
          type="text/javascript"
        ></Script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
