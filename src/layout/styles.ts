import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

interface PageProps {
  isOpen: boolean;
  distance: number;
}

export const PageContainer = styled.div<PageProps>`
  width: 100%;
  padding-left: ${({ isOpen, distance }) =>
    isOpen && distance < 380 ? `${28}px` : "0"};
  box-sizing: border-box;
  height: auto;
  transition: 0.3s;
`;
