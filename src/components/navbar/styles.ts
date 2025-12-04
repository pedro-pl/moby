import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  padding: 0 calc(15rem + 1vh);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.white.color10};
  border-bottom: 1px solid ${theme.gray.color30};
  position: fixed;
  top: 0;

  svg {
    cursor: pointer;
    color: ${theme.blue.color80};
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InfoField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  span {
    font-size: 12px;
    line-height: 20px;
    color: ${theme.gray.color60};
    text-align: end;
  }
`;

interface ImageProps {
  url: string;
}

export const ImageProfile = styled.div<ImageProps>`
  width: 40px;
  height: 40px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;

  cursor: pointer;
`;
