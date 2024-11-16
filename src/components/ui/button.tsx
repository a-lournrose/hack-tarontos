import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-orange text-primary-foreground hover:bg-orange/90 font-arial font-normal text-sm rounded-[30px] px-[18px] py-[64px]",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-orange text-orange hover:text-white hover:bg-orange/90 font-arial font-normal text-sm rounded-[30px] px-[18px] py-[64px]",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "text-black hover:text-orange font-arial font-normal text-sm px-[13px] py-[18px]",
                link: "text-primary underline-offset-4 hover:underline",
                outlineDark: "border border-[#F1F5F9] border-[3px] text-black hover:text-white hover:bg-black/90 font-arial font-normal text-sm",
                dark: "bg-darkBlue text-white hover:bg-darkBlue/90 hover:text-white font-arial font-normal text-sm px-[22px] py-[16px] rounded-[16px]",
            },
            size: {
                default: "px-[64px] py-[19px]",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, asChild = false, ...props}, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({variant, size, className}))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export {Button, buttonVariants}
