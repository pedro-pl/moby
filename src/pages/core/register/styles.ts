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

  h1 {
    margin-bottom: 1rem;
  }
`;