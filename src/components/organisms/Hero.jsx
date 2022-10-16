import React, { forwardRef } from "react";
import { Blob, Profile } from "../../assets";
import { ButtonOutline } from "../atoms";
import ButtonFIll from "../atoms/ButtonFIll";
import { TypeAnimation } from "react-type-animation";

const Hero = forwardRef(({ id }, ref) => {
  return (
    <>
      <section ref={ref} id={id} className="bg-white">
        <div className="max-w-6xl pt-24 pb-12 md:pt-32 md:pb-16 transition-all duration-300 ease-in-out flex items-center justify-center mx-auto px-2 sm:px-4 py-2.5">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
            <div className="space-y-4 md:space-y-8 w-full">
              <div className="flex flex-col space-y-1">
                <span className="text-lg md:text-2xl text-slate-700 font-bold">
                  Hello 👋, I'am
                </span>
                <h1 className="text-3xl md:text-5xl text-blue-700 font-bold">
                  Rizky Maulana
                </h1>
                <span className="text-lg md:text-2xl text-slate-700 font-semibold">
                  <TypeAnimation
                    sequence={[
                      "Frontend",
                      1000,
                      "Frontend Web",
                      1000,
                      "Frontend Web Developer",
                      1000,
                      "Frontend Web",
                      1000,
                      "Frontend",
                      1000,
                      "",
                      500,
                    ]}
                    repeat={Infinity}
                  />
                </span>
              </div>
              <div className="flex flex-col space-y-5">
                <p className="text-base md:text-lg text-slate-700 font-medium text-justify">
                  Still in their infancy. Various versions have evolved over the
                  years, sometimes by accident, sometimes on purpose injected
                  humour and the like.
                </p>
                <div className="flex items-center space-x-5">
                  <ButtonFIll text="More" />
                  <ButtonOutline text="Download CV" />
                </div>
              </div>
            </div>
            <div className="order-first md:order-last w-full">
              <div className="relative flex items-center justify-center">
                <Blob className="h-full w-full fill-blue-700 opacity-50 absolute" />
                <img
                  src={Profile}
                  alt="Rizky Maulana"
                  className="aspect-square h-72 md:h-96 relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Hero;
