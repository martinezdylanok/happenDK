import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

//Modify these properties values to match index.css custom values
const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-focus focus-visible:ring-focus/50 focus-visible:ring-[3px] aria-invalid:ring-status-error/20 dark:aria-invalid:ring-status-error/40 aria-invalid:border-status-error",
	{
		variants: {
			variant: {
				default: "bg-body text-page hover:bg-body/75",
				destructive:
					"bg-status-error text-body hover:bg-status-error/90 focus-visible:ring-status-error/20 dark:focus-visible:ring-status-error/40 dark:bg-status-error/60",
				outline:
					"border border-default bg-page shadow-xs hover:bg-card-hover hover:text-body dark:bg-card/30 dark:border-default dark:hover:bg-card/50",
				secondary: "bg-section text-body hover:bg-section/80",
				ghost:
					"hover:bg-card-hover hover:text-body dark:hover:bg-card-hover/50",
				link: "text-accent underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
