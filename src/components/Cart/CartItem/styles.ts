import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  height: ${({ theme }) => theme.spacing.multiple(30)};
  width: 100%;
  border-width: medium;
  border-color: ${({ theme }) => theme.colors.active};
  margin: ${({ theme }) => theme.spacing.triple};
  background-color: ${({ theme }) => theme.colors.buttonActive};
  justify-content: space-between;
`;

export const CartItemImage = styled.div`
  display: flex;
  width: 25%;
  position: relative;
  min-width: ${({ theme }) => theme.spacing.multiple(28)};
  max-width: ${({ theme }) => theme.spacing.multiple(28)};
  min-height: ${({ theme }) => theme.spacing.multiple(26)};
  max-height: ${({ theme }) => theme.spacing.multiple(26)};
  margin: ${({ theme }) => theme.spacing.double};
  background-color: ${({ theme }) => theme.colors.white};
`;
