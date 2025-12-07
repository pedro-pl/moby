import { Arrow, Content, Item, Separator } from "@radix-ui/react-dropdown-menu";
import styled, { css, keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

const SlideDownAndFade = keyframes`
    0% { opacity: 0; transform: translateY(-2px) };
    100% { opacity: 1; transform: translateY(0) };
`;

export const StyledMenuContent = styled(Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 120px;
  background-color: white;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0px 0 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation: ${SlideDownAndFade} 1000ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  position: relative;
  z-index: 9999;
`;

export const StyledSeparator = styled(Separator)`
  height: 1px;
  background-color: ${theme.gray.color40};
`;

export const StyledItem = styled(Item)<{ exit?: boolean }>`
  all: unset;
  color: ${theme.gray.color80};
  border-radius: 3px;
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  gap: 6px;
  font-size: 0.875rem;

  cursor: pointer;

  &:hover{
    color: ${theme.gray.color60};

    svg {
      color: ${theme.gray.color60};
    }
  }

  svg {
    font-size: 20px;
  }

  ${(props) =>
		props.exit &&
		css` 
    color: ${theme.gray.color80};
  `}
  
`;

export const StyledArrow = styled(Arrow)`
  fill: ${theme.white.default};
`;
