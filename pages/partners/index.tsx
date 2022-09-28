import { ethers, Signer } from "ethers";
import Image from "next/image";
import React from "react";
import { Plus } from "styled-icons/evaicons-solid";

// @ts-ignore
function index({ signer }) {
  //Function that handles minting
  async function mintHandler() {
    // @ts-ignore
    if (window.ethereum !== "undefined") {
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
      <div className="w-[5rem] h-[5rem] md:h-[7rem] md:w-[7rem] relative outline outline-1 outline-black">
        <a href={url} target="_blank" rel="noreferrer">
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
    <div className=" place-content-center flex flex-col md:my-[4rem]">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1400px] p-6 text-black flex flex-col mx-auto space-y-10 place-content-between">
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
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">You May Know</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <div className="grid gap-5 grid-flow-col md:grid-rows-3 grid-rows-5 px-3 md:px-0">
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
                  url="https://opensea.io/category/pg"
                  image="godjira.gif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/projectisekaimeta"
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
                  url="https://opensea.io/collection/kumaverse"
                  image="kuma.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/generativedungeon"
                  image="dungeon.avif"
                />
                <FeaturedCollabPanel
                  url="https://opensea.io/collection/zombieclub-token"
                  image="zombie.avif"
                />
                <div className="w-[5rem] h-[5rem] md:h-[7rem] md:w-[7rem] relative place-content-center flex">
                  <h1 className="m-auto flex text-xl md:text-3xl font-gilroy-black font-black select-none">
                    +300
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="text-3xl font-bold">All Partners</h1>
              <div className="h-[2px] bg-black w-10 my-5" />
              <div className="grid md:gap-10 md:grid-flow-col grid-flow-row">
                <p>
                  Fuzzy Felons
                  <br />
                  Elefrens
                  <br />
                  The Zero
                  <br />
                  Elvn
                  <br />
                  Flinch
                  <br />
                  Tiny Astro
                  <br />
                  The Auracles
                  <br />
                  Bakuto
                  <br />
                  Advent
                  <br />
                  Joincirclexyz
                  <br />
                  Officious_Bunny_Club
                  <br />
                  Feet and Eyes Guys
                  <br />
                  Drippy Zombies
                  <br />
                  Kosekai
                  <br />
                  Cthulhu Armageddon
                  <br />
                  R.I.S.E
                  <br />
                  Blockgems
                  <br />
                  Chain Runners
                  <br />
                  Senshi
                  <br />
                  Asura
                  <br />
                  Little Jiras
                  <br />
                  Kazoku
                  <br />
                  Lost in Jukiverse
                  <br />
                  Chubbyy Jiras
                  <br />
                  Chief Toads
                  <br />
                  Primates
                  <br />
                  Katatonik
                  <br />
                  Side Quest
                  <br />
                  Glaxius The Game
                  <br />
                  Reckless Racoon
                  <br />
                  Apes_
                  <br />
                  Vandal City
                  <br />
                  VIVID
                  <br />
                  OVERBORNE
                  <br />
                  Exiles
                  <br />
                  Haunted Goats
                  <br />
                  Whitelist ping
                  <br />
                  Legion
                  <br />
                  WeirdPals
                  <br />
                  Bull and Bear
                  <br />
                  Kenoko
                  <br />
                  Aidbrokers
                  <br />
                  ApeXClubNFT
                  <br />
                  CryptoRex
                  <br />
                  Pillheads
                  <br />
                  Parallax
                  <br />
                  Hidden Azuki
                  <br />
                  Generative Dungeons
                  <br />
                  HachiDAO
                  <br />
                  Last Essence
                  <br />
                  Tokun
                  <br />
                  Zoonies
                  <br />
                  Chill Dogs Club
                  <br />
                  Dre’s Empire
                  <br />
                  Secret Alpha Lab
                  <br />
                  Space Warlock
                  <br />
                  Souka
                  <br />
                  Shy Guys
                  <br />
                  Webaverse Origo
                  <br />
                  FlickyGang
                  <br />
                  Steady Stack Titans
                  <br />
                  Gridcraft
                  <br />
                  Gangsta Goonz
                  <br />
                  Nubbies Gen 2<br />
                  Otaku Club
                  <br />
                  Bubbly
                  <br />
                  Satoshi Runners
                  <br />
                  Apedog
                  <br />
                  Ecotars
                  <br />
                  DOPE
                  <br />
                  Dewom Boys Club
                  <br />
                  Universe By Barnabe
                  <br />
                  Project Zenogakki
                  <br />
                  Angry Dinos
                  <br />
                  Project Suisei
                  <br />
                  High Society BS
                  <br />
                  Phantom Zero
                  <br />
                  Sleepy Sniper Society
                  <br />
                  Century Social Club
                  <br />
                  Bandits
                  <br />
                  Arties
                  <br />
                  Bubble Friends
                  <br />
                  Cryptobilia
                  <br />
                  Memotic Metaverse
                  <br />
                  CryptoTitans
                  <br />
                  Defimon
                  <br />
                  NFTEye
                  <br />
                  The Jalals
                  <br />
                  Sol Vibez
                  <br />
                  Unitive Labs
                  <br />
                  Frenz From Space
                  <br />
                  BILLIONAIRE BIRDS
                  <br />
                  IDENTITIES
                  <br />
                  Bear Frenz
                  <br />
                  Fantazya
                  <br />
                  PepeApes
                  <br />
                  TOMATOZ by HOMELANDNFT
                  <br />
                  Aliens trippin high
                  <br />
                  it’s egg
                  <br />
                  Mooncatz
                  <br />
                  Thieves List
                  <br />
                  Supper Club
                  <br />
                  You are the hero NFT
                  <br />
                  YeYe NFT
                  <br />
                  Mecha Cat Crew
                  <br />
                  Techie Club
                  <br />
                  Mintstory
                  <br />
                  OgreWorld
                  <br />
                  TritonPass
                  <br />
                  Haunted Space
                  <br />
                  YUKI
                  <br />
                  Flare MC
                  <br />
                  Moondragons
                  <br />
                  AIC gen2
                  <br />
                  The Nakeds
                  <br />
                  SILLY SOCIETY
                  <br />
                  MYRAI
                  <br />
                  Gas Guzzlers
                  <br />
                  Potato by King George
                  <br />
                  DefiMirrorPass
                  <br />
                  High Society BS
                  <br />
                  Moonskully
                  <br />
                  Centaurify
                  <br />
                  Gangsta Mice City
                  <br />
                  Komo Whales
                  <br />
                  Amai
                </p>
                <p>
                  Introverse
                  <br />
                  Mad Mouse
                  <br />
                  Arcade
                  <br />
                  BobotsNFT
                  <br />
                  Twisted Bears
                  <br />
                  Fuzzy Fighters
                  <br />
                  World of Zaudoria
                  <br />
                  Ukiyo
                  <br />
                  9Tales
                  <br />
                  AsashiNinja
                  <br />
                  Gummies Gang
                  <br />
                  Niko Kephis Party Club
                  <br />
                  HomieFaces
                  <br />
                  AMAZING PANDAVERSE NFT
                  <br />
                  Mutant Goats
                  <br />
                  Metasurvivors club
                  <br />
                  EPICBEAST
                  <br />
                  Crocodoods
                  <br />
                  Sokira (Free NFT)
                  <br />
                  Plowies
                  <br />
                  Zooverse
                  <br />
                  Astromallows
                  <br />
                  VARIANT
                  <br />
                  Exverse
                  <br />
                  Murasai
                  <br />
                  Mood Octopous
                  <br />
                  Infinite Virtual Space
                  <br />
                  Tomodachi
                  <br />
                  Brewies
                  <br />
                  Droplets
                  <br />
                  Multiverse VM
                  <br />
                  Rice Day
                  <br />
                  Ragnarok
                  <br />
                  TrapMonkie
                  <br />
                  Almost Fancy
                  <br />
                  NFT Shounen
                  <br />
                  Mindblowon Universe
                  <br />
                  The Squids
                  <br />
                  Metawizards
                  <br />
                  Kuroki
                  <br />
                  FoodMoon
                  <br />
                  Gummy Monkeys
                  <br />
                  Nice Kids
                  <br />
                  Metakages
                  <br />
                  The Exalted
                  <br />
                  World Overlay Studios
                  <br />
                  Houbara Hunting Ground
                  <br />
                  Scavengers
                  <br />
                  Little Shapes
                  <br />
                  N3ighbors
                  <br />
                  isoroom Gen2
                  <br />
                  Frahm
                  <br />
                  Beatbots
                  <br />
                  Tankies
                  <br />
                  Space Boo
                  <br />
                  Dragon of Midgard
                  <br />
                  DoomBoo
                  <br />
                  Yogies
                  <br />
                  Marion Lab
                  <br />
                  Elysium Metagods
                  <br />
                  Lvl 1 Hunter
                  <br />
                  MerryPals
                  <br />
                  Demonica
                  <br />
                  YOOMOOTA
                  <br />
                  Voxel Ville avatars
                  <br />
                  Llamascapes
                  <br />
                  Blvck Paris
                  <br />
                  Bone Ducks
                  <br />
                  CLAY
                  <br />
                  Ukiyo Players
                  <br />
                  CubeX
                  <br />
                  Galverse
                  <br />
                  Bottle Heads
                  <br />
                  Reef
                  <br />
                  Kumaverse
                  <br />
                  Kahiru
                  <br />
                  Boardgamers
                  <br />
                  Isekai Meta
                  <br />
                  Citizens of Tajigen
                  <br />
                  Afterlife
                  <br />
                  Strangers Kojo
                  <br />
                  The NFT Islands
                  <br />
                  LilFrens
                  <br />
                  Dobies
                  <br />
                  Chiptos
                  <br />
                  Dream Protocols
                  <br />
                  DREAM LAB | REFLECTIONS
                  <br />
                  Planet of Cyborgs
                  <br />
                  Metakami
                  <br />
                  Shogunate
                  <br />
                  DUSKTOPIA
                  <br />
                  Kurayami
                  <br />
                  ETHX AI
                  <br />
                  Celephais
                  <br />
                  Shikigai
                  <br />
                  Gotchagatcha
                  <br />
                  ALYA
                  <br />
                  LOST EDEN
                  <br />
                  Ikusa
                  <br />
                  Culture Cubs
                  <br />
                  Shindo
                  <br />
                  ME-Legend
                  <br />
                  Multiversal Walkers
                  <br />
                  HANDSOFF – BEARBRICK
                  <br />
                  Strikers of the Blue Sky
                  <br />
                  Shinka
                  <br />
                  Bubbleworld
                  <br />
                  BBRC
                  <br />
                  Legend of Atlantis
                  <br />
                  Bloo Loop
                  <br />
                  Bunniverse
                  <br />
                  The Lab Game
                  <br />
                  Puff World
                  <br />
                  Day for it
                  <br />
                  Onryo 888
                  <br />
                  Perfidious
                  <br />
                  Yokee
                  <br />
                  VISPX
                  <br />
                  FR0Gs
                  <br />
                  BornToBeMe
                  <br />
                  Arcaneverse
                  <br />
                  The Chibi Club
                  <br />
                  Under Wraps
                  <br />
                  Tasties
                  <br />
                  Third Eye Club
                  <br />
                  World of Irukandji
                </p>
                <p>
                  Grimmies
                  <br />
                  PenguPlatform
                  <br />
                  ParalLands: Wayfarers
                  <br />
                  Lucid
                  <br />
                  Satori
                  <br />
                  MDMA
                  <br />
                  This Thing of Ours
                  <br />
                  Beefy Blokes
                  <br />
                  Gochi
                  <br />
                  Dininho Adventures
                  <br />
                  NFT Advent
                  <br />
                  Infinity Gnomes
                  <br />
                  Yokai
                  <br />
                  Legendary Owls
                  <br />
                  Yokai
                  <br />
                  Royal BlockFU
                  <br />
                  Sploogers
                  <br />
                  Outcast of The Society
                  <br />
                  Atsui
                  <br />
                  Superordinary Friends
                  <br />
                  Honey Shots by Fancy Bears
                  <br />
                  The Samurai Saga
                  <br />
                  Woodlanderz
                  <br />
                  The Neighbourhood
                  <br />
                  BearXLabs
                  <br />
                  Mare Bears
                  <br />
                  Elefrens
                  <br />
                  BestFriend
                  <br />
                  Swaggy Whales
                  <br />
                  Meta-City Game
                  <br />
                  Sarugami Gama Summons
                  <br />
                  Bubblies
                  <br />
                  BountyBotz
                  <br />
                  Caveman
                  <br />
                  Rainbow Walkers
                  <br />
                  WallysNFT
                  <br />
                  Yokai Labs
                  <br />
                  Alpha Blocks
                  <br />
                  Cosa Monstra
                  <br />
                  Revengebirds
                  <br />
                  BearFrenz
                  <br />
                  Onchain Buccaneers
                  <br />
                  The Athletic Project
                  <br />
                  The Farm Game
                  <br />
                  BataBata
                  <br />
                  Project Shojira
                  <br />
                  DOMINUS COLLECTION
                  <br />
                  the Cannibals
                  <br />
                  Hyakki
                  <br />
                  Monsterland
                  <br />
                  Darbotz
                  <br />
                  Miuzium
                  <br />
                  Luskorp
                  <br />
                  KumaToys (Kumaverse)
                  <br />
                  AllOutWar
                  <br />
                  SpookyBirds
                  <br />
                  Verb Labs
                  <br />
                  VIVITY
                  <br />
                  Extraterrestrials Official
                  <br />
                  ToyBirds
                  <br />
                  WizardJump
                  <br />
                  TAT
                  <br />
                  Shinnoki
                  <br />
                  TwitterScan
                  <br />
                  Half-Life Saga (1/2HP)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
