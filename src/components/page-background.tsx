import cubesMainLeftUrl from "@/svgs/cubes/cubes-main-left.svg?url";
import cubesMobile1Url from "@/svgs/cubes/cubes-mobile-1.svg?url";
import cubesMobile2Url from "@/svgs/cubes/cubes-mobile-2.svg?url";
import cubesMobile3Url from "@/svgs/cubes/cubes-mobile-3.svg?url";
import cubesMobile4Url from "@/svgs/cubes/cubes-mobile-4.svg?url";
import FadeInWrapper from "./fade-in-wrapper";

const PageBackground = () => {
  return (
    <>
      {/* Mobile Background (< md) */}
      <FadeInWrapper
        className="pointer-events-none absolute inset-0 -top-40 -z-10 flex flex-col items-center justify-start overflow-hidden md:hidden"
        margin="0px"
        yOffset={-100}
        initialScale={1}
      >
        <img
          src={cubesMobile1Url}
          alt=""
          className="block w-full max-w-none min-w-150"
        />
        <img
          src={cubesMobile2Url}
          alt=""
          className="block w-full max-w-none min-w-150"
        />
        <img
          src={cubesMobile3Url}
          alt=""
          className="block w-full max-w-none min-w-150"
        />
        <img
          src={cubesMobile4Url}
          alt=""
          className="block w-full max-w-none min-w-150"
        />
      </FadeInWrapper>
      {/* Tablet background (md to lg) - Full width */}
      <FadeInWrapper
        className="pointer-events-none absolute top-0 left-0 -z-10 hidden w-full justify-center md:flex lg:hidden"
        margin="0px"
        yOffset={-100}
        initialScale={1}
      >
        <img src={cubesMainLeftUrl} alt="" className="w-full" />
      </FadeInWrapper>
      {/* Desktop background (lg+) - 1440px layout aligned */}
      <div className="pointer-events-none absolute top-0 left-0 -z-10 hidden w-full justify-center lg:flex">
        <FadeInWrapper
          className="relative flex w-full max-w-360 justify-end"
          margin="0px"
          yOffset={-100}
          initialScale={1}
        >
          <img
            src={cubesMainLeftUrl}
            alt=""
            className="block w-full max-w-none lg:w-360"
          />
        </FadeInWrapper>
      </div>
    </>
  );
};

export default PageBackground;
