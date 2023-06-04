import { ReactNode } from "react";
import { FooterMain, NavbarMain } from "../components";

interface Props {
  children: ReactNode;
}

const LayoutMain = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <NavbarMain />
      <div className="container mx-auto flex-1 px-4">{children}</div>
      <FooterMain />
    </div>
  );
};

export default LayoutMain;
