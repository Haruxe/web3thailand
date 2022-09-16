import React, { useEffect, useState } from "react";
import { Email } from "styled-icons/evaicons-solid";
import { Check, Twitter } from "styled-icons/remix-fill";
import { motion } from "framer-motion";
import Link from "next/link";
import { ethers } from "ethers";

function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState();
  const [address, setAddress] = useState();

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
      <nav className="mx-auto p-2 fixed right-0 left-0 bg-[#ffffff] backdrop-blur-xl bg-opacity-70 z-20">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex">
            <div className="absolute top-2 left-2 space-x-3 my-auto">
              <a href="https://twitter.com/web3sg">
                <Twitter className="w-5" />
              </a>
              <a href="mailto:info@web3ventures.com.sg">
                <Email className="w-5" />
              </a>
            </div>
            <div className="absolute top-2 right-2 space-x-3 my-auto md:text-sm text-xs ">
              {!isConnected ? (
                <button className="select-none font-bold cursor-pointer font-gilroy-bold tracking-widest text-white px-2 rounded-sm py-1 bg-blue-500">
                  CONNECT
                </button>
              ) : (
                <div className="font-bold font-gilroy-bold tracking-widest text-white px-2 rounded-sm py-1 bg-blue-500 place-content-center flex flex-row">
                  <h1 className="my-auto">
                    {address
                      ? // @ts-ignore
                        address.substring(0, 4) +
                        "..." +
                        // @ts-ignore
                        address.substring(address.length, address.length - 4)
                      : ""}
                  </h1>
                  <Check className="w-5 my-auto ml-2" />
                </div>
              )}
            </div>
            <div className="mx-auto">
              <Link href="/">
                <h1 className="md:text-4xl text-2xl select-none font-bold cursor-pointer font-gilroy tracking-widest text-white px-2 rounded-md py-1 bg-black hover:bg-[#303030]">
                  WEB3SG
                </h1>
              </Link>
            </div>
          </div>
          <div className="mx-auto flex mt-3 mb-1 sm:w-[400px] w-2/3 place-content-between font-bold text-sm sm:text-lg">
            <motion.div className="cursor-pointer rounded-sm px-3 py-1 hover:bg-slate-100">
              <Link className="cursor-pointer" href="/">
                <h1>Home</h1>
              </Link>
            </motion.div>
            <motion.div className="cursor-pointer rounded-sm px-3 py-1 hover:bg-slate-100">
              <Link className="cursor-pointer" href="/nft">
                <h1>NFT</h1>
              </Link>
            </motion.div>
            <motion.div className="cursor-pointer rounded-sm px-3 py-1 hover:bg-slate-100">
              <Link className="cursor-pointer" href="/about">
                <h1>About</h1>
              </Link>
            </motion.div>
            <motion.div className="cursor-pointer rounded-sm px-3 py-1 hover:bg-slate-100">
              <Link className="cursor-pointer" href="/join">
                <h1>Join Us</h1>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
      <div className="pb-[8rem]" />
    </>
  );
}

export default Navbar;
