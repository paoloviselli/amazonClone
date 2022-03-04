import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  height: ${({ theme }) => theme.spacing.multiple(30)};
  margin-bottom: ${({ theme }) => theme.spacing.triple};
  justify-content: space-between;
  border-style: solid;
  border-width: 0 0 1px 0;
`;

export const CartItemImage = styled.div`
  display: flex;
  width: 25%;
  position: relative;
  min-width: ${({ theme }) => theme.spacing.multiple(28)};
  max-width: ${({ theme }) => theme.spacing.multiple(28)};
  min-height: ${({ theme }) => theme.spacing.multiple(26)};
  max-height: ${({ theme }) => theme.spacing.multiple(26)};
  margin: ${({ theme }) => theme.spacing.double} 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
