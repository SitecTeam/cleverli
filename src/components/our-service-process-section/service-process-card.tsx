import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

interface ServiceProcessCardProps {
  title: string;
  description: React.ReactNode;
  icon: string;
  index: number;
}

const ServiceProcessCard = ({
  title,
  description,
  icon,
  index,
}: ServiceProcessCardProps) => {
  return (
    <Card
      className="min-h-68 bg-white/20 pt-2"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <CardContent className="flex flex-col px-2">
        <div className="relative flex flex-col items-center justify-center sm:flex-row sm:items-start">
          <div className="h-22">
            <img
              src={icon}
              alt={title}
              className="absolute -top-6 left-[37%] hidden h-28 sm:block"
            />
          </div>

          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-clip-text text-8xl font-bold sm:-top-1 sm:right-auto sm:left-5 sm:text-[4rem]"
            arian-hidden="true"
          >
            {index}
          </div>
          <div
            className={cn(
              "absolute -top-3 left-1/2 bg-clip-text text-8xl font-bold text-black/10 sm:-top-1 sm:right-0 sm:translate-x-0 sm:text-[4rem]",
              index === 1
                ? "-translate-x-3.5 sm:left-3"
                : index === 4
                  ? "-translate-x-5.5 sm:left-1.5"
                  : "-translate-x-4.5 sm:left-2"
            )}
            arian-hidden="true"
            style={{
              WebkitTextStroke: "0.5px white",
            }}
          >
            {index}
          </div>
          <div
            className={cn(
              "absolute -top-3 left-1/2 text-8xl font-bold text-transparent sm:-top-1 sm:right-0 sm:translate-x-0 sm:text-[4rem]",
              index === 1
                ? "-translate-x-3.5 sm:left-3"
                : index === 4
                  ? "-translate-x-5.5 sm:left-1.5"
                  : "-translate-x-4.5 sm:left-2"
            )}
            arian-hidden="true"
            style={{
              backdropFilter: "blur(3px)",
              WebkitMask: "linear-gradient(#000 0 0) text",
              mask: "linear-gradient(#000 0 0) text",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          >
            {index}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={icon}
              alt={title}
              className="absolute -left-12 h-20 min-[320px]:-left-14 sm:hidden"
            />
            <h3 className="max-w-40 text-center text-xl font-bold sm:mt-2 sm:max-w-none">
              {title}
            </h3>
          </div>
        </div>
        <p className="mt-6 px-7 text-center text-pretty text-[#2E3642] sm:mt-4 sm:px-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceProcessCard;
