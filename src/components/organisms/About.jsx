import React from "react";

const About = ({ ref, id }) => {
  return (
    <>
      <section ref={ref} id={id} className={`bg-blue-700/25`}>
        <div
          className={`max-w-6xl py-12 md:py-16 transition-all duration-300 ease-in-out flex items-center justify-center mx-auto px-2 sm:px-4`}
        >
          <div
            className={`grid w-full grid-cols-1 md:grid-cols-2 gap-6 place-items-center`}
          >
            <div>LEFT</div>
            <div className={`flex flex-col space-y-4`}>
              <div className={`w-fit`}>
                <span className={`text-5xl text-slate-900 font-bold`}>
                  About
                </span>
                <div className={`h-1 bg-blue-700 w-1/2`} />
              </div>
              <p
                className={`text-base text-slate-900 font-semibold text-justify`}
              >
                Making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose injected humour and the like.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;