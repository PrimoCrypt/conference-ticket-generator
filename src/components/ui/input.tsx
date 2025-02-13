import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full font-regular rounded-xl border border-[#07373F] bg-transparent px-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-[3px] box-border focus-visible:border-[#24A0B580] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dummy:border-slate-800 dummy:file:text-slate-50 dummy:placeholder:text-slate-400 dummy:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
