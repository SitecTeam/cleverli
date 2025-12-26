import React, { useState } from "react";
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
      <header className="sticky top-0 lg:top-4 z-40 w-full flex justify-center lg:px-4">
        <div className="backdrop-blur-md bg-white/80 shadow-lg px-4 py-3 md:px-6 flex items-center justify-between w-full max-w-360 lg:rounded-2xl">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 text-teal-400">
              <LogoIcon className="w-full h-full" />
            </div>
            <div className="h-6 md:h-8 text-slate-600">
              <LogoText className="w-full h-full" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-500 hover:text-teal-500 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <a
            href="/contact"
            className="hidden lg:block bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-md"
          >
            Contact Us
          </a>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-slate-500 hover:text-teal-500">
              <SearchIcon className="w-6 h-6" />
            </button>
            <button
              className="text-slate-500 hover:text-teal-500"
              onClick={() => setIsMenuOpen(true)}
            >
              <BurgerIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <LogoTransparent className="w-[80%] h-auto text-slate-300 opacity-20" />
          </div>

          {/* Close Button */}
          <div className="px-4 py-3 md:px-6 flex justify-end items-center w-full relative z-10">
            <div className="h-8 md:h-10 flex items-center">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-4 p-6 relative z-10">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-3xl font-medium text-slate-500 hover:text-teal-500 px-4 py-2 rounded-lg transition-all",
                    isActive &&
                      "bg-linear-to-l from-[#F6F7F9] to-white text-teal-500"
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
