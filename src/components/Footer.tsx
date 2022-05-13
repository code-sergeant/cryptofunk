import React from 'react';

import Image from 'next/image';

import discord from '../../assets/discord.png';
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import wave from '../../assets/wave.png';

function Footer() {
  return (
    <div>
      <div className="pt-3 text-center bg-clip-text bg-gradient-to-b from-cyanMan via-purp to-pinkHaze text-transparent pb-10">
        <h1 className="text-3xl lg:text-5xl uppercase">
          Join the Cryptofunk Community!
        </h1>
      </div>

      <div className="flex gap-6 justify-center p-10">
        <Image
          width={160}
          height={160}
          src={wave}
          alt="Wave"
          objectFit="contain"
          className="cursor-pointer"
        />
        <Image
          width={160}
          height={160}
          src={discord}
          alt="Discord"
          objectFit="contain"
          className="cursor-pointer"
        />
        <Image
          width={160}
          height={160}
          src={github}
          alt="github"
          objectFit="contain"
          className="cursor-pointer"
        />
        <Image
          width={160}
          height={160}
          src={instagram}
          alt="Instagram"
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>

      <div className="text-center py-5">
        <h2 className="text-white">copyright of CRYPTOFUNK LLC 2022</h2>
      </div>
    </div>
  );
}

export default Footer;
