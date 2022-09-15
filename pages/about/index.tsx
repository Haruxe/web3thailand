import Image from "next/image";
import React from "react";

function index() {
  return (
    <>
      <div className="mx-auto pt-[6rem]">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1400px] px-7 text-black flex flex-row mx-auto space-x-5 place-content-center">
            <div className="flex flex-col w-1/2">
              <h1 className="text-3xl font-bold mt-8">Our Team</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <p>
                Web3SG believes 99% of nfts go to Zero. <br />
                <br />
                NFTs have yet to reach the inevitability of adoption similar to
                Crypto and blockchain technology. <br />
                <br />
                We believe NFTs become inevitable when it moves past the current
                meta of Hype and Speculation to Real Life Utility.
                <br />
                <br />
                Markets need to mature. In delivering only truly bespoke,
                individually personalized projects with a visionary result,
                everytime. <br />
                <br />
                Our Ethos is your well being, high quality results and attention
                to details. Interiors should be more than just a space, it is a
                reflection of the occupants and we strive to make every space a
                space that is catered to improve your quality of living. We
                design projects personalized and exceeding expectations by
                working closely with our clients, understanding them and
                providing them a dedicated team of highly skilled consultants.{" "}
                <br />
                <br />A good design isn&#39;t just a visual element, it is a
                flow of space when in use, the thoughts given to the refinement
                and an attention to details. When incorporated well, design
                affects us physically mentally and spiritually. We combine both
                art and technology in bringing out the best possible beautiful,
                functional and whole space. Drop us a message and our team will
                contact you soonest. <br />
                <br />
              </p>
            </div>
            <div className="relative place-content-center flex w-[500px] h-[370px] mx-auto my-auto">
              <Image
                src={"/images/hero3.jpg"}
                alt={"placeholder"}
                layout="intrinsic"
                width={"500px"}
                height={"370px"}
                className="flex mx-auto rounded-sm"
              />
              <h1 className="absolute bottom-5 right-5 font-bold text-2xl bg-opacity-40 backdrop-blur-2xl text-black bg-white shadow-3xl px-2 py-1 rounded-md font-righteous">
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
