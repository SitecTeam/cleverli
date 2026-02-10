import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-20 w-full resize-none rounded-none border-0 border-b border-white bg-transparent px-0 py-2 text-base text-white shadow-sm placeholder:text-[#8596AB] focus-visible:border-orange-400 focus-visible:ring-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "[scrollbar-color:var(--color-border)_transparent] [scrollbar-width:thin]",
        "[&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
