import React from "react";
import { ArrowBigRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url('/backgroundImage.png')] bg-cover bg-center h-screen">
      <h1 className="text-5xl md:leading-[70px] font-semibold max-w-110">
        Grab Your Seats <br /> Catch Every Show
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> 2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> 2h 8m
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        Experience the thrill of unstoppable heroes, epic battles, and jaw-dropping adventures on the big screen. Book your tickets now and be part of the action like never before.
      </p>

      <button
        onClick={() => {
          navigate("/movies");
          scrollTo(0, 0);
        }}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowBigRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
