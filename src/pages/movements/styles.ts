import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 1px 16px;
`;

export const Thead = styled.thead`
  background-color: ${theme.white.color10};
  color: ${theme.white};
  border-radius: 1rem;

  tr {
    border-radius: 1rem;
  }

  th {
    text-align: left;
    padding: 1.5rem;
    color: ${theme.gray.color90};
  }

  th:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  th:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const Tbody = styled.tbody`
  tr {
    width: 100%;
    background-color: ${theme.white.color10};
    border: 1px solid ${theme.gray.color50};
  }

  td {
    padding: .8rem 1.5rem;
    color: ${theme.gray.color90};

    td {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  td:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  td:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const Tag = styled.div`
  width: fit-content;
  background-color: ${theme.background};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid ${theme.blue.color30};
  color: ${theme.blue.color80};
`;

export const Divisor = styled.div`
  height: 15px;
  width: 1px;
  background-color: ${theme.gray.color90};
`;
