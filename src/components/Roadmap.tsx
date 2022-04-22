import React from "react";
import Image from "next/image";
import bg from "../../assets/heroReflection.png";
import Footer from "./Footer";

function Roadmap() {
  return (
    <div className="bg-white p-20 h-[1000px]">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-metal px-10 w-3/5 h-3/4 mx-auto py-20 rounded-xl shadow-lg shadow-metal">
        <div className="col-span-2 mx-auto">
          <h1 className="bg-clip-text font-light font-Audiowide bg-gradient-to-b from-cyanMan via-purp to-pinkHaze text-transparent text-5xl">
            ROADMAP
          </h1>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="grid justify-center">
            <h1 className="text-pinkHaze font-serif text-3xl">Phase 1:</h1>
            <h1 className="text-white font-serif text-3xl">Launch</h1>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="grid justify-center text-white ring-2 ring-purp rounded-md w-3/4 py-6 font-serif text-lg">
            <ul>
              <li>NFT drop calendar listings</li>
              <li>Community Partnerships</li>
              <li>Promotions and Marketing</li>
              <li>Mint October 2022</li>
              <li>List on secondary markets</li>
              <li>Rarity Table Listing</li>
              <li>Asset Playground</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

{
  /* <ul>
<li>NFT drop calendar listings</li>
<li>Community Partnerships</li>
<li>Promotions and Marketing</li>
<li>Mint October 2022</li>
<li>List on secondary markets</li>
<li>Rarity Table Listing</li>
<li>Asset Playground</li>
</ul>

<ul>
                      <li>NFT drop calendar listings</li>
                      <li>Community Partnerships</li>
                      <li>Promotions and Marketing</li>
                      <li>Mint October 2022</li>
                      <li>List on secondary markets</li>
                      <li>Rarity Table Listing</li>
                      <li>Asset Playground</li>
                    </ul>




<p>Functionality to have 2 CryptoFunk DJ's <span className="text-cyanMan">Collaborate</span>, procedurally generating full-length NFT music based on their unique physical traits</p> */
}
