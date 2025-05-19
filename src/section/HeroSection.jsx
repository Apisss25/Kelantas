import React from "react";
import { ReactTyped } from "react-typed";
import ImageHero from "/ImageHome.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faTrafficLight } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";

const HeroSection = () => {
  return (
    <section className="flex  flex-col justify-center items-center px-5 pt-35 pb-20 md:pt-12">
      <div className="container w-[92%] h-[550px] mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-16 lg:py-24 gap-12">
        {/* Left: Text & Buttons */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[25px] lg:text-4xl font-semibold font-[inter] mb-8 leading-tight">
            “Berkendara Aman,
            <br />
            Selamat Sampai Tujuan”
            <svg
              viewBox="0 0 200 40"
              className="w-[80%] h-[30px] mx-auto lg:mx-0 mb-5"
              preserveAspectRatio="none"
            >
              {/* Garis atas – panjang penuh */}
              <path
                d="M0,20 Q100,0 200,20"
                fill="none"
                stroke="#b0b0b0"
                strokeWidth="3"
                className="drop-shadow-md"
              />
            </svg>
          </h1>

          <h2 className="text-[14px] lg:text-[16px] font-[Poppins] mb-10 ">
            Website ini dibuat untuk membantu kamu memahami <br /> aturan dan
            cara berkendara yang aman di jalan.
            {/* <span className="font-semibold text-[#FFCC00]">
              <ReactTyped
                strings={["Website", "Edukasi","aturan","Tips",]}
                typeSpeed={80}
                backSpeed={60}
                loop
              />
            </span> */}
          </h2>
          <div className="flex justify-center lg:justify-start gap-6 lg:gap-8">
            <Button
              color="black"
              bgColor="#ffeaad"
              hoverBgColor="#FFCC00"
              width="160px"
              height="48px"
              rounded="12px"
              title="Education"
              Children={
                <FontAwesomeIcon
                  icon={faTrafficLight}
                  className="mr-2 text-lg"
                />
              }
            />
            <Button
              color="black"
              bgColor="#ffffff"
              hoverBgColor="#e5e5e5"
              width="160px"
              height="48px"
              rounded="12px"
              title="UU"
              Children={
                <FontAwesomeIcon icon={faBook} className="mr-2 text-lg" />
              }
              
            />
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center " >
          <img src={ImageHero} alt="Hero" className="" />
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
