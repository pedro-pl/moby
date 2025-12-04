import {
  ActionButton,
  Container,
  Divisor,
  FilterButton,
  InputWrapper,
} from "./styles";
import { LuSearch, LuSlidersHorizontal } from "react-icons/lu";

type SearchProps = {
  placeholder: string;
  isFull?: boolean;
};

export function Searchbar({ placeholder }: SearchProps) {
  return (
    <Container>
      <FilterButton>
        <LuSlidersHorizontal size={22} />
      </FilterButton>
      <InputWrapper>
        <input type="text" id="searchBar" placeholder={placeholder} />
        <Divisor />
        <ActionButton>
          <LuSearch size={26} />
        </ActionButton>
      </InputWrapper>
    </Container>
  );
}
