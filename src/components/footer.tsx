import { Mail, MapPin, Phone } from "lucide-react";
import FadeInWrapper from "./fade-in-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ArrowDown from "../svgs/footer/arrow-down.svg?react";
import logoUrl from "../svgs/header/logo.svg?url";

const Footer = () => {
  return (
    <FadeInWrapper
      className="relative flex items-end justify-center p-8 text-slate-800"
      margin="-200px"
    >
      <div className="relative mx-auto w-full max-w-336">
        {/* Large background text - CLEVERLI */}
        <div className="pointer-events-none absolute top-full right-0 left-0 z-0 w-full -translate-y-[30%] overflow-hidden select-none lg:top-auto lg:-bottom-10 lg:translate-y-0 lg:overflow-visible">
          {/* Mobile/Tablet: SVG to match width exactly */}
          <div className="w-full lg:hidden">
            <svg
              viewBox="0 0 100 28"
              className="block h-auto w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="cleverli-gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0.96%" stopColor="#94A3B8" />
                  <stop offset="100.47%" stopColor="#475569" />
                </linearGradient>
              </defs>
              <text
                x="50"
                y="22"
                textAnchor="middle"
                fontWeight="bold"
                fill="url(#cleverli-gradient)"
                textLength="100"
                lengthAdjust="spacingAndGlyphs"
                style={{
                  fontSize: "28px",
                }}
              >
                CLEVERLI
              </text>
            </svg>
          </div>

          {/* Desktop: Original fixed size text */}
          <div
            className="absolute -bottom-24 left-1/2 hidden -translate-x-1/2 scale-x-[0.72] bg-clip-text text-center text-[200px] leading-none font-bold whitespace-nowrap text-transparent lg:block lg:scale-x-100"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #94A3B8 0.96%, #475569 100.47%)",
            }}
          >
            CLEVERLI
          </div>
        </div>

        {/* White card with glass effect on overlap */}
        <div className="relative z-10 w-full">
          <div className="rounded-3xl border border-white/40 bg-white/50 p-6 shadow-2xl backdrop-blur-sm lg:p-14">
            {/* Desktop Layout */}
            <div className="hidden grid-cols-1 gap-12 lg:grid lg:grid-cols-4">
              {/* Logo and Description */}
              <div className="space-y-1">
                <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-9">
                  <img
                    src={logoUrl}
                    alt="Cleverli Logo"
                    className="size-14 lg:size-auto"
                  />
                  <p className="text-sm leading-relaxed text-slate-600">
                    We create full-service e-learning solutions tailored to your
                    needs, from concept to launch.
                  </p>
                </div>
                <span className="text-xl font-bold">in</span>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Services
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
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
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Sectors
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
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
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Contact
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-slate-400" />
                    <span>info@cleverli.pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 text-slate-400" />
                    <div className="space-y-1">
                      <div>+381 65 323 77 46</div>
                      <div>+387 65 371 839</div>
                      <div>+387 65 746 939</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 text-slate-400" />
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
                <p className="text-sm leading-relaxed text-slate-600">
                  We create full-service e-learning solutions tailored to your
                  needs, from concept to launch.
                </p>
              </div>
              <span className="text-xl font-bold">in</span>

              {/* Accordion Sections */}
              <Accordion type="single" collapsible className="w-full space-y-0">
                {/* Services Accordion */}
                <AccordionItem
                  value="services"
                  className="border-b border-slate-200"
                >
                  <AccordionTrigger className="py-4 text-lg font-bold text-slate-900 hover:no-underline [&>svg]:hidden [&[data-state=open]>div>svg]:rotate-180">
                    <div className="flex w-full items-center justify-between">
                      <span>Services</span>
                      <ArrowDown className="size-6 text-orange-500 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pb-4 text-sm text-slate-600">
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
                  className="border-b border-slate-200"
                >
                  <AccordionTrigger className="py-4 text-lg font-bold text-slate-900 hover:no-underline [&>svg]:hidden [&[data-state=open]>div>svg]:rotate-180">
                    <div className="flex w-full items-center justify-between">
                      <span>Sectors</span>
                      <ArrowDown className="size-6 text-orange-500 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pb-4 text-sm text-slate-600">
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
                  className="border-b border-slate-200"
                >
                  <AccordionTrigger className="py-4 text-lg font-bold text-slate-900 hover:no-underline [&>svg]:hidden [&[data-state=open]>div>svg]:rotate-180">
                    <div className="flex w-full items-center justify-between">
                      <span>Contact</span>
                      <ArrowDown className="size-6 text-orange-500 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pb-4 text-sm text-slate-600">
                      <li className="flex items-center gap-3">
                        <Mail size={18} className="text-slate-400" />
                        <span>info@cleverli.pro</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone size={18} className="mt-0.5 text-slate-400" />
                        <div className="space-y-1">
                          <div>+381 65 323 77 46</div>
                          <div>+387 65 371 839</div>
                          <div>+387 65 746 939</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin size={18} className="mt-0.5 text-slate-400" />
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
            <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-600">
              @ 2025 Cleverli. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
};

export default Footer;
