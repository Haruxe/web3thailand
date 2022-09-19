import { ethers, Signer } from "ethers";
import Image from "next/image";
import React from "react";
import { Plus } from "styled-icons/evaicons-solid";

// @ts-ignore
function index({ signer }) {
  //Function that handles minting
  async function mintHandler() {
    // @ts-ignore
    if (window.ethereum !== "undefined" && signer) {
      const contractAddress = "0x000000000000000000000000000";
      const abi = [{}];
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.FUNCTION();
      } catch (e) {
        console.log(e);
      }
    }
  }
  // @ts-ignore
  function FeaturedCollabPanel({ url, image }) {
    return (
      <div className="w-[7rem] h-[7rem] relative outline outline-1 outline-black">
        <a href={url} target="_blank">
          <Image
            src={"/images/" + image}
            width={"112"}
            height={"112"}
            alt="kaijukingz"
          />
        </a>
      </div>
    );
  }

  return (
    <div className=" place-content-center flex flex-col md:my-[12rem]">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1400px] p-6 text-black flex flex-col md:flex-row mx-auto md:space-x-5 place-content-between">
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
            <div className="flex flex-col w-full md:w-1/2">
              <h1 className="text-3xl font-bold">Web3 Partners</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <div className="grid gap-5 grid-flow-col grid-rows-3">
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/kaiju-kingz"
                  image="KaijuKingz.png"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/bbrcofficial-ivyboys"
                  image="bbrc.webp"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/io-imaginary-ones"
                  image="imaginary.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/godjira-genesis"
                  image="godjira.gif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/isekaii-meta"
                  image="isekaii.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/primates-solana"
                  image="primates.webp"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/mindblowon-universe"
                  image="mindblowon.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/zooversegenesis"
                  image="zoo.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/theparallaxgenesis"
                  image="paralax.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/kazoku"
                  image="kazoku.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/kumaverse"
                  image="kuma.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/ukiyonft"
                  image="ukiyo.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/generativedungeon"
                  image="dungeon.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/zombieclub-token"
                  image="zombie.avif"
                />
                <div className="w-[7rem] h-[7rem] relative place-content-center flex">
                  <h1 className="m-auto flex text-3xl font-gilroy-black font-black select-none">
                    +300
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
