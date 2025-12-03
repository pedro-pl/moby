import styled from "styled-components";
import { theme } from "../../styles/theme";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  open: boolean;
}

export const Container = styled.aside<SidebarProps>`
  left: ${({ open }) => (open ? "1vh" : "-50rem")};
  transition: 0.3s;
  width: 14rem;
  height: 90vh;
  z-index: 999;
  position: fixed;
  background-color: ${theme.white.color10};
  border: 1px solid ${theme.gray.gray30};
  border-radius: 8px;

  bottom: 1vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 8.85vh;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
    width: 5rem;
  }

  svg {
    cursor: pointer;
    color: ${theme.blue.color80};
  }
`;

export const Separator = styled.div`
  width: 70%;
  height: 1px;
  background-color: ${theme.gray.gray30};
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavigateSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled(NavLink)`
  width: 100%;
  padding: 12px 10px;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  font-size: 18px;
  font-weight: 500;
  color: ${theme.gray.gray70};
  text-decoration: none;
  transition: 0.1s;

  &.active {
    background-color: ${theme.background};
    border-left: 6px solid ${theme.blue.color80};
    color: ${theme.blue.color80};
  }

  &:hover {
    background-color: ${theme.gray.gray20};
    transition: 0.1s;
  }
`;
