import emailIconUrl from "../../svgs/form/email.svg?url";
import phoneIconUrl from "../../svgs/form/phone.svg?url";
import locationIconUrl from "../../svgs/form/location.svg?url";
import linkedInIconUrl from "../../svgs/form/linked-in.svg?url";
import GetInTouchForm from "./get-in-touch-form";
import FadeInWrapper from "../fade-in-wrapper";

const GetInTouchSection = () => {
  return (
    <FadeInWrapper className="relative left-1/2 flex h-full w-screen -translate-x-1/2 flex-col items-start bg-linear-to-t from-[#22272F] to-[#394453] text-white lg:min-h-155 lg:py-12">
      <div className="mx-auto flex w-full max-w-360 flex-1 flex-col items-stretch gap-10 px-7.5 pt-5 pb-10 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:py-0 xl:px-18 2xl:gap-25 2xl:px-21">
        <div className="flex-1 space-y-6 lg:space-y-4 2xl:flex-none">
          <h2 className="text-center text-4xl font-bold lg:mt-4 lg:text-start lg:text-5xl">
            Get in Touch
          </h2>
          <p className="italic sm:text-xl lg:px-0 2xl:w-120">
            Have questions about our services or ready to start your e-learning
            journey? We’re here to help you transform your learning experience.
          </p>
          <div className="space-y-3.5 pl-3 sm:text-xl lg:space-y-2 lg:px-0">
            <div className="flex gap-8">
              <div className="h-10.5 w-7.5 sm:h-auto sm:w-auto">
                <img src={emailIconUrl} alt="Email" />
              </div>
              <div className="flex flex-col sm:gap-1.5">
                <span className="text-sm text-[#8596AB] sm:text-xl">Email</span>
                <span className="text-sm font-medium sm:text-xl">
                  info@cleverli.pro
                </span>
              </div>
            </div>
            <div className="flex gap-8 lg:mt-4">
              <div className="mt-3 h-11 w-8 sm:mt-0 sm:h-auto sm:w-auto">
                <img src={phoneIconUrl} alt="Phone" />
              </div>
              <div className="flex flex-col justify-center sm:gap-1.5">
                <span className="text-sm text-[#8596AB] sm:text-xl lg:-mt-2">
                  Phone
                </span>
                <div className="gap-0.2 flex flex-col text-sm leading-tight font-medium sm:text-xl">
                  <span>+381 65 323 77 46</span>
                  <span>+387 65 371 839</span>
                  <span>+387 65 746 939</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="h-12 w-9 sm:h-auto sm:w-auto">
                <img src={locationIconUrl} alt="Location" />
              </div>
              <div className="flex flex-col justify-center sm:gap-1.5">
                <span className="text-sm text-[#8596AB] sm:text-xl">
                  Location
                </span>
                <span className="text-sm font-medium sm:text-xl">
                  Banja Luka, Bosnia and Herzegovina
                </span>
              </div>
            </div>
            <div className="w-fit">
              <a
                href="https://www.linkedin.com/company/cleverlearninginterface/"
                target="_blank"
              >
                <img
                  src={linkedInIconUrl}
                  alt="LinkedIn"
                  className="lg:mt-7.5 lg:px-0"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 xl:ml-14">
          <GetInTouchForm />
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default GetInTouchSection;
