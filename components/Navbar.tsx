import React from "react";
import { Email } from "styled-icons/evaicons-solid";
import { Check, Twitter } from "styled-icons/remix-fill";
import { motion } from "framer-motion";
import Link from "next/link";
import { DiscordAlt } from "styled-icons/boxicons-logos";
// @ts-ignore
function Navbar({ connected, address, connectHandler }) {
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
              <a href="https://discord.gg/web3sg">
                <DiscordAlt className="w-5" />
              </a>
            </div>
            <div className="absolute top-2 right-2 space-x-3 my-auto md:text-sm text-xs ">
              {!connected ? (
                <button
                  className="select-none font-bold cursor-pointer font-gilroy-bold tracking-widest text-white px-2 rounded-sm py-1 bg-blue-500"
                  onClick={connectHandler}
                >
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
          <div className="mx-auto flex mt-3 mb-1 sm:w-[500px] w-3/4 place-content-between font-bold text-sm sm:text-lg">
            <Link className="cursor-pointer" href="/">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Home</h1>
              </motion.div>
            </Link>
            <Link className="cursor-pointer" href="/pass">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>SG Pass</h1>{" "}
              </motion.div>
            </Link>
            <Link className="cursor-pointer" href="/about">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>About</h1>
              </motion.div>
            </Link>
            <Link className="cursor-pointer" href="/partners">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Partners</h1>
              </motion.div>
            </Link>
            {/* <Link className="cursor-pointer" href="/join">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Join Us</h1>
              </motion.div>
            </Link> */}
          </div>
        </div>
      </nav>
      <div className="pb-[8rem]" />
    </>
  );
}

export default Navbar;
