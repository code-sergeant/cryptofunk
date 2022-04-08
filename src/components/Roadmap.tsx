import React from "react";
import Image from "next/image";
import bg from "../../assets/heroReflection.png";

function Roadmap() {
  return (
    <div className="relative z-10">
      <div className="hidden md:block">
        <Image src={bg} layout="responsive" />
      </div>

      <div className="hidden xl:flex justify-center pb-10">
        <div className="absolute flex flex-col top-28 bg-metal z-20 w-3/5 rounded-xl shadow-xl shadow-metal">
          <h1 className="pt-10 text-center text-6xl bg-clip-text bg-gradient-to-b from-cyanMan via-purp to-pinkHaze text-transparent">
            Roadmap
          </h1>

          <div className="flex p-10 justify-evenly font-serif">
              <div className="flex flex-col justify-evenly w-1/3">
                <div className="p-20 text-center font-serif">
                  <h1 className="text-pinkHaze text-4xl">Phase 1:</h1>
                  <h1 className="text-white text-4xl">Launch</h1>
                </div>

                <div className="rounded-xl border-2 border-purp flex justify-center text-white marker:text-white text-sm p-3">
                    
                      <p>Functionality to have 2 CryptoFunk DJ's <span className="text-cyanMan">Collaborate</span>, procedurally generating full-length NFT music based on their unique physical traits</p>
                    
                  
                </div>

                <div className="p-20 text-center font-serif">
                  <h1 className="text-pinkHaze text-4xl">Phase 3:</h1>
                  <h1 className="text-white text-4xl">Future</h1>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col">
                  {/* <div className="rounded-full w-12 h-12 bg-cyanMan border-4 border-purp z-10 shadow-xl shadow-pinkHaze"></div>
                  <div className="absolute divide-y-2 divide-purp h-3/5"></div> */}
                </div>

                {/* <hr className="w-20 border border-purp bg-purp" /> */}
              </div>

              <div className="flex flex-col justify-evenly">
                <div className="flex rounded-xl border-2 border-purp justify-center  text-white marker:text-white text-sm py-6 px-12">
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

                <div className="text-center">
                  <h1 className="text-pinkHaze text-4xl">Phase 2:</h1>
                  <h1 className="text-white text-4xl">Collaboration</h1>
                </div>

                <div className="rounded-xl border-2 border-purp flex justify-center px-12 py-6">
                  <div className="text-white marker:text-white text-sm">
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
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

