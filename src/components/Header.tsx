import Image from "next/image";
import wave from "../../assets/wave.png";
import discord from "../../assets/discord.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import cfLogo from "../../assets/Vector.png";

function Header() {
  return (
    <header className="flex top-0 py-2 px-5 md:px-10 justify-between">
      <div className="flex relative">
        <Image src={cfLogo} width={55} height={74} />
      </div>
      <div className="flex gap-8">
        <Image
          width={54}
          height={54}
          src={wave}
          alt="Wave"
          objectFit="contain"
          className="cursor-pointer"
        />
        <Image
          width={54}
          height={54}
          src={discord}
          alt="Discord"
          objectFit="contain"
          className="cursor-pointer"
        />
        <Image
          width={54}
          height={54}
          src={github}
          alt="github"
          objectFit="contain"
          className="cursor-pointer"
        />
        <Image
          width={54}
          height={54}
          src={instagram}
          alt="Instagram"
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Header;
