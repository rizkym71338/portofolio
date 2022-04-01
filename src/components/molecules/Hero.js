import React from "react";
import { BackgroundImage, ImageRizky } from "../../assets";
import { Button, Image } from "../atoms";

const Hero = () => {
  return (
    <section id="home" className="flex items-center h-screen">
      <div className="container transition-500">
        <div className="flex flex-wrap transition-500">
          {/* Left */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-blue-500 md:text-xl lg:text-2xl">
              Halo 👋, saya{" "}
              <span className="block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl">
                Rizky Maulana
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
              Frontend Developer
            </h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed transition-500">
              Belajar web programming itu mudah dan menyenangkan bukan.{" "}
              <span className="text-slate-900 font-bold">bukan!</span>
            </p>
            <Button title="Hubungi Saya" size="base" isPrimary />
          </div>

          {/* Right */}
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 relative lg:mt-0 lg:right-0">
              <Image
                src={ImageRizky}
                alt="Rizky Maulana"
                height={300}
                isCenter
              />
              <span className="absolute top-[10%] -z-10 right-1/2 translate-x-1/2">
                <img src={BackgroundImage} className="w-[300px] h-[300px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
