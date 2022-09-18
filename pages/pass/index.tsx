import { ethers, Signer } from "ethers";
import Image from "next/image";
import React from "react";

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

  return (
    <>
      <div className="bg-[#1b1b1b]">
        <div className="py-10 place-content-center mx-auto text-white">
          <h1 className=" text-3xl mx-auto text-center font-gilroy-bold">
            Web3SG Genesis Pass
          </h1>
          <div className="h-[2px] bg-white w-[10rem] mx-auto my-6" />
          {/* <div className="mx-auto flex place-content-center">
            <div className="flex md:flex-row flex-col place-content-between md:space-x-5 md:space-y-0 space-y-10 font-gilroy-bold md:text-lg text-md">
              <div className="bg-black md:p-6 p-4 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                <h1>5+ Events</h1>
              </div>
              <div className="bg-black md:p-6 p-4 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                <h1>328 Projects Partnered</h1>
              </div>
              <div className="bg-black md:p-6 p-4 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                <h1>16+ Team Members</h1>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mx-auto">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1400px] p-6 text-black flex flex-col md:flex-row mx-auto md:space-x-5 place-content-between">
            <div className="flex flex-col w-full md:w-1/2 my-8">
              <h1 className="text-3xl font-bold">Web3SG Genesis Pass</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
                volutpat lacus laoreet non curabitur gravida arcu ac tortor. Sed
                libero enim sed faucibus turpis. At tellus at urna condimentum
                mattis pellentesque id nibh. Pharetra massa massa ultricies mi
                quis hendrerit dolor.
              </p>
              <button onClick={mintHandler} className="">
                <h1>Mint</h1>
              </button>
            </div>
            <div className="relative place-content-center flex md:w-[500px] w-[250px] h-[185px] md:h-[370px] mx-auto my-auto md:my-auto mb-5">
              <Image
                src={"/images/hero3.jpg"}
                alt={"placeholder"}
                layout="fill"
                className="flex mx-auto rounded-sm"
              />
              <h1 className="absolute bottom-5 right-5 font-bold text-md md:text-2xl bg-opacity-40 backdrop-blur-2xl text-black bg-white shadow-3xl px-2 py-1 rounded-md font-righteous">
                Web3SG Event
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
