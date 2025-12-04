import { TextIndentIcon, TextOutdentIcon } from "@phosphor-icons/react";
import { Container, ImageProfile, InfoField, ProfileContainer } from "./styles";
import { DropdownTrigger } from "../dropdowns/dropdown";
import { DropdownMenuProfile } from "../dropdowns/dropdown-profile";

import ImageTest from "../../assets/images/me.jpg";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
};

export function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <Container>
      {isOpen ? (
        <TextOutdentIcon
          size={24}
          weight="bold"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <TextIndentIcon size={24} weight="bold" onClick={() => setIsOpen(true)} />
      )}
      <ProfileContainer>
        <InfoField>
          <strong>Pedro Lucas</strong>
          <span>Premium</span>
        </InfoField>
        <DropdownTrigger
            component={<DropdownMenuProfile/>}
        >
            <ImageProfile url={ImageTest}/>
        </DropdownTrigger>
      </ProfileContainer>
    </Container>
  );
}
