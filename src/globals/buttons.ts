import type { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { theme } from "../styles/theme";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "light" | "middle" | "dark";
};

export const StyledButton = styled.button<ButtonProps>`
  padding: 12px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;

  ${({ variant }) =>
    variant === "light" &&
    css`
      background-color: ${theme.background};
      border: 1px solid ${theme.blue.color30};
      color: ${theme.blue.color80};
      transition: 0.2s;

      &:hover {
        background-color: ${theme.blue.color20};
        transition: 0.2s;
      }
    `}
  
  ${({ variant }) =>
    variant === "middle" &&
    css`
      background-color: ${theme.blue.color80};
      border: 1px solid ${theme.blue.color80};
      color: ${theme.white.default};
      transition: 0.2s;

      &:hover {
        background-color: ${theme.blue.color60};
      border: 1px solid ${theme.blue.color60};
        transition: 0.2s;
      }
    `}
`;
