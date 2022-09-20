import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

function MyApp({ Component }: AppProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  async function connectHandler() {
    // @ts-ignore
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask detected");
      try {
        const provider = await detectEthereumProvider();
        // @ts-ignore
        const accounts = await provider.request({
          method: "eth_requestAccounts",
        });
        // @ts-ignore
        const chainId = await provider.request({
          method: "eth_chainId",
        });
        if (chainId !== "0x1") {
          console.log("Connect To Mainnet!");
          // @ts-ignore
          const success = await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x1" }],
          });
          if (success == null) {
            connectHandler();
          }
        } else {
          console.log(chainId);
          // @ts-ignore
          setAddress(accounts[0]);

          setIsConnected(true);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("MetaMask not found");
    }
  }

  async function disconnectHandler() {
    setAddress("");
    setIsConnected(false);
  }

  useEffect(() => {
    // @ts-ignore
    connectHandler();
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content="Web3SG" key="ogtitle" />
        <meta
          property="og:description"
          content="Bridging web2 to web3 one step at a time."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/rXxdwMg.png"
          key="ogimage"
        />
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
        disconnectHandler={disconnectHandler}
      />
      <Component />
      <Footer />
    </>
  );
}

export default MyApp;
