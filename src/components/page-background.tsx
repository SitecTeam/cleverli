import cubesMainLeftUrl from "@/svgs/cubes/cubes-main-left.svg?url";
import cubesMobile1Url from "@/svgs/cubes/cubes-mobile-1.svg?url";
import cubesMobile2Url from "@/svgs/cubes/cubes-mobile-2.svg?url";
import cubesMobile3Url from "@/svgs/cubes/cubes-mobile-3.svg?url";
import cubesMobile4Url from "@/svgs/cubes/cubes-mobile-4.svg?url";

const PageBackground = () => {
  return (
    <>
      {/* Mobile Background (< md) */}
      <div className="pointer-events-none absolute inset-0 -top-40 -z-10 flex flex-col items-center justify-start overflow-hidden md:hidden">
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
      </div>

      {/* Tablet background (md to lg) - Full width */}
      <div className="pointer-events-none absolute top-0 left-0 -z-10 hidden w-full justify-center md:flex lg:hidden">
        <img src={cubesMainLeftUrl} alt="" className="w-full" />
      </div>

      {/* Desktop background (lg+) - 1440px layout aligned */}
      <div className="pointer-events-none absolute top-0 left-0 -z-10 hidden w-full justify-center lg:flex">
        <div className="relative w-full max-w-360">
          <img
            src={cubesMainLeftUrl}
            alt=""
            className="absolute top-0 right-0 w-full max-w-none lg:w-360"
          />
        </div>
      </div>
    </>
  );
};

export default PageBackground;
