import React, { useState } from "react";
import { Email } from "styled-icons/evaicons-solid";
import { Check, Twitter } from "styled-icons/remix-fill";
import { motion } from "framer-motion";
import Link from "next/link";
import { DiscordAlt, FacebookCircle } from "styled-icons/boxicons-logos";
import Image from "next/image";
import { LineStyle, SignOut } from "styled-icons/fluentui-system-filled";
import { Burger } from "styled-icons/fa-solid";
import { List } from "styled-icons/bootstrap";
//import { slide as Menu } from "react-burger-menu";
// @ts-ignore
function Navbar({ connected, address, connectHandler, disconnectHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="mx-auto p-2 fixed right-0 left-0 bg-[#ffffff] backdrop-blur-xl bg-opacity-70 z-20">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex">
            <div className="absolute top-2 left-2 space-x-3 my-auto invisible sm:visible">
              <a
                href="https://twitter.com/web3sg"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="w-5" />
              </a>
              <a
                href="mailto:info@web3ventures.com.sg"
                target="_blank"
                rel="noreferrer"
              >
                <Email className="w-5" />
              </a>
              <a
                href="https://discord.gg/web3sg"
                target="_blank"
                rel="noreferrer"
              >
                <DiscordAlt className="w-5" />
              </a>
              <a
                href="https://www.facebook.com/Web3Thailand"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookCircle className="w-5" />
              </a>
            </div>
            <div className="absolute top-2 left-2 space-x-3 my-auto flex sm:hidden">
              <button
                className="h-8 w-8 my-auto rounded flex flex-col justify-center items-center group"
                onClick={() => setIsOpen(!isOpen)}
              >
                <List />
              </button>
            </div>

            {/* <div className="absolute top-2 right-2 space-x-3 my-auto md:text-sm text-sm invisible sm:visible">
              {!connected ? (
                <button
                  className="select-none font-bold cursor-pointer font-gilroy-bold tracking-widest text-white px-2 rounded-sm py-1 bg-blue-500"
                  onClick={connectHandler}
                >
                  CONNECT
                </button>
              ) : (
                <div className="font-bold font-gilroy-bold tracking-widest text-white md:px-2 px-1 rounded-sm md:py-1 bg-blue-500 place-content-center flex flex-row">
                  <h1 className="my-auto">
                    {address
                      ? // @ts-ignore
                        address.substring(0, 4) +
                        "..." +
                        // @ts-ignore
                        address.substring(address.length, address.length - 4)
                      : ""}
                  </h1>
                  <button
                    className="cursor-pointer place-content-center m-auto md:ml-2 md:w-5 w-3 "
                    onClick={disconnectHandler}
                  >
                    <SignOut className="my-auto" />
                  </button>
                </div>
              )}
            </div> */}

            <div className="mx-auto cursor-pointer w-[12rem] md:w-[16rem] my-auto pt-1">
              <Link href="/">
                {/* <h1 className="md:text-4xl text-2xl select-none font-bold cursor-pointer font-gilroy tracking-widest text-white px-2 rounded-md py-1 bg-black hover:bg-[#303030]">
                  WEB3SG
                </h1> */}
                <Image
                  src="/images/Logo.png"
                  alt="logo"
                  width={"3096"}
                  height={"516"}
                  className="flex"
                />
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-3 mb-1 md:w-[800px] place-content-between font-bold text-sm sm:text-lg hidden sm:flex ">
            <Link className="cursor-pointer" href="/">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Home</h1>
              </motion.div>
            </Link>
            <Link className="cursor-pointer" href="/genesis">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Genesis Pass</h1>{" "}
              </motion.div>
            </Link>
            <Link className="cursor-pointer" href="/application">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Application</h1>{" "}
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
            <Link className="cursor-pointer" href="/events">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Events</h1>
              </motion.div>
            </Link>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="font-bold space-y-3 p-2 mt-3 grid sm:hidden"
            animate={{ x: 1 }}
            initial={{ x: -40 }}
            transition={{ duration: 0.4 }}
          >
            <Link className="cursor-pointer" href="/">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Home</h1>
              </motion.div>
            </Link>
            <Link className="cursor-pointer" href="/genesis">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Genesis Pass</h1>{" "}
              </motion.div>
            </Link>
            <Link className="cursor-pointer" href="/application">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Application</h1>{" "}
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
            <Link className="cursor-pointer" href="/events">
              <motion.div className="cursor-pointer rounded-lg px-3 py-1 hover:bg-[#7b7b7b15]">
                <h1>Events</h1>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </nav>

      <div className="pb-[8rem]" />
    </>
  );
}

export default Navbar;
