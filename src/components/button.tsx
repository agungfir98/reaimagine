import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../lib/className";

const buttonVariance = cva("flex justify-center items-center gap-2", {
	variants: {
		variant: {
			default: "bg-white text-black",
			success: ["bg-green-400 text-white"],
			primary: ["bg-[#0f6eac] text-white"],
			warning: ["bg-orange-400 text-white"],
			danger: ["bg-red-400"],
		},
		size: {
			"1": ["px-2 py-1"],
			"2": ["px-3 py-2"],
			"3": ["px-4 py-4"],
		},
	},
	defaultVariants: {
		variant: "default",
		size: "1",
	},
});

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariance> {
	isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	size,
	variant,
	className,
	isLoading,
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(buttonVariance({ size, variant, className }), className)}
		>
			{children}
		</button>
	);
};

export default Button;
