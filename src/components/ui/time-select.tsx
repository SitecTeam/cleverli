import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";

const timeOptions: string[] = [];

for (let hour = 8; hour <= 16; hour++) {
  timeOptions.push(`${hour}:00`);
  if (hour < 16) {
    timeOptions.push(`${hour}:30`);
  }
}

const triggerVariants = {
  dark: "border-white text-white text-sm",
  light: "border-slate-800 pr-9 text-sm md:text-xl",
};

const placeholderVariants = {
  dark: "text-[#8596AB]",
  light: "text-slate-800",
};

const contentVariants = {
  dark: "border-white/10 bg-[#2a3444]",
  light: "border-slate-200 bg-white",
};

const itemVariants = {
  dark: "text-white",
  light: "text-slate-800",
};

interface TimeSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  variant?: "dark" | "light";
}

const TimeSelect = ({
  value,
  onChange,
  placeholder = "Preferred Time",
  className,
  variant = "dark",
}: TimeSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleSelect = useCallback(
    (time: string) => {
      onChange?.(time);
      setIsOpen(false);
    },
    [onChange]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative" data-slot="time-select">
      <Button
        type="button"
        onClick={handleToggle}
        className={cn(
          "flex h-auto w-full cursor-pointer items-start justify-start rounded-none border-0 border-b bg-transparent px-0 py-2 text-left text-base font-normal shadow-none transition-colors select-none hover:bg-transparent focus:ring-0 focus-visible:border-orange-400 focus-visible:ring-0 focus-visible:outline-none active:bg-transparent",
          triggerVariants[variant],
          className
        )}
      >
        <span className={cn(!value && placeholderVariants[variant])}>
          {value || placeholder}
        </span>
      </Button>
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md",
            contentVariants[variant]
          )}
        >
          <ScrollArea className="h-40 max-h-40 w-full">
            <ul className="p-0">
              {timeOptions.map(time => (
                <li
                  key={time}
                  onClick={() => handleSelect(time)}
                  className={cn(
                    "cursor-pointer px-3 py-2 text-sm transition-colors hover:bg-orange-400/90 hover:text-white",
                    value === time && "bg-orange-400 text-white",
                    value !== time && itemVariants[variant]
                  )}
                >
                  {time}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export { TimeSelect };
