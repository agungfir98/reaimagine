import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const cn = (...inputvalue: ClassValue[]) => {
	return twMerge(clsx(...inputvalue));
};
