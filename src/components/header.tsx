import { useState } from "react";
import { cn } from "@/lib/utils";
import LogoIcon from "../svgs/header/logo.svg?react";
import LogoText from "../svgs/header/logo-text.svg?react";
import SearchIcon from "../svgs/header/search.svg?react";
import BurgerIcon from "../svgs/header/burger.svg?react";
import CloseIcon from "../svgs/header/close.svg?react";
import LogoTransparent from "../svgs/header/logo-transparent.svg?react";

const Header = ({ pathname = "/" }: { pathname?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Sectors", href: "/sectors" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const normalizePath = (path: string) => {
    return path === "/" ? path : path.replace(/\/$/, "");
  };

  const currentPath = normalizePath(pathname);

  return (
    <>
      <header className="sticky top-0 z-40 flex w-full justify-center lg:top-4 lg:px-4">
        <div className="flex w-full max-w-343.75 items-center justify-between bg-white/70 px-4 py-3 shadow-lg backdrop-blur-md md:px-6 lg:rounded-2xl">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 md:gap-3">
            <div className="h-8 w-8 text-teal-400 md:h-10 md:w-10">
              <LogoIcon className="h-full w-full" />
            </div>
            <div className="h-6 text-slate-600 md:h-8">
              <LogoText className="h-full w-full" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map(item => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium text-slate-500 transition-colors hover:text-[#22272F]/80",
                    isActive && "text-[#22272F]"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Contact Button */}
          <a
            href="/contact"
            className="hidden rounded-lg bg-primary px-6 py-2 font-semibold text-white shadow-md transition-colors hover:bg-primary/80 lg:block"
          >
            Contact Us
          </a>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-slate-500 hover:text-teal-500">
              <SearchIcon className="h-6 w-6" />
            </button>
            <button
              className="text-slate-500 hover:text-teal-500"
              onClick={() => setIsMenuOpen(true)}
            >
              <BurgerIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          {/* Background Watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <LogoTransparent className="h-auto w-[80%] text-slate-300 opacity-20" />
          </div>

          {/* Close Button */}
          <div className="relative z-10 flex w-full items-center justify-end px-4 py-3 md:px-6">
            <div className="flex h-8 items-center md:h-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Menu Links */}
          <nav className="relative z-10 flex flex-col gap-4 p-6">
            {navItems.map(item => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-4 py-2 text-3xl font-medium text-slate-500 transition-all hover:text-teal-500",
                    isActive &&
                      "bg-linear-to-l from-[#F6F7F9] to-white text-[#22272F]"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
