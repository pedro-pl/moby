import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 35rem;
  height: auto;
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: ${theme.white.color10};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ButtonGoogle = styled.button`
  height: 6vh;
  padding: 12px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 16px;
  font-weight: 600;
  background-color: ${theme.white.default};
  border: 1px solid ${theme.gray.color40};
  color: ${theme.gray.color80};
  margin-top: 1rem;
`;

export const SeparatorContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    span {
        font-size: 1rem;
        color: ${theme.gray.color80};
    }
`