import Logo from "./logo";
import TransparentLogo from "../../svgs/logo/transparent-logo.svg?url";
import FadeInWrapper from "../fade-in-wrapper";
import type { LogoItemData } from "@/lib/types";

const LogoSection = ({ data }: { data: LogoItemData[] }) => {
  return (
    <>
      <Logo />
      <FadeInWrapper className="relative lg:hidden">
        <img
          src={TransparentLogo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[3px]"
        />
        <div className="relative z-10 grid grid-cols-1 justify-items-center gap-1 sm:grid-cols-2 sm:justify-items-start">
          {data.map(logo => (
            <div key={logo.id} className="flex items-center gap-3">
              <img src={logo.icon} alt={logo.title} />
              <p className="font-bold">{logo.title}</p>
            </div>
          ))}
        </div>
      </FadeInWrapper>
    </>
  );
};

export default LogoSection;
