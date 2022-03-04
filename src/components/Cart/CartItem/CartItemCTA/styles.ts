import styled from "styled-components";

export const CartItemCTAContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  min-width: ${({ theme }) => theme.spacing.multiple(20)};
  margin: ${({ theme }) => theme.spacing.double};
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
`;

export const CTAsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DivLine = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.dark};
  width: 1px;
  height: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const DeleteButton = styled.div`
  display: flex;
  height: ${({ theme }) => theme.spacing.multiple(3)};
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.double};
`;
