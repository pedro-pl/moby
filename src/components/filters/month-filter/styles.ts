import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  margin: 0 auto;
  padding: 1rem 12px;
  box-sizing: border-box;
  background-color: ${theme.white.default};
  border: 1px solid ${theme.gray.color30};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActualMonth = styled.h2`
  padding: 6px 2rem;
  background-color: ${theme.blue.color70};
  color: ${theme.gray.color20};
  letter-spacing: 2px;
  margin: 0;
  border-radius: 12px;
`;

export const OtherMonths = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 6px 1.5rem;
  transition: 0.2s;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: ${theme.gray.color20};
  }
`;

export const ActionButton = styled.button`
  border: none;
  outline: none;
  border-radius: 6px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
`;
