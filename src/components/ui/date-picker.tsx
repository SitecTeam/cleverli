import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalendarIcon from "../../svgs/form/calendar.svg?react";

export type DatePickerProps = {
  id?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  disabled?: (date: Date) => boolean;
  defaultMonth?: Date;
  placeholder?: string;
  className?: string;
};

const DatePicker = ({
  id,
  value,
  disabled,
  onChange,
  defaultMonth,
  placeholder = "Preferred Date",
  className,
}: DatePickerProps) => {
  const [open, setOpen] = React.useState(false);
  const [currentMonth, setCurrentMonth] = React.useState<Date | undefined>(
    value ?? defaultMonth ?? new Date()
  );

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      onChange?.(
        new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      );
    } else {
      onChange?.(undefined);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          type="button"
          variant="ghost"
          className={cn(
            "flex h-auto w-full justify-start rounded-none border-0 border-b border-white bg-transparent px-0 py-2 text-base font-normal shadow-sm transition-colors hover:bg-transparent focus-visible:border-orange-400 focus-visible:ring-0 focus-visible:outline-none md:text-sm",
            !value && "text-[#8596AB]",
            className
          )}
        >
          <span className="flex-1 text-left">
            {value ? format(value, "dd/MM/yyyy") : placeholder}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleDateSelect}
          className="rounded-md border bg-[#2E3642] text-white"
          disabled={disabled}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          defaultMonth={defaultMonth}
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
