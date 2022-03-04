import styled from "styled-components";

export const QauntityCounterContainer = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.spacing.half};
  border: 1px ${({ theme }) => theme.colors.dark};
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const Button = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.cartBackground};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.double};
  border: 2px ${({ theme }) => theme.colors.dark};
  height: 20px;
  width: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonOff};
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing.single};
`;
