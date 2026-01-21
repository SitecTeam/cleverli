import FadeInWrapper from "./fade-in-wrapper";
import goingDigitalImage from "@/images/going-digital.png";

const LOGO_PATH =
  "M235.605 22.7431C238.379 22.6516 240.672 24.9672 240.672 27.7646V100.041H312.845C315.62 100.041 317.866 102.288 317.867 105.062V145.65C317.867 154.157 321.444 162.252 327.727 167.984L358.913 196.465C367.374 204.192 378.404 208.457 389.846 208.457H431.557C434.332 208.457 436.578 210.704 436.579 213.478V280.78C436.579 283.555 434.332 285.803 431.557 285.803H389.732C378.312 285.803 367.283 290.068 358.844 297.772L327.75 326.092C321.467 331.824 317.867 339.942 317.867 348.449V388.944C317.867 391.719 315.62 393.966 312.845 393.966H240.672V466.497C240.672 469.294 238.402 471.564 235.605 471.518C159.98 469.845 93.5037 430.587 54.063 371.725C30.1693 336.067 16.2271 293.21 16.2271 247.143C16.2271 201.098 30.1463 158.263 54.0171 122.583L54.063 122.537C93.4808 63.6742 159.98 24.417 235.605 22.7431ZM240.522 100.386C183.992 100.443 134.849 132.623 110.38 179.635C99.8782 199.859 93.939 222.813 93.939 247.119C93.939 271.448 99.8781 294.425 110.38 314.604C134.849 361.616 184.015 393.772 240.522 393.829V321.643C240.522 318.868 242.769 316.621 245.543 316.621H293.423C300.967 316.621 308.236 313.801 313.808 308.733L344.26 280.987C353.799 272.297 359.234 259.982 359.234 247.072C359.257 234.185 353.822 221.895 344.306 213.204L313.74 185.274C308.168 180.184 300.876 177.363 293.332 177.363H245.543C242.769 177.363 240.522 175.116 240.522 172.342V100.386ZM360.056 14.8661C361.84 13.0826 364.743 13.0664 366.542 14.8661L409.218 57.5419C411.018 59.3417 411.002 62.2447 409.218 64.0283L366.542 106.704C364.743 108.504 361.84 108.488 360.056 106.704L317.38 64.0283C315.581 62.2285 315.597 59.3255 317.38 57.5419L360.056 14.8661Z";

const GlassLogo = ({
  className,
  gradientId = "borderGradient",
}: {
  className?: string;
  gradientId?: string;
}) => {
  const maskUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 453 488' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${LOGO_PATH}' fill='black'/%3E%3C/svg%3E")`;

  return (
    <div className={`relative ${className}`}>
      {/* Glass Blur Layer (Masked) */}
      <div
        className="absolute inset-0 z-10 backdrop-blur-[2px]"
        style={{
          mask: `${maskUrl} center/contain no-repeat`,
          WebkitMask: `${maskUrl} center/contain no-repeat`,
        }}
      >
        <div className="h-full w-full bg-linear-to-br from-white/10 to-transparent" />
      </div>

      {/* Border / Rim Layer */}
      <svg
        viewBox="0 0 453 488"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full drop-shadow-2xl"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d={LOGO_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

const GoingDigitalSection = () => {
  return (
    <FadeInWrapper className="w-full">
      <section className="relative w-full py-6 md:py-12 lg:py-28">
        {/* Main Card Container */}
        <div className="relative isolate mx-auto flex w-full flex-col rounded-3xl bg-gray-50 lg:flex lg:min-h-145.75 lg:max-w-336.25 lg:flex-row lg:bg-transparent">
          {/* == MOBILE & TABLET: Image Area (Top) == */}
          {/* This block is visible on mobile/tablet (relative flow), but transforms into the 'breaking out' absolute element on desktop */}
          <div className="relative h-75 w-full shrink-0 overflow-hidden rounded-t-3xl md:h-100 lg:absolute lg:-inset-y-17.5 lg:right-11 lg:left-[48%] lg:h-auto lg:w-auto lg:overflow-visible lg:rounded-[2.5rem] lg:bg-transparent">
            <img
              src={goingDigitalImage.src}
              alt="Team collaborating"
              className="h-full w-full object-cover lg:rounded-[2.5rem] lg:shadow-xl"
            />
            {/* Mobile/Tablet Logo Overlay - Centered on the image */}
            <div className="absolute inset-0 flex items-center justify-center lg:hidden">
              <GlassLogo
                className="h-[60%] w-[60%] md:h-[50%] md:w-[50%]"
                gradientId="borderGradientMobile"
              />
            </div>
          </div>

          {/* Fading Gradient Border Layer */}
          <div
            className="pointer-events-none absolute inset-0 z-20 rounded-3xl"
            style={{
              maskImage:
                "linear-gradient(135deg, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(135deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl p-px"
              style={{
                background:
                  "linear-gradient(to bottom right, #F6F7F9, #394453, #F6F7F9)",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
              }}
            />
          </div>

          {/* == Content Layer == */}
          {/* Note: In flex layout (desktop), this one layer contains both columns. It must grow to fill the container. */}
          <div className="relative z-10 flex flex-col p-6 lg:w-full lg:flex-row lg:items-center lg:gap-12 lg:p-10">
            {/* Text Content */}
            {/* Mobile: Order 2 (after image). Desktop: Left side. */}
            <div className="flex flex-1 flex-col justify-center lg:max-w-[46%]">
              <h2 className="font-frutiger mb-6 text-2xl leading-tight font-bold text-slate-800 lg:order-last lg:mt-10 lg:mb-0 lg:text-4xl">
                Going digital? Do it{" "}
                <span className="text-[#2CB5B5]">Cleverli!</span>
              </h2>

              <p className="font-hind text-sm leading-relaxed text-slate-700 lg:text-lg">
                Cleverli was founded in 2021 with a simple idea: to bring
                together years of expertise in education, research, content
                creation, data analytics, data visualization and design and turn
                it into meaningful, effective digital learning experiences.
              </p>

              <p className="font-hind mt-4 text-sm leading-relaxed text-slate-700 lg:mt-6 lg:text-lg">
                Today, we're a full-service e-learning agency more than 150
                completed projects (200+ created modules) behind us, helping
                clients from universities, private companies, NGOs, healthcare
                institutions, and international organizations deliver engaging
                and impactful learning.
              </p>
            </div>

            {/* Desktop Logo Spacer - This takes up the space on the right where the image/logo will float visually */}
            <div className="hidden flex-1 items-center justify-center lg:flex lg:h-full">
              <div className="relative flex h-full w-full items-center justify-center">
                <GlassLogo
                  className="h-[80%] w-[80%]"
                  gradientId="borderGradientDesktop"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInWrapper>
  );
};

export default GoingDigitalSection;
