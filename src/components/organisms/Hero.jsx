import React from "react";

const Hero = ({ ref, id }) => {
  return (
    <>
      <section ref={ref} id={id} className="bg-white">
        <div className="max-w-6xl min-h-screen flex items-center justify-center mx-auto px-2 sm:px-4 py-2.5">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50">Left</div>
            <div className="bg-blue-50">Right</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
