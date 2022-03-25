import Image from "next/image";
import hero from "../../assets/hero-section-bg.png";
import Router from "next/router";
import cfLogo from "../../assets/Vector.png";

function Banner() {
  return (
    <div className="relative">
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
            className="text-5xl md:text-5xl lg:text-7xl
                            bg-clip-text font-light font-Audiowide bg-gradient-to-b from-cyanMan via-purp to-pinkHaze text-transparent"
          >
            CRYPTO FUNK{" "}
          </h1>

          <div className="flex flex-col items-center text-center lg:px-28">
            <h1 className="text-white font-serif text-3xl">
              The <span className="italic">funkiest</span> collection of 10,000
              unique NFTs Procedurally generated{" "}
              <span className="text-cyanMan">NFT Art and Music</span> in the
              Solana Ecosystem
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row align-center justify-center mt-10 gap-4 px-24 lg:px-0 z-10">
          <button
            onClick={() => Router.push("https://solsea.io/")}
            className="relative font-Audiowide bg-transparent border-4 text-xl xl:text-2xl border-cyanMan rounded-full text-cyanMan px:10 lg:px-24 py-4 
                            shadow-lg shadow-metal hover:shadow-pinkHaze active:bg-pinkHaze  active:scale-90 transition duration-150"
          >
            BUY ON SOLSEA
          </button>

          <button
            onClick={() => Router.push("https://solsea.io/")}
            className="relative font-Audiowide text-xl xl:text-2xl bg-cyanMan rounded-full text-metal px-10 md:px-15 lg:px-20 py-4 shadow-lg shadow-metal hover:shadow-pinkHaze active:bg-pinkHaze active:scale-90 transition duration-150"
          >
            MINT YOUR OWN NFT
          </button>

          <button
            onClick={() => Router.push("https://magiceden.io/")}
            className="relative font-Audiowide bg-transparent border-4 text-xl md:text-2xl border-cyanMan rounded-full text-cyanMan px-10 md:px-15 lg:px-20 py-4 shadow-lg shadow-metal hover:shadow-pinkHaze active:bg-pinkHaze  active:scale-90 transition duration-150"
          >
            BUY ON MAGIC EDEN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
