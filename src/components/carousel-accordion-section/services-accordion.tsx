import { useState } from "react";
import { data } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import FadeInWrapper from "../fade-in-wrapper";

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
        {data.map((service) => (
          <AccordionItem
            key={service.id}
            value={`service${service.id}`}
            className="border rounded-lg shadow-sm"
          >
            <AccordionTrigger className="flex justify-start gap-0 py-0 items-stretch [&>svg]:hidden [&[data-state=open]_.custom-chevron]:-rotate-180 min-h-17.5 bg-transparent">
              <img
                src={service.src}
                alt={service.title}
                className="w-21 object-cover rounded-lg"
              />
              <div className="p-2.5 items-center flex justify-between w-full gap-2.5">
                <p className="text-base font-bold">{service.title}</p>
                <div className="bg-[#22272F] rounded-md flex items-center justify-center size-12.5 shrink-0">
                  <img
                    src="/src/svgs/accordion/chevron-down.svg"
                    alt="arrow-right"
                    className="custom-chevron transition-transform duration-300"
                  />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="p-3.5 mt-2.5 italic">{service.description}</p>
              <div className="border-t mx-2.5 border-[#2E3642] pt-3 space-y-1.5">
                {service.details.map((detail, index) => (
                  <div
                    key={index.toString().concat(detail)}
                    className="flex items-start gap-1.5"
                  >
                    <img
                      src="/src/svgs/accordion/details-cube.svg"
                      className="shrink-0 mt-1"
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
