import React from "react";
import Image from "next/image";
import cfLogo from "../../assets/Vector.png";

type PhaseDetails = {
  description: string;
  releaseDate: string;
  isComplete: boolean;
};

function ProjectRoadmap() {
  const phaseDetailsArray: PhaseDetails[] = [
    {
      description: "First Release of Cryptofunk Art",
      releaseDate: "10/10/22",
      isComplete: true,
    },
    {
      description: "Fresh Update to the Collection",
      releaseDate: "12/25/22",
      isComplete: false,
    },

    {
      description: "Add Collab capability to NFT collection",
      releaseDate: "2/14/23",
      isComplete: false,
    },
  ];

  return (
    <div className="border-gray-100 p-20 max-w-5xl mx-auto font-Exo py-48">
      <div className="flex justify-center p-10">
        <Image src={cfLogo} height={120} width={110} />
      </div>

      <div className="flex justify-center border-black border-2 p-2 mb-10 rounded-full items-center shadow-md shadow-purp">
        <h1 className="text-2xl md:text-4xl font-bold">Cryptofunk Tour Roadmap</h1>
      </div>

      <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
        {phaseDetailsArray.map(({ description, releaseDate, isComplete }) => (
          <PhaseBullet description={description} releaseDate={releaseDate} isComplete={isComplete}/>
        ))}

      </ol>
    </div>
  );
}

export default ProjectRoadmap;

type PhaseBulletProps = PhaseDetails;

const PhaseBullet: React.FC<PhaseBulletProps> = ({
  description,
  releaseDate,
  isComplete,
}) => (
  <li className="mb-10 ml-6">
    <span
      className={`flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 ${
        isComplete ? "dark:bg-pinkHaze" : "dark:bg-white"
      }`}
    ></span>

    <div className="flex justify-between items-center p-4 bg-metal rounded-lg border border-gray-200 shadow-sm sm:flex">
      <time className="mb-2 text-lg font-normal leading-none text-white">
        Release on {releaseDate}
      </time>
      <div className="p-2 font-normal text-metal text-xl bg-gradient-to-b from-cyanMan via-purp to-pinkHaze rounded-md">
        <h1>{description}</h1>
      </div>
    </div>
  </li>
);
