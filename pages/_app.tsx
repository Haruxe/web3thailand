import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";

function MyApp({ Component }: AppProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState();
  const [address, setAddress] = useState("");

  async function connectHandler() {
    // @ts-ignore
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask detected");
      try {
        // @ts-ignore
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // @ts-ignore
        let connectedProvider = new ethers.providers.Web3Provider(
          // @ts-ignore
          window.ethereum
        );
        // @ts-ignore
        setSigner(connectedProvider.getSigner());
        // @ts-ignore
        setAddress(accounts[0]);

        setIsConnected(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("MetaMask not found");
    }
  }

  useEffect(() => {
    connectHandler();
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content="Web3SG" />
        <meta
          property="og:description"
          content="Bridging web2 to web3 one step at a time."
        />
        <meta property="og:image" content="/web3sg.png" />
        <title>Web3SG</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://cdn.ethers.io/scripts/ethers-v3.min.js"
        charSet="utf-8"
        type="text/javascript"
      ></Script>
      <Navbar
        connected={isConnected}
        address={address}
        connectHandler={connectHandler}
      />
      <Component signer={signer} />
      <Footer />
    </>
  );
}

export default MyApp;
