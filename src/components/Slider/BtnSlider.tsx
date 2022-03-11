import React from "react";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline';

type SlideDirection ={
    direction: string
    moveSlide: () => void
};

 const BtnSlider: React.FC<SlideDirection> = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      // className={direction === "next" ? "w-6 h-6 top-1/2 right-5 transform translate-y-2/3" : "w-6 h-6 top-1/2 left-5 transform translate-y-2/3"}
    >
      {direction === "next" ? <ArrowCircleLeftIcon className="h-16 w-16 text-white"/> : <ArrowCircleRightIcon className="h-16 w-16 text-white"/>}
    </button>
  );
};

export default BtnSlider;