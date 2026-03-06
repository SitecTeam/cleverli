import FadeInWrapper from "./fade-in-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ArrowDown from "../svgs/footer/arrow-down.svg?react";
import logoUrl from "../svgs/header/logo.svg?url";
import Mail from "../svgs/footer/mail.svg?react";
import Phone from "../svgs/footer/phone.svg?react";
import CleverliText from "../svgs/footer/cleverli.svg?react";
import MapPin from "../svgs/footer/pin.svg?react";

const Footer = () => {
  return (
    <FadeInWrapper
      className="relative flex items-end justify-center px-2 pb-24 lg:p-8 lg:pb-31.5"
      margin="-200px"
    >
      <div className="relative mx-auto w-full max-w-336">
        {/* Large background text - CLEVERLI */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[95%] -translate-x-1/2 translate-y-[65%] select-none lg:w-auto lg:translate-y-[72%]">
          <CleverliText className="h-auto w-full lg:h-41 lg:w-264.75" />
        </div>

        {/* White card with glass effect on overlap */}
        <div className="relative z-10 w-full">
          <div
            className="flex flex-col justify-center rounded-[10px] bg-[rgba(246,247,249,0.05)] p-6 text-ink-secondary backdrop-blur-[10px] lg:min-h-112.25 lg:p-14"
            style={{
              WebkitBackdropFilter: "blur(10px)",
              boxShadow:
                "5px 5px 7px 0px rgba(0, 0, 0, 0.1), 1px 1px 2px 0px rgba(0, 0, 0, 0.1), -2px -2px 2px 0px rgba(255, 255, 255, 0.8), -6px -6px 8px 0px rgba(255, 255, 255, 0.5)",
            }}
          >
            {/* Desktop Layout */}
            <div className="hidden grid-cols-1 gap-12 lg:grid lg:grid-cols-4">
              {/* Logo and Description */}
              <div className="space-y-1">
                <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-9">
                  <img
                    src={logoUrl}
                    alt="Cleverli Logo"
                    className="size-14 lg:size-25"
                  />
                  <p className="text-sm font-medium lg:text-lg">
                    We create full-service e-learning solutions tailored to your
                    needs, from concept to launch.
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/company/cleverlearninginterface/"
                  target="_blank"
                  className="text-xl font-bold text-[#FF9E58]"
                  rel="noreferrer"
                >
                  in
                </a>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-4 text-xl font-bold">Services</h3>
                <ul className="space-y-2 text-sm font-medium xl:text-base">
                  <li>Learning Strategy & Consulting</li>
                  <li>Custom E-Learning Development</li>
                  <li>Video Production & Animated Content</li>
                  <li>Graphic Design & Branding</li>
                  <li>Multilingual Content & Localization</li>
                  <li>Data Analysis, Research & Analytics</li>
                  <li>Full-Service E-Learning Outsourcing</li>
                </ul>
              </div>

              {/* Sectors */}
              <div>
                <h3 className="mb-4 text-xl font-bold">Sectors</h3>
                <ul className="space-y-2 text-sm font-medium xl:text-base">
                  <li>Healthcare & Pharmaceutical</li>
                  <li>Corporate & Enterprise</li>
                  <li>IT & Digital Services</li>
                  <li>Education & Academia</li>
                  <li>Finance, Banking & Insurance</li>
                  <li>Government & Public Sector</li>
                  <li>Legal & Regulatory</li>
                  <li>Energy & Industrial Operations</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 text-xl font-bold">Contact</h3>
                <ul className="space-y-3 text-sm font-medium xl:text-base">
                  <li className="flex items-center gap-3">
                    <Mail width={23} height={23} />
                    <span>info@cleverli.pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone width={20} height={21} className="mt-0.5" />
                    <div>
                      <div>+381 65 323 77 46</div>
                      <div>+387 65 371 839</div>
                      <div>+387 65 746 939</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin width={17} height={23} className="mt-0.5" />
                    <div>
                      Banja Luka, Bosnia
                      <br />
                      and Herzegovina
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Mobile Layout */}
            <div className="space-y-6 lg:hidden">
              {/* Logo and Description */}
              <div className="flex items-center gap-5">
                <img src={logoUrl} alt="Cleverli Logo" className="size-20" />
                <p className="text-sm leading-relaxed font-medium">
                  We create full-service e-learning solutions tailored to your
                  needs, from concept to launch.
                </p>
              </div>
              <span className="text-xl font-bold text-[#4E5C70]">in</span>

              {/* Accordion Sections */}
              <Accordion
                type="single"
                collapsible
                className="mt-7 w-full space-y-0 border-b border-[#515F73]"
              >
                {/* Services Accordion */}
                <AccordionItem
                  value="services"
                  className="border-t border-b border-[#515F73] font-medium text-ink-secondary"
                >
                  <AccordionTrigger className="py-1.5 text-base hover:no-underline [&>svg]:hidden [&[data-state=open]>div>svg]:rotate-180">
                    <div className="flex w-full items-center justify-between">
                      <span>Services</span>
                      <ArrowDown className="size-6 text-orange-500 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="mt-1.5 space-y-2 pb-4 text-xs">
                      <li>Learning Strategy & Consulting</li>
                      <li>Custom E-Learning Development</li>
                      <li>Video Production & Animated Content</li>
                      <li>Graphic Design & Branding</li>
                      <li>Multilingual Content & Localization</li>
                      <li>Data Analysis, Research & Analytics</li>
                      <li>Full-Service E-Learning Outsourcing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Sectors Accordion */}
                <AccordionItem
                  value="sectors"
                  className="border-b border-[#515F73] font-medium text-ink-secondary"
                >
                  <AccordionTrigger className="py-1.5 text-base hover:no-underline [&>svg]:hidden [&[data-state=open]>div>svg]:rotate-180">
                    <div className="flex w-full items-center justify-between">
                      <span>Sectors</span>
                      <ArrowDown className="size-6 text-orange-500 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="mt-1.5 space-y-2 pb-4 text-xs">
                      <li>Healthcare & Pharmaceutical</li>
                      <li>Corporate & Enterprise</li>
                      <li>IT & Digital Services</li>
                      <li>Education & Academia</li>
                      <li>Finance, Banking & Insurance</li>
                      <li>Government & Public Sector</li>
                      <li>Legal & Regulatory</li>
                      <li>Energy & Industrial Operations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Contact Accordion */}
                <AccordionItem
                  value="contact"
                  className="font-medium text-ink-secondary"
                >
                  <AccordionTrigger className="py-1.5 text-base hover:no-underline [&>svg]:hidden [&[data-state=open]>div>svg]:rotate-180">
                    <div className="flex w-full items-center justify-between">
                      <span>Contact</span>
                      <ArrowDown className="size-6 text-orange-500 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="mt-1.5 space-y-3 pb-4 text-xs">
                      <li className="flex items-center gap-3">
                        <Mail width={18} height={18} />
                        <span>info@cleverli.pro</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone width={18} height={18} className="mt-0.5" />
                        <div className="space-y-1">
                          <div>+381 65 323 77 46</div>
                          <div>+387 65 371 839</div>
                          <div>+387 65 746 939</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin width={18} height={18} className="mt-0.5" />
                        <div>
                          Banja Luka, Bosnia
                          <br />
                          and Herzegovina
                        </div>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Copyright footer */}
            <div className="border-[#515F73] pt-6 text-center text-xs font-medium lg:mt-8 lg:border-t lg:text-lg">
              @ 2025 Cleverli. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default Footer;
