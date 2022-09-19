import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer
      className="flex bg-[#1b1b1b] flex-col text-white font-gilroy-bold md:text-lg text-md px-6 py-[4rem] outline outline-2 outline-[#414141]"
      style={{
        backgroundColor: "#252525",
        opacity: "1",
        backgroundImage:
          "linear-gradient(30deg, #1b1b1b 12%, transparent 12.5%, transparent 87%, #1b1b1b 87.5%, #1b1b1b), linear-gradient(150deg, #1b1b1b 12%, transparent 12.5%, transparent 87%, #1b1b1b 87.5%, #1b1b1b), linear-gradient(30deg, #1b1b1b 12%, transparent 12.5%, transparent 87%, #1b1b1b 87.5%, #1b1b1b), linear-gradient(150deg, #1b1b1b 12%, transparent 12.5%, transparent 87%, #1b1b1b 87.5%, #1b1b1b), linear-gradient(60deg, #1b1b1b77 25%, transparent 25.5%, transparent 75%, #1b1b1b77 75%, #1b1b1b77), linear-gradient(60deg, #1b1b1b77 25%, transparent 25.5%, transparent 75%, #1b1b1b77 75%, #1b1b1b77)",
        backgroundSize: "16px 28px",
        backgroundPosition: "0 0, 0 0, 8px 14px, 8px 14px, 0 0, 8px 14px",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row w-full place-items-center">
        <div className="flex">
          <div className="grid gap-5">
            <Link href="/">
              {/* <h1 className="md:text-4xl text-2xl select-none font-bold cursor-pointer font-gilroy tracking-widest text-white px-2 rounded-md py-1 bg-black hover:bg-[#303030]">
                  WEB3SG
                </h1> */}
              <Image
                src="/images/LogoWhite.png"
                alt="logo"
                width={"190"}
                height={"50"}
                layout="fixed"
              />
            </Link>
            <h1 className="text-sm font-gilroy text-left">
              Copyright Web3 Ventures Pte Ltd.
            </h1>
          </div>
        </div>
        <div className="flex place-content-between mt-5 md:w-2/3 w-full mx-auto">
          <div className="flex flex-col mx-auto ">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>MENU</h1>

            <div className="flex flex-col font-gilroy md:text-md text-sm underline space-y-2 mt-3">
              <Link href="/">Home</Link>
              <Link href="/pass">Pass</Link>
              <Link href="/about">About</Link>
              {/* <Link href="/join">Join Us</Link> */}
            </div>
          </div>
          <div className="flex mx-auto flex-col">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>SOCIALS</h1>
            <div className="flex flex-col font-gilroy md:text-md text-sm underline space-y-2 mt-3">
              <a href="https://twitter.com/web3sg">Twitter</a>
              <a href="https://discord.gg/web3sg">Discord</a>
            </div>
          </div>
          <div className="flex mx-auto flex-col">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>SUPPORT</h1>
            <div className="flex flex-col font-gilroy-bold md:text-md text-sm space-y-2 mt-3">
              <h1>Mail</h1>
              <a
                href="mailto:info@web3ventures.com.sg"
                className="underline font-gilroy"
              >
                info@web3ventures.com.sg
              </a>
            </div>
          </div>
          {/* <div className="flex mx-auto flex-col">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>CONTACT</h1>
          </div>
          <div className="flex mx-auto flex-col">
            <div className="h-[2px] bg-white w-5 mb-2" />
            <h1>MINT</h1>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
