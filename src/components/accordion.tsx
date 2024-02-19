import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import type {
	AccordionContentProps,
	AccordionTriggerProps,
} from "@radix-ui/react-accordion";
import { cn } from "@/lib/className";

export const AccordionTrigger = React.forwardRef<any, AccordionTriggerProps>(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header>
			<Accordion.Trigger
				className={cn(className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
			</Accordion.Trigger>
		</Accordion.Header>
	)
);

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<any, AccordionContentProps>(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content className={cn(className)} {...props} ref={forwardedRef}>
			<div>{children}</div>
		</Accordion.Content>
	)
);

AccordionContent.displayName = "AccordionContent";
