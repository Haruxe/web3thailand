import type { NextPage } from "next";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import { LeftArrowAlt, RightArrowAlt } from "styled-icons/boxicons-regular";
import { data } from "../components/slideData";

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto pt-[8rem]">
        <div className="mx-auto">
          <div className="max-w-[1024px] mx-auto px-5">
            <Fade
              duration={3000}
              prevArrow={
                <LeftArrowAlt className="w-9 bg-white shadow-3xl rounded-full p-1 ml-2 bg-opacity-40 backdrop-blur-2xl" />
              }
              nextArrow={
                <RightArrowAlt className="w-9 bg-white shadow-3xl rounded-full p-1 mr-2 bg-opacity-40 backdrop-blur-2xl" />
              }
            >
              {data.map((i) => (
                <div className="flex flex-col place-content-center">
                  <Image
                    src={i.image}
                    alt={i.image}
                    layout="intrinsic"
                    width={"1024px"}
                    height={"684px"}
                    className="flex mx-auto"
                  />
                  <h1 className="flex absolute bottom-5 right-5 font-bold text-xl lg:text-2xl bg-opacity-40 backdrop-blur-2xl text-black bg-white shadow-3xl px-2 py-1 rounded-md font-righteous">
                    {i.text}
                  </h1>
                </div>
              ))}
            </Fade>
          </div>
        </div>
        <div className="bg-[#1b1b1b] md:mt-[5rem] mt-5 text-white ">
          <div className="max-w-[1400px] mx-auto px-5 flex">
            <div className="mt-10 place-content-center mx-auto space-y-10">
              <h1 className="text-3xl mx-auto text-center">Past Events</h1>
              <div className="flex md:flex-row place-content-between md:space-x-5 md:space-y-0 space-y-10 flex-col ">
                <div className="bg-black p-6 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                  <Image
                    src={"/images/hero3.jpg"}
                    alt={"placeholder"}
                    layout="intrinsic"
                    width={"300px"}
                    height={"200px"}
                    className="flex mx-auto rounded-sm"
                  />
                  <h1 className="mx-auto">COMEX</h1>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Tempus imperdiet nulla malesuada pellentesque elit
                    eget. Quisque id diam vel quam elementum pulvinar etiam non
                    quam.
                  </p>
                </div>
                <div className="bg-black p-6 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                  <Image
                    src={"/images/hero3.jpg"}
                    alt={"placeholder"}
                    layout="intrinsic"
                    width={"300px"}
                    height={"200px"}
                    className="flex mx-auto rounded-sm"
                  />
                  <h1 className="mx-auto">COMEX</h1>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Tempus imperdiet nulla malesuada pellentesque elit
                    eget. Quisque id diam vel quam elementum pulvinar etiam non
                    quam.
                  </p>
                </div>
                <div className="bg-black p-6 mx-auto place-content-center place-items-center flex flex-col space-y-10">
                  <Image
                    src={"/images/hero3.jpg"}
                    alt={"placeholder"}
                    layout="intrinsic"
                    width={"300px"}
                    height={"200px"}
                    className="flex mx-auto rounded-sm"
                  />
                  <h1 className="mx-auto">COMEX</h1>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Tempus imperdiet nulla malesuada pellentesque elit
                    eget. Quisque id diam vel quam elementum pulvinar etiam non
                    quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;