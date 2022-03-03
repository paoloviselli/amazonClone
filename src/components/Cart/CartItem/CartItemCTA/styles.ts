import styled from "styled-components";

export const CartItemCTAContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  min-width: ${({ theme }) => theme.spacing.multiple(20)};
  margin: ${({ theme }) => theme.spacing.double} 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
