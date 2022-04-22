import Image from "next/image";
import hero from "../../assets/hero-section-bg.png";
import Router from "next/router";
import cfLogo from "../../assets/Vector.png";

function Banner() {
  return (
    <div className="relative pb-36">
      <Image
        src={hero}
        layout="fill"
        objectFit="cover"
        className="lg:opacity-100 sm:opacity-40"
      />

      <div className="relative flex flex-col justify-center px-10">
        <div className="flex flex-col justify-center items-center ">
          <Image src={cfLogo} width={110} height={150} />
          <h1
            className="text-3xl md:text-5xl
                            bg-clip-text font-light font-Audiowide bg-gradient-to-b from-cyanMan via-purp to-pinkHaze text-transparent"
          >
            CRYPTO FUNK{" "}
          </h1>

          <div className="flex flex-col items-center text-center lg:px-28 text-white font-serif text-3xl">
            <h1>
              The <span className="italic">funkiest</span> collection of 10,000
              unique NFTs.
            </h1>
            <h1>
              Procedurally generated{" "}
              <span className="text-cyanMan">NFT Art and Music</span> in the
              Solana Ecosystem
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-center mt-10 gap-8 lg:px-14 z-10 px-10 md:container md:mx-auto">
          <button
            onClick={() => Router.push("https://solsea.io/")}
            className="col-span-3 lg:col-span-1 font-Audiowide bg-transparent border-4 text-md xl:text-xl border-cyanMan rounded-full text-cyanMan px-10 lg:px-8 py-4
                            shadow-lg shadow-metal hover:shadow-pinkHaze active:bg-pinkHaze  active:scale-90 transition duration-150"
          >
            BUY ON SOLSEA
          </button>

          <button
            onClick={() => Router.push("https://solsea.io/")}
            className="col-span-3 lg:col-span-1 font-Audiowide text-md xl:text-xl bg-cyanMan rounded-full text-metal px-10 lg:px-8 py-4 shadow-lg shadow-metal hover:shadow-pinkHaze active:bg-pinkHaze active:scale-90 transition duration-150"
          >
            MINT YOUR OWN NFT
          </button>

          <button
            onClick={() => Router.push("https://magiceden.io/")}
            className="col-span-3 lg:col-span-1 font-Audiowide bg-transparent border-4 text-sm lg:text-xl border-cyanMan rounded-full text-cyanMan px-10 lg:px-8 py-4 shadow-lg shadow-metal hover:shadow-pinkHaze active:bg-pinkHaze  active:scale-90 transition duration-150"
          >
            BUY ON MAGIC EDEN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
