import styled from "styled-components";

export const CartItemPricingContainer = styled.div`
  display: flex;
  width: 15%;
  min-width: ${({ theme }) => theme.spacing.multiple(18)};
  max-width: ${({ theme }) => theme.spacing.multiple(18)};
  margin: ${({ theme }) => theme.spacing.double};
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: end;
  align-items: flex-start;
`;
