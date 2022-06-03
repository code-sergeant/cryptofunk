import React from 'react';

import Image from 'next/image';

import benfranklin from '../../assets/benfranklin.png';
import gorillatunes from '../../assets/gorillatunes.png';
import bg from '../../assets/heroReflection.png';
import spaceguy from '../../assets/spaceguy.png';
import wolfdj from '../../assets/wolfdj.png';

const NftImages: React.FC = () => {
  return (
    <div className="-mt-24 md:-mt-12 md:-mb-12">
      <div className="hidden">
        <Image
          alt="background image"
          src={bg}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="relative grid grid-cols-2 xl:grid-cols-4 justify-center place-items-center z-20 lg:pl-32 lg:pr-32">
        <Image alt="image 1" src={benfranklin} />

        <Image alt="image 2" src={wolfdj} />

        <Image alt="image 3" src={spaceguy} />

        <Image alt="image 4" src={gorillatunes} />
      </div>
    </div>
  );
};

export default NftImages;
