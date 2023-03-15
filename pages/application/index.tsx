import { ethers } from "ethers";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { DiscordAlt } from "styled-icons/boxicons-logos";
import { Twitter } from "styled-icons/remix-fill";
import ClipLoader from "react-spinners/ClipLoader";
import { useFormik } from "formik";
import { Asterisk } from "styled-icons/fa-solid";

// @ts-ignore
function Index({ address }) {
  const [contribution, setContribution] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [viewOnFuture, setViewOnFuture] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="md:mb-[14rem] mb-[5rem] place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="flex w-full">
          <div className="max-w-[1400px] p-6 text-black place-content-center w-full">
            <h1 className="text-black text-5xl font-bold my-5 mx-auto">
              Application
            </h1>
            <p className="my-8 md:w-2/3">
              We welcome you to apply to be a member of the Web3 Thailand. A
              networking pass to empower communities. We&apos;re creating
              community-centric products that connect collectors, and activate
              creative entrepreneurship. Built by web3sg with Thai partners. A
              small supply (yet to be confirmed) will be released. This token
              will provide the following benefits for the holder, an extensive
              list of utility. <br />
              <br /> 1) Business Opportunities <br />
              <br />
              2) Ability to use Web3SG Resources to launch projects in Web3
              Space
              <br />
              <br /> 3) Connect with the Crypto expatriate community in Thailand
              <br />
              <br /> 4) Physical merchandise
              <br /> <br />
              5) University Education in our metaverse
              <br /> <br />
              6) Hackathons where members can choose to vote on the best
              business idea that will have the best chance of success
            </p>
            <div className="flex flex-col w-full mx-auto">
              <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeaBZ5z4jA3N6RVG5eVW_DCxjdP5Askgkd7biwkL4j9S-RKFg/formResponse"
                className="space-y-5"
                method="post"
              >
                <div className="grid space-y-3">
                  <label className="font-bold">
                    What can you contribute to Web3 Thailand?{" "}
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="entry.1120962767"
                    required
                    placeholder="Your answer"
                    className="outline outline-2 rounded-sm outline-gray-400 p-2"
                  />
                </div>
                <div className="grid space-y-3">
                  <label className="font-bold">
                    What is your current job?{" "}
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="entry.2038932177"
                    placeholder="Your answer"
                    className="outline outline-2 rounded-sm outline-gray-400 p-2"
                  />
                </div>
                <div className="grid space-y-3">
                  <label className="font-bold">
                    What is your view on the future of Web3 in your country?{" "}
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="entry.971292726"
                    placeholder="Your answer"
                    className="outline outline-2 rounded-sm outline-gray-400 p-2"
                  />
                </div>
                <div className="grid space-y-3">
                  <label className="font-bold">
                    What is your email?{" "}
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="entry.326537399"
                    placeholder="Your answer"
                    className="outline outline-2 rounded-sm outline-gray-400 p-2"
                  />
                </div>
                <div className="grid space-y-3">
                  <label className="font-bold">
                    What is your phone number?{" "}
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="phone"
                    required
                    name="entry.1005185300"
                    placeholder="Your answer"
                    className="outline outline-2 rounded-sm outline-gray-400 p-2"
                  />
                </div>
                <div className="grid space-y-2">
                  <button
                    type="submit"
                    className="outline outline-2 rounded-sm outline-gray-400 text-xl font-bold bg-red-50 p-2 ml-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* <div className="flex flex-col w-full md:w-1/2 my-8">
              <h1 className="text-3xl font-bold">Our Team</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <p>
                Web3SG believes 99% of nfts go to zero. <br />
                <br />
                NFTs have yet to reach the inevitability of adoption similar to
                crypto and blockchain technology. <br />
                <br />
                We believe NFTs become inevitable when it moves past the current
                meta of hype and speculation to real life utility.
                <br />
                <br />
                Markets need to mature to deliver truly bespoke, individually
                personalized projects with a visionary result, everytime. <br />
                <br />
                Our focus is on your well being, high quality results, and
                attention to details. Interiors should be more than just a
                space, it is a reflection of the occupants and we strive to make
                every space catered to improve your quality of living. We design
                projects personalized and exceed expectations by working closely
                with our clients, understanding them and providing them a
                dedicated team of highly skilled consultants. <br />
                <br />A good design isn&#39;t just a visual element, it is a
                flow of space and an atmosphere. When incorporated well, design
                affects us physically, mentally, and spiritually. We combine
                both art and technology to create the best possible enviornment
                for every event.
              </p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
