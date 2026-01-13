import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-20 w-full border-0 border-b border-white rounded-none bg-transparent px-0 py-2 text-base text-white shadow-sm placeholder:text-[#8596AB] focus-visible:outline-none focus-visible:ring-0 focus-visible:border-orange-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
