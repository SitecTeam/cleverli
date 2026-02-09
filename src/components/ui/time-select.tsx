import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const timeOptions: string[] = [];

for (let hour = 8; hour <= 16; hour++) {
  timeOptions.push(`${hour}:00`);
  if (hour < 16) {
    timeOptions.push(`${hour}:30`);
  }
}

interface TimeSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const TimeSelect = ({
  value,
  onChange,
  placeholder = "Preferred Time",
  className,
}: TimeSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange} data-slot="time-select">
      <SelectTrigger
        className={cn(
          "flex h-auto w-full cursor-pointer rounded-none border-0 border-b border-white bg-transparent px-0 py-2 text-base text-white shadow-none transition-colors select-none focus:ring-0 focus-visible:border-orange-400 focus-visible:ring-0 focus-visible:outline-none data-placeholder:text-[#8596AB] md:text-sm [&>svg]:hidden",
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        position="popper"
        className="max-h-48 border-white/10 bg-[#2a3444] p-0 data-[state=closed]:animate-none data-[state=open]:animate-none"
      >
        {timeOptions.map(time => (
          <SelectItem
            key={time}
            value={time}
            className="cursor-pointer px-3 py-2 text-sm text-white transition-colors hover:bg-orange-400/90 hover:text-white focus:bg-orange-400 focus:text-white data-[state=checked]:bg-orange-400 data-[state=checked]:text-white [&>span:first-child]:hidden"
          >
            {time}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { TimeSelect };
