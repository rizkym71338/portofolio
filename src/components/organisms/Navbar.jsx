import React from "react";
import { Link } from "react-router-dom";
import { useScrollspy } from "../../helpers";
import { Fade } from "react-reveal";

const Navbar = ({ homeRef, aboutRef, skillRef, projectRef, contactRef }) => {
  const navItem = [
    {
      name: "Home",
      ref: homeRef,
      id: "home",
    },
    {
      name: "About",
      ref: aboutRef,
      id: "about",
    },
    {
      name: "Skills",
      ref: skillRef,
      id: "skill",
    },
    {
      name: "Projects",
      ref: projectRef,
      id: "project",
    },
    {
      name: "Contact",
      ref: contactRef,
      id: "contact",
    },
  ];

  const activeId = useScrollspy(
    navItem.map((nav) => nav.id),
    80
  );

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Fade cascade>
        <nav className="bg-white z-30 fixed w-full top-0 shadow-md">
          <div className="max-w-6xl flex flex-wrap justify-between px-2 sm:px-4 py-2.5 items-center mx-auto">
            <Link
              to={`/`}
              className={`font-bold text-slate-700 text-xl text-center md:text-left w-full md:w-fit`}
            >
              Rizky Maulana
            </Link>
            <div className="hidden w-full md:block md:w-fit">
              <ul className="flex py-4 flex-row gap-8 text-sm font-medium">
                {navItem.map((nav, i) => (
                  <li key={i} onClick={() => handleScroll(nav.ref.current)}>
                    <a
                      className={`${
                        activeId == nav.id ? "text-blue-700" : "text-slate-700"
                      } block md:hover:text-blue-700 cursor-pointer transition-all duration-300 ease-in-out`}
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </Fade>
    </>
  );
};

export default Navbar;
