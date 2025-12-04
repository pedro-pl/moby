import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  height: 3.5rem;
  gap: 1rem;
`;

export const FilterButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${theme.white.default};
  border: 1px solid ${theme.gray.color30};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  svg {
    color: ${theme.gray.color90};
  }

  &:hover {
    background-color: ${theme.gray.color20};
    transition: 0.2s;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${theme.white.default};
  border: 1px solid ${theme.gray.color30};
  border-radius: 8px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    outline: none;
    border: none;
    font-size: 18px;
    border-radius: 8px;
    font-weight: 400;
    letter-spacing: 0.5px;
    padding: 1rem;
    box-sizing: border-box;

    &::placeholder {
      color: ${theme.placeholder};
    }
  }
`;

export const ActionButton = styled.button`
  width: 50px;
  height: 100%;
  border: none;
  margin-right: 6px;
  outline: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;

  svg {
    color: ${theme.gray.color80};
    transition: 0.2s;
  }

  &:hover {
    svg {
      color: ${theme.gray.color50};
      transition: 0.2s;
    }
  }
`;

export const Divisor = styled.div`
  height: 60%;
  width: 1px;
  background-color: ${theme.gray.color50};
`;
