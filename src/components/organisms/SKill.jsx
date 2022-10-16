import React, { forwardRef } from "react";

const SKill = forwardRef(({ id }, ref) => {
  const data = [
    {
      title: "Collaboration",
      description: `still in their infancy. Various versions have evolved over the
      years, sometimes by accident, sometimes on purpose injected
      humour and the like`,
    },
    {
      title: "Time Management",
      description: `still in their infancy. Various versions have evolved over the
      years, sometimes by accident, sometimes on purpose injected
      humour and the like`,
    },
    {
      title: "Problem Solving",
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
              <span className={`text-3xl md:text-5xl font-bold text-slate-700`}>
                Skills
              </span>
              <div className={`h-1 w-1/2 bg-blue-700`} />
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-10`}>
              {data.map((skill, i) => (
                <div
                  key={i}
                  className={`space-y-2 md:space-y-4 flex flex-col justify-center`}
                >
                  <div
                    className={`w-full aspect-[4/3] bg-blue-200 rounded-lg`}
                  ></div>
                  <span
                    className={`text-lg md:text-2xl font-bold text-slate-700`}
                  >
                    {skill.title}
                  </span>
                  <p
                    className={`text-sm md:text-base font-medium text-slate-700 text-justify`}
                  >
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default SKill;
