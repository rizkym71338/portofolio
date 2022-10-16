import React, { forwardRef } from "react";
import { ArrowRight } from "../../assets/compSvg";
import { Fade } from "react-reveal";

const Project = forwardRef(({ id }, ref) => {
  const data = [
    {
      title: "Litedex Blog V2",
      description: `still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose injected
          humour and the like`,
    },
    {
      title: "Litedex Blog V2",
      description: `still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose injected
          humour and the like`,
    },
    {
      title: "Litedex Blog V2",
      description: `still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose injected
          humour and the like`,
    },
    {
      title: "Litedex Blog V2",
      description: `still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose injected
          humour and the like`,
    },
    {
      title: "Litedex Blog V2",
      description: `still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose injected
          humour and the like`,
    },
    {
      title: "Litedex Blog V2",
      description: `still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose injected
          humour and the like`,
    },
  ];

  return (
    <>
      <section ref={ref} id={id} className={`bg-white`}>
        <div
          className={`max-w-6xl py-12 md:py-16 transition-all duration-300 ease-in-out flex items-center justify-center mx-auto px-2 sm:px-4`}
        >
          <div className={`flex flex-col space-y-12 md:space-y-16`}>
            <div className="flex flex-col w-fix mx-auto">
              <Fade bottom cascade>
                <span
                  className={`text-3xl md:text-5xl font-bold text-slate-700`}
                >
                  Projects
                </span>
                <div className={`h-1 w-1/2 bg-blue-700`} />
              </Fade>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-10`}>
              <Fade bottom cascade>
                {data.map((project, i) => (
                  <div
                    key={i}
                    className={`flex flex-col justify-center bg-white rounded-2xl shadow-md overflow-hidden`}
                  >
                    <Fade bottom cascade>
                      <div className={`w-full aspect-[4/3] bg-blue-200`} />
                      <Fade bottom cascade>
                        <div
                          className={`px-4 pt-4 pb-6 space-y-2 md:space-y-4`}
                        >
                          <span
                            className={`text-lg md:text-2xl font-bold text-slate-700`}
                          >
                            {project.title}
                          </span>
                          <p
                            className={`text-xs md:text-sm font-normal text-slate-700 text-justify`}
                          >
                            {project.description}
                          </p>
                          <a
                            href="/"
                            className={`inline-block text-xs md:text-base font-normal text-blue-700`}
                          >
                            View Project{" "}
                            <ArrowRight
                              className={`stroke-blue-700 stroke-[1.5px] w-6 h-6 inline`}
                            />
                          </a>
                        </div>
                      </Fade>
                    </Fade>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Project;
