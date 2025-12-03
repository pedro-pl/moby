import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import ModalContext from "../../../contexts/ModalContext";

type ModalProps = {
	children: React.ReactNode;
	component: React.ReactNode;
};

export function ModalTrigger({ children, component }: ModalProps) {
	const [open, setOpen] = useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<ModalContext.Provider value={{ onClose: () => setOpen(false) }}>
				<Dialog.Portal>{component}</Dialog.Portal>
			</ModalContext.Provider>
		</Dialog.Root>
	);
}
