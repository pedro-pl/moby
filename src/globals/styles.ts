import styled, { css } from "styled-components";
import { theme } from "../styles/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 92vh;
  padding: 0 calc(15rem + 1vh);
  padding-top: 9vh;
  box-sizing: border-box;
`;

interface SeparatorProps {
  width: string;
  height: string;
  center?: boolean;
  variant: "light" | "dark";
}

export const Separator = styled.div<SeparatorProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  
  ${({center}) => center && css`
    margin: 0 auto;
  `}

  ${({ variant }) =>
    variant === "light" &&
    css`
      background-color: ${theme.gray.color30};
    `}

  ${({ variant }) =>
    variant === "dark" &&
    css`
      background-color: ${theme.gray.color60};
    `}
`;


export const Redirect = styled.a`
    text-decoration: underline;
    cursor: pointer;
    color: ${theme.blue.color70};
`