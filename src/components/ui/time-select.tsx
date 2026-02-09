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
  dark: "border-white text-white md:text-sm",
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
  enableKeyboardNavigation?: boolean;
}

const TimeSelect = ({
  value,
  onChange,
  placeholder = "Preferred Time",
  className,
  variant = "dark",
  enableKeyboardNavigation = true,
}: TimeSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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

  const focusItemAtIndex = useCallback((index: number) => {
    if (!listRef.current) {
      return;
    }
    const item = listRef.current.querySelector<HTMLElement>(
      `[data-time-index="${index}"]`
    );
    item?.focus();
  }, []);

  const handleListKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLUListElement>) => {
      if (!enableKeyboardNavigation) {
        return;
      }

      const lastIndex = timeOptions.length - 1;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex(prev => {
          const nextIndex = prev >= lastIndex ? 0 : prev + 1;
          focusItemAtIndex(nextIndex);
          return nextIndex;
        });
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex(prev => {
          const nextIndex = prev <= 0 ? lastIndex : prev - 1;
          focusItemAtIndex(nextIndex);
          return nextIndex;
        });
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        setActiveIndex(0);
        focusItemAtIndex(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        setActiveIndex(lastIndex);
        focusItemAtIndex(lastIndex);
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const time = timeOptions[activeIndex];
        if (time) {
          handleSelect(time);
        }
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    },
    [activeIndex, enableKeyboardNavigation, focusItemAtIndex, handleSelect]
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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const preventScroll = (event: Event) => {
      if (dropdownRef.current?.contains(event.target as Node)) {
        return;
      }
      event.preventDefault();
    };

    const preventScrollKeys = (event: KeyboardEvent) => {
      if (
        enableKeyboardNavigation &&
        containerRef.current?.contains(event.target as Node)
      ) {
        return;
      }
      const blockedKeys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];
      if (blockedKeys.includes(event.key)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScrollKeys);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScrollKeys);
    };
  }, [enableKeyboardNavigation, isOpen]);

  useEffect(() => {
    if (!isOpen || !enableKeyboardNavigation) {
      return;
    }

    const selectedIndex = value
      ? timeOptions.findIndex(time => time === value)
      : -1;
    const nextIndex = selectedIndex >= 0 ? selectedIndex : 0;
    setActiveIndex(nextIndex);

    const focusTimer = window.setTimeout(() => {
      focusItemAtIndex(nextIndex);
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
    };
  }, [enableKeyboardNavigation, focusItemAtIndex, isOpen, value]);

  return (
    <div ref={containerRef} className="relative" data-slot="time-select">
      <Button
        ref={triggerRef}
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
          ref={dropdownRef}
          className={cn(
            "absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md",
            contentVariants[variant]
          )}
        >
          <ScrollArea className="h-40 max-h-40 w-full">
            <ul
              ref={listRef}
              className="p-0"
              role="listbox"
              onKeyDown={handleListKeyDown}
              aria-activedescendant={
                enableKeyboardNavigation
                  ? `time-select-option-${activeIndex}`
                  : undefined
              }
            >
              {timeOptions.map((time, index) => (
                <li
                  key={time}
                  id={`time-select-option-${index}`}
                  data-time-index={index}
                  role="option"
                  tabIndex={enableKeyboardNavigation ? 0 : -1}
                  aria-selected={value === time}
                  onClick={() => handleSelect(time)}
                  onMouseEnter={() => {
                    if (!enableKeyboardNavigation) {
                      return;
                    }
                    setActiveIndex(index);
                  }}
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
