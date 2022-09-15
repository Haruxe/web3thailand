import type { NextPage } from "next";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "styled-icons/bootstrap";
import { data } from "../components/slideData";

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto pt-[5rem]">
        <div className="h-[800px] mx-auto flex flex-col">
          <div className=" max-w-[1300px] mx-auto px-5">
            <Fade
              duration={3000}
              nextArrow={
                <ArrowRightCircleFill className="w-10 fill-white mr-5" />
              }
              prevArrow={
                <ArrowLeftCircleFill className="w-10 fill-white ml-5" />
              }
            >
              {data.map((i) => (
                <div className="flex place-content-center ">
                  <Image
                    src={i.image}
                    alt={i.image}
                    layout="intrinsic"
                    width={"1024px"}
                    height={"684px"}
                    className="flex mx-auto"
                  />
                  <h1 className="absolute bottom-5 right-5 font-bold text-2xl text-black bg-white bg-opacity-60 backdrop-blur-lg shadow-xl px-2 py-1 rounded-md font-righteous">
                    {i.text}
                  </h1>
                </div>
              ))}
            </Fade>
          </div>
        </div>
        <div className="bg-[#a39081] h-screen"></div>
      </div>
    </>
  );
};

export default Home;
