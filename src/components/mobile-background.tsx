import cubesMobile1Url from "@/svgs/cubes/cubes-mobile-1.svg?url";
import cubesMobile2Url from "@/svgs/cubes/cubes-mobile-2.svg?url";
import cubesMobile3Url from "@/svgs/cubes/cubes-mobile-3.svg?url";
import cubesMobile4Url from "@/svgs/cubes/cubes-mobile-4.svg?url";

const MobileBackground = () => {
  return (
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
  );
};

export default MobileBackground;
