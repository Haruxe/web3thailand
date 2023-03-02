import { ethers } from "ethers";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { DiscordAlt } from "styled-icons/boxicons-logos";
import { Twitter } from "styled-icons/remix-fill";
import ClipLoader from "react-spinners/ClipLoader";

// @ts-ignore
function Index({ address }) {
  const [loading, setLoading] = useState(false);
  const [mintedAmount, setMintedAmount] = useState(0);
  const [hasMinted, setHasMinted] = useState(false);
  // Function that handles minting
  // async function mintHandler() {
  //   setLoading(true);
  //   const contractAddress = "0x4fF9fb1AC8F92DcbFA5Ef6BA195f8fDF9D9d9473";

  //   const signatureMapping = new Map([
  //     [
  //       "0x1878464b77f49ef91bccb02514b3fe47db318ccd",
  //       "0xf1b023cd3dad2911649d6e53b76f49771515969cf2311ab8f772ed91bd0c59c34112cbc44e0c731524c55cb3d569c7a53897e93fa4e4ebae41586880749d686d1c",
  //     ],
  //     [
  //       "0xee644815e2693c7b2e5230ad924d127546c43207",
  //       "0xf5e25b02416af1c436b4336fffcdb60f2026ee00eacc1224a753d9a78ef9f17277667731acf9847440c21a58792f20fc49123b3ffe8002eb0cd380686642c9a31c",
  //     ],
  //     [
  //       "0x46a11ec1c19d59c4aafec3bfe52e329f5fa6ac7e",
  //       "0xda5307ca3c85114b79164ed37515d12142983cb3b97b9cd06050c4442ba0e30123ad19cd4fc34af90377e6c2324a3c214a4aadd9e57baa8b85e756aae46882901b",
  //     ],
  //     [
  //       "0x4de2494a282b295b08e84ddd0926749fe9964d1a",
  //       "0xf3a40e0a43be6d4ca0e115821d3e6baa74e1a1e91b66ac2f560cc58cc50e834668735a4be9d892c0867ee5dce0171e1a8182068ae6a2e35f10baab72ebd1a1a71c",
  //     ],
  //   ]);

  //   // @ts-ignore
  //   const signature = signatureMapping.get(address);
  //   const iface = new ethers.utils.Interface([
  //     "function mint(bytes signature)",
  //   ]);
  //   const data = iface.encodeFunctionData("mint", [signature]);

  //   console.log(data);
  //   // @ts-ignore
  //   try {
  //     // @ts-ignore
  //     await window.ethereum.request({
  //       method: "eth_sendTransaction",
  //       params: [
  //         {
  //           to: contractAddress,
  //           from: address,
  //           // 7ba0e2e7 = mint(), the rest is the signature
  //           // @ts-ignore
  //           data: "7ba0e2e7" + data ? data : "",
  //         },
  //       ],
  //     });
  //   } catch (e) {
  //     console.log("Error during mint.");
  //   }
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     getBalance();
  //   }, 0.5);
  // }, []);

  // async function getBalance() {
  //   const contractAddress = "0x4fF9fb1AC8F92DcbFA5Ef6BA195f8fDF9D9d9473";
  //   // @ts-ignore
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const abi = [
  //     {
  //       inputs: [
  //         { internalType: "uint256", name: "_mintTimes", type: "uint256" },
  //         { internalType: "address", name: "_signer", type: "address" },
  //       ],
  //       stateMutability: "payable",
  //       type: "constructor",
  //     },
  //     { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
  //     { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
  //     { inputs: [], name: "ApprovalToCurrentOwner", type: "error" },
  //     { inputs: [], name: "ApproveToCaller", type: "error" },
  //     { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
  //     { inputs: [], name: "InvalidSignature", type: "error" },
  //     { inputs: [], name: "MintToZeroAddress", type: "error" },
  //     { inputs: [], name: "MintZeroQuantity", type: "error" },
  //     { inputs: [], name: "MustBeUser", type: "error" },
  //     { inputs: [], name: "OnePassPerUser", type: "error" },
  //     { inputs: [], name: "OutOfSupply", type: "error" },
  //     { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
  //     { inputs: [], name: "SaleNotLive", type: "error" },
  //     { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
  //     { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
  //     {
  //       inputs: [],
  //       name: "TransferToNonERC721ReceiverImplementer",
  //       type: "error",
  //     },
  //     { inputs: [], name: "TransferToZeroAddress", type: "error" },
  //     { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "owner",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "approved",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           internalType: "uint256",
  //           name: "tokenId",
  //           type: "uint256",
  //         },
  //       ],
  //       name: "Approval",
  //       type: "event",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "owner",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "operator",
  //           type: "address",
  //         },
  //         {
  //           indexed: false,
  //           internalType: "bool",
  //           name: "approved",
  //           type: "bool",
  //         },
  //       ],
  //       name: "ApprovalForAll",
  //       type: "event",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "previousOwner",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "newOwner",
  //           type: "address",
  //         },
  //       ],
  //       name: "OwnershipTransferred",
  //       type: "event",
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "from",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           internalType: "address",
  //           name: "to",
  //           type: "address",
  //         },
  //         {
  //           indexed: true,
  //           internalType: "uint256",
  //           name: "tokenId",
  //           type: "uint256",
  //         },
  //       ],
  //       name: "Transfer",
  //       type: "event",
  //     },
  //     {
  //       inputs: [],
  //       name: "COLLECTION_SIZE",
  //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "address", name: "to", type: "address" },
  //         { internalType: "uint256", name: "tokenId", type: "uint256" },
  //       ],
  //       name: "approve",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [{ internalType: "address", name: "owner", type: "address" }],
  //       name: "balanceOf",
  //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "uint256", name: "_quantity", type: "uint256" },
  //       ],
  //       name: "devMint",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
  //       name: "getApproved",
  //       outputs: [{ internalType: "address", name: "", type: "address" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "address", name: "owner", type: "address" },
  //         { internalType: "address", name: "operator", type: "address" },
  //       ],
  //       name: "isApprovedForAll",
  //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [{ internalType: "bytes", name: "_signature", type: "bytes" }],
  //       name: "mint",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "mintTimes",
  //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "name",
  //       outputs: [{ internalType: "string", name: "", type: "string" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "owner",
  //       outputs: [{ internalType: "address", name: "", type: "address" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
  //       name: "ownerOf",
  //       outputs: [{ internalType: "address", name: "", type: "address" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "renounceOwnership",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "address", name: "from", type: "address" },
  //         { internalType: "address", name: "to", type: "address" },
  //         { internalType: "uint256", name: "tokenId", type: "uint256" },
  //       ],
  //       name: "safeTransferFrom",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "address", name: "from", type: "address" },
  //         { internalType: "address", name: "to", type: "address" },
  //         { internalType: "uint256", name: "tokenId", type: "uint256" },
  //         { internalType: "bytes", name: "_data", type: "bytes" },
  //       ],
  //       name: "safeTransferFrom",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "address", name: "operator", type: "address" },
  //         { internalType: "bool", name: "approved", type: "bool" },
  //       ],
  //       name: "setApprovalForAll",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "string", name: "_newBaseURI", type: "string" },
  //       ],
  //       name: "setBaseURI",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "uint256", name: "_mintTime", type: "uint256" },
  //       ],
  //       name: "setMintTiming",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [{ internalType: "address", name: "_signer", type: "address" }],
  //       name: "setSigner",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "signer",
  //       outputs: [{ internalType: "address", name: "", type: "address" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
  //       ],
  //       name: "supportsInterface",
  //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "symbol",
  //       outputs: [{ internalType: "string", name: "", type: "string" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "uint256", name: "_tokenId", type: "uint256" },
  //       ],
  //       name: "tokenURI",
  //       outputs: [{ internalType: "string", name: "", type: "string" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [],
  //       name: "totalSupply",
  //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "address", name: "from", type: "address" },
  //         { internalType: "address", name: "to", type: "address" },
  //         { internalType: "uint256", name: "tokenId", type: "uint256" },
  //       ],
  //       name: "transferFrom",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     {
  //       inputs: [
  //         { internalType: "address", name: "newOwner", type: "address" },
  //       ],
  //       name: "transferOwnership",
  //       outputs: [],
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //   ];
  //   const signer = provider.getSigner();
  //   const nftContract = new ethers.Contract(contractAddress, abi, signer);
  //   const totalMinted = await nftContract.totalSupply();

  //   const checkSum = address ? ethers.utils.getAddress(address.toString()) : "";
  //   if (checkSum) {
  //     const userHasMinted = await nftContract.balanceOf(checkSum);
  //     setHasMinted(userHasMinted._hex == 0x01 ? true : false);
  //   }

  //   //console.log(userHasMinted);
  //   setMintedAmount(ethers.BigNumber.from(totalMinted).toNumber());
  // }

  return (
    <div className="md:my-[16rem] my-[5rem] place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex">
          <div className="max-w-[1400px] p-6 text-black grid md:grid-flow-col gap-5 mx-auto md:space-x-5 place-content-center">
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
            <div className="flex flex-col w-full my-8">
              <h1 className="text-3xl font-bold">Web3SG Genesis Pass</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <p>
                The Web3SG Genesis Collection is a collection of 333 NFT passes
                that give its holders exclusive rights and access to a plethora
                of networking opportunities, funding, and decision-making within
                the WEB3SG community.
                <br />
                <br />
                The pass will be <u>free</u> to mint, and will be first
                available to outstanding members of the community - then if
                supply allows, it will be available to the public.
                <br />
                <br />
                Mint date is still{" "}
                <span className="font-gilroy-black font-bold">TBA</span>, so be
                sure to follow Web3SG on{" "}
                <a
                  className="font-gilroy-black font-bold cursor-pointer text-blue-500"
                  href="https://twitter.com/web3sg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="w-4" /> Twitter
                </a>{" "}
                and join the{" "}
                <a
                  className="font-gilroy-black font-bold cursor-pointer text-[#5865F2]"
                  href="https://discord.gg/web3sg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <DiscordAlt className="w-4 mr-[5px]" />
                  Discord
                </a>
                .
              </p>
              {/* <div className="mt-10 space-y-5">
                <h1>
                  {mintedAmount < 333
                    ? "Current Minted: " + mintedAmount + "/333"
                    : "Sold Out"}
                </h1>
                <div>
                  {!hasMinted ? (
                    mintedAmount < 333 ? (
                      <button
                        //onClick={mintHandler}
                        className="px-4 md:px-8 py-2 md:py-4 place-content-center md:text-2xl text-xl font-gilroy-bold text-black hover:bg-red-400 bg-red-300 mr-auto rounded-full tracking-wider flex flex-row space-x-4"
                      >
                        <ClipLoader
                          loading={loading}
                          size={30}
                          className="my-auto"
                        />
                        <h1>Mint Pass</h1>
                      </button>
                    ) : (
                      <button className="px-4 cursor-not-allowed md:px-8 py-2 md:py-4 place-content-center md:text-2xl text-xl font-gilroy-bold text-black hover:bg-red-400 bg-red-300 mr-auto rounded-full tracking-wider flex flex-row space-x-4">
                        <h1>Sold Out!</h1>
                      </button>
                    )
                  ) : (
                    <button className="px-4 cursor-not-allowed md:px-8 py-2 md:py-4 place-content-center md:text-2xl text-xl font-gilroy-bold text-black hover:bg-red-400 bg-red-300 mr-auto rounded-full tracking-wider flex flex-row space-x-4">
                      <h1>One pass per wallet.</h1>
                    </button>
                  )}
                </div>
              </div> */}
            </div>
            <div className="bg-black mx-auto my-auto p-1 rounded-sm flex">
              <div className="relative place-content-center flex md:w-[500px] w-[300px] mx-auto my-auto">
                <Image
                  src={"/images/genesisPass.gif"}
                  alt={"placeholder"}
                  height={"863"}
                  width={"1600"}
                  className="flex mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
