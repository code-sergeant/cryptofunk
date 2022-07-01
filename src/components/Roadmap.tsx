import React from 'react';

function Roadmap() {
  return (
    <div className="bg-gradient-to-b from-cyanMan/50 via-purp/90 to-metal/90 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-metal px-10 w-3/5 h-3/4 mx-auto py-10 rounded-xl shadow-lg shadow-metal">
        <div className="col-span-2 mx-auto pb-4">
          <h1 className="bg-clip-text font-light font-Audiowide bg-gradient-to-b from-cyanMan via-purp to-pinkHaze text-transparent text-5xl">
            ROADMAP
          </h1>
        </div>
        <div className="col-span-2 md:col-span-1 justify-center">
          <div className="grid justify-end items-center h-[100%]">
            <h1 className="text-pinkHaze font-serif text-3xl">
              Phase 1:{' '}
              <span className="text-white font-serif text-3xl pr-4">
                Launch
              </span>
            </h1>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="grid text-white border-l-4 border-purp w-3/4 p-4 font-serif text-lg">
            <p>NFT drop calendar listings</p>
            <p>Community Partnerships</p>
            <p>Promotions and Marketing</p>
            <p>Mint October 2022</p>
            <p>List on secondary markets</p>
            <p>Rarity Table Listing</p>
            <p>Asset Playground</p>
          </div>
        </div>
        <div className="grid justify-end items-center h-[100%]">
          <h1 className="text-pinkHaze font-serif text-3xl">
            Phase 2:{' '}
            <span className="text-white font-serif text-3xl pr-4">Launch</span>
          </h1>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="grid text-white border-l-4 border-purp w-3/4 p-4 font-serif text-lg">
            <p>
              Functionality to have 2 CryptoFunk DJs Collaborate, procedurally
              generating full-length NFT music based on theur unique physical
              traits.
            </p>
            <p>Community Partnerships</p>
            <p>Promotions and Marketing</p>
            <p>Mint October 2022</p>
            <p>List on secondary markets</p>
            <p>Rarity Table Listing</p>
            <p>Asset Playground</p>
          </div>
        </div>
        <div className="grid justify-end items-center h-[100%]">
          <h1 className="text-pinkHaze font-serif text-3xl">
            Phase 3:{' '}
            <span className="text-white font-serif text-3xl pr-4">Launch</span>
          </h1>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="grid text-white border-l-4 border-purp w-3/4 p-4 font-serif text-lg">
            <p>
              Expand NFT utility roadmap based on community holder governance.
            </p>
            <p>Explore collaboration with world Renowned DJs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
