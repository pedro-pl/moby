import { GoPerson } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import {
	DropdownContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "../dropdown";

export function DropdownMenuProfile() {
	const navigate = useNavigate();

	return (
		<DropdownContent sideOffset={2} align="end">
			<DropdownMenuItem onClick={() => navigate("/")}>
				<GoPerson />
				Perfil
			</DropdownMenuItem>

			<DropdownMenuItem onClick={() => navigate("/")}>
				<IoSettingsOutline />
				Configurações
			</DropdownMenuItem>

			<DropdownMenuSeparator />

			<DropdownMenuItem exit onClick={() => navigate("/login")}>
				<RxExit />
				Sair
			</DropdownMenuItem>
		</DropdownContent>
	);
}
