import { useState } from "react";
import { data } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import FadeInWrapper from "../fade-in-wrapper";
import chevronDownUrl from "../../svgs/accordion/chevron-down.svg?url";
import detailsCubeUrl from "../../svgs/accordion/details-cube.svg?url";

const ServicesAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FadeInWrapper>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        onChange={handleToggle}
      >
        {data.map(service => (
          <AccordionItem
            key={service.id}
            value={`service${service.id}`}
            className="rounded-lg border shadow-sm"
          >
            <AccordionTrigger className="flex min-h-17.5 items-stretch justify-start gap-0 bg-transparent py-0 [&>svg]:hidden [&[data-state=open]_.custom-chevron]:-rotate-180">
              <div className="flex w-21 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-linear-to-t from-[#B0BBC9] to-[#D5DBE2]">
                <img
                  src={service.src}
                  alt={service.title}
                  className="object-contain"
                />
              </div>
              <div className="flex w-full items-center justify-between gap-2.5 p-2.5">
                <p className="text-base font-bold">{service.title}</p>
                <div className="flex size-12.5 shrink-0 items-center justify-center rounded-md bg-[#22272F]">
                  <img
                    src={chevronDownUrl}
                    alt="arrow-right"
                    className="custom-chevron transition-transform duration-300"
                  />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mt-2.5 p-3.5 italic">{service.description}</p>
              <div className="mx-2.5 space-y-1.5 border-t border-[#2E3642] pt-3">
                {service.details.map((detail, index) => (
                  <div
                    key={index.toString().concat(detail)}
                    className="flex items-start gap-1.5"
                  >
                    <img
                      src={detailsCubeUrl}
                      className="mt-1 shrink-0"
                      alt="detail-icon"
                    />
                    <span className="font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FadeInWrapper>
  );
};

export default ServicesAccordion;
