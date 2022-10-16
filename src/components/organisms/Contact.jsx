import React, { forwardRef } from "react";
import { ButtonFIll, Input, TextArea } from "../atoms";
import { Fade } from "react-reveal";

const Contact = forwardRef(({ id }, ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("SUCCESS");
  };

  return (
    <>
      <section ref={ref} id={id} className={`bg-white`}>
        <div
          className={`max-w-6xl py-12 md:py-16 transition-all duration-300 ease-in-out flex items-center justify-center mx-auto px-2 sm:px-4`}
        >
          <div className={`flex flex-col space-y-12 md:space-y-16 w-full`}>
            <div
              className={`flex items-center justify-center space-x-2 w-fit mx-auto`}
            >
              {/* <Fade bottom cascade> */}
              <div className="flex flex-col">
                <Fade bottom cascade>
                  <span
                    className={`text-3xl md:text-5xl font-bold text-slate-700`}
                  >
                    Get In Touch
                  </span>
                  <div className={`h-1 bg-blue-700`} />
                </Fade>
              </div>
              <span className={`text-3xl md:text-5xl`}>👋</span>
              {/* </Fade> */}
            </div>
            <div className={`py-5 md:py-10 max-w-4xl mx-auto w-full`}>
              <form
                onSubmit={handleSubmit}
                className={`space-y-5 md:space-y-10`}
              >
                <Fade bottom cascade>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10`}
                  >
                    <Fade bottom cascade>
                      <Input
                        type={`text`}
                        name={`name`}
                        id={`name`}
                        placeholder={`Tell me about your name`}
                        required
                      />
                      <Input
                        type={`email`}
                        name={`email`}
                        id={`email`}
                        placeholder={`Can you write email here ?`}
                        required
                      />
                    </Fade>
                  </div>
                  <TextArea
                    name="message"
                    id="mesage"
                    cols="30"
                    rows="15"
                    placeholder={`Write some message here`}
                    className={`bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 transition-all duration-300 ease-in-out`}
                    required
                  ></TextArea>
                  <ButtonFIll type={`submit`} text={`Send Email`} />
                </Fade>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Contact;
