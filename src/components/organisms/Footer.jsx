import React from "react";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <>
      <section className={`bg-slate-100`}>
        <footer
          className={`max-w-6xl py-12 md:py-16 transition-all duration-300 ease-in-out flex items-center justify-between mx-auto px-2 sm:px-4`}
        >
          <Fade cascade>
            <span className={`text-sm text-slate-700 sm:text-center`}>
              © 2022 . All Rights Reserved.
            </span>
            <ul
              className={`flex flex-wrap items-center mt-3 text-sm text-slate-700 sm:mt-0`}
            >
              <li>
                <a href={`/`} className={`mr-4 hover:underline md:mr-6`}>
                  About
                </a>
              </li>
              <li>
                <a href={`/`} className={`mr-4 hover:underline md:mr-6`}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={`/`} className={`mr-4 hover:underline md:mr-6`}>
                  Licensing
                </a>
              </li>
              <li>
                <a href={`/`} className={`hover:underline`}>
                  Contact
                </a>
              </li>
            </ul>
          </Fade>
        </footer>
      </section>
    </>
  );
};

export default Footer;
