import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/className";

const inputVariance = cva("outline outline-slate-400 outline-1 w-full", {
	variants: {
		size: {
			sm: "px-2 py-3",
			md: "px-3 py-4",
			lg: "px-",
		},
		rounded: {
			none: "",
			sm: "rounded-sm",
			md: "rounded-md",
		},
	},
	defaultVariants: {
		size: "sm",
		rounded: "none",
	},
});

type InputProps = {} & Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"size"
> &
	VariantProps<typeof inputVariance>;

const Input: React.FC<InputProps> = ({
	size,
	rounded,
	className,
	...props
}) => {
	return (
		<input
			className={cn(inputVariance({ className, size, rounded }), className)}
			{...props}
		/>
	);
};

export default Input;
