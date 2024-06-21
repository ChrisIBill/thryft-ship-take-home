import NextLink from "next/link";

import { ThemeSwitch } from "./theme-switch";
import { Logo } from "./icons";

export const Navbar = () => {
  return (
    <nav
      className="w-full justify-center items-center bg-default-50"
      style={{ borderBottom: "1px solid default-300" }}
    >
      <header className="w-full px-16 py-5 sm:basis-full flex justify-between items-center">
        <div className="gap-3 max-w-fit basis-1/3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-semibold text-2xl text-[#565BD7] font-sans">
              Thryft Ship
            </p>
            {/* font-family: 'Circular Std'; */}
            {/* font-style: normal; */}
            {/* font-weight: 700; */}
            {/* font-size: 24px; */}
            {/* line-height: 30px; */}
            {/* display: flex; */}
            {/* align-items: center; */}
          </NextLink>
        </div>
        <div className="gap-[64px] basis-1/3" />
        <div className="gap-[64px] flex basis-1/3 justify-end items-center">
          <ThemeSwitch />
        </div>
      </header>
    </nav>
  );
};
