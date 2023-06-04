import { Link } from "react-router-dom";
import { IconAbout, IconContact, IconHome, IconProject } from "../../assets";

const NavbarMain = () => {
  const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: IconHome,
    },
    {
      name: "About",
      href: "#about",
      icon: IconAbout,
    },
    {
      name: "Projects",
      href: "#project",
      icon: IconProject,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: IconContact,
    },
  ];

  return (
    <>
      <div className="sticky top-0 border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto flex flex-row items-center justify-center px-4 py-3 sm:justify-between">
          <img
            src="/images/logo-rizdev.webp"
            alt="logo-rizdev"
            className="aspect-[16/4] w-full max-w-[140px]"
          />
          <div className="hidden flex-row space-x-6 sm:flex">
            {navItems.map(({ name, href }, index) => (
              <Link key={index} to={href}>
                <button className="text-xs font-medium transition-all duration-300 hover:text-blue-600">
                  {name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full flex-row justify-around border-t border-gray-200 bg-gray-50 p-4 sm:hidden">
        {navItems.map(({ name, href, icon: Icon }, index) => (
          <Link
            key={index}
            to={href}
            className="flex flex-col items-center space-y-2"
          >
            <Icon className="aspect-square w-5 text-gray-700" />
            <p className="text-center text-xs font-medium">{name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavbarMain;
