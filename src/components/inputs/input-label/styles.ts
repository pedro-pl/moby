import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { Input } from "../input";

export const Container = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    gap: 6px;
    background-color: ${theme.gray.color20};
    border: 1px solid ${theme.gray.color40};
    border-radius: 12px;
    padding: 8px;
    padding-bottom: 0;
    box-sizing: border-box;
`
export const Label = styled.label`
    color: ${theme.gray.color90};
    font-size: 16px;
`

export const StyledInput = styled(Input)`
    width: 100%;
    height: 3vh;
    border: none;
    outline: none;
    font-size: 18px;
    background-color: transparent;
`