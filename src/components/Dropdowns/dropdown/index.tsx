import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";
import {
	StyledArrow,
	StyledItem,
	StyledMenuContent,
	StyledSeparator,
} from "./styles";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuContent = StyledMenuContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownArrow = StyledArrow;

type DropdowntriggerProps = React.ComponentProps<typeof DropdownMenuTrigger> & {
	component: ReactNode;
};

export function DropdownContent({
	children,
	...props
}: DropdownMenuPrimitive.DropdownMenuContentProps) {
	return (
		<DropdownMenuContent {...props}>
			{children}
			<DropdownArrow width={15} height={6} />
		</DropdownMenuContent>
	);
}

export function DropdownTrigger({
	children,
	component,
	...props
}: DropdowntriggerProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger {...props} asChild>
				{children}
			</DropdownMenuTrigger>
			{component}
		</DropdownMenu>
	);
}
