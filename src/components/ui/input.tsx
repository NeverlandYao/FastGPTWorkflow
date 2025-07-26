import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm",
        "placeholder:text-gray-500 transition-all duration-200 outline-none",
        "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
        "hover:border-gray-300",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Input }
