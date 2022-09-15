import React from "react";
import { Email } from "styled-icons/evaicons-solid";
import { Twitter } from "styled-icons/remix-fill";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="mx-auto p-2 fixed right-0 left-0 bg-[#ffffff] backdrop-blur-xl bg-opacity-70 z-10">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex">
          <div className="absolute top-0 left-2 space-x-3 my-auto">
            <a href="https://twitter.com/web3sg">
              <Twitter className="w-6" />
            </a>
            <a href="/">
              <Email className="w-5" />
            </a>
          </div>
          <div className="absolute top-0 right-2 space-x-3 my-auto">
            <a href="https://twitter.com">
              <Image
                width={"24px"}
                height={"24px"}
                alt="metamask"
                src="/images/meta.png"
                className="invert"
              />
            </a>
          </div>
          <motion.a className="mx-auto" href="/">
            <h1 className="text-4xl select-none cursor-pointer font-modak tracking-widest text-white px-3 rounded-lg pt-1 bg-black">
              Web3SG
            </h1>
          </motion.a>
        </div>
        <div className="mx-auto flex my-3 w-[400px] place-content-between font-bold">
          <div className="cursor-pointer">
            <Link className="cursor-pointer" href="/">
              <h1>Home</h1>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link className="cursor-pointer" href="/nft">
              <h1>NFT</h1>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link className="cursor-pointer" href="/about">
              <h1>About</h1>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link className="cursor-pointer" href="/join">
              <h1>Join Us</h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
