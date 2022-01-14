import styled from "styled-components";

export const CartIconContainer = styled.div`
  display: felx;
  cursor: pointer;
  height: ${({ theme }) => theme.spacing.multiple(10)};
  width: ${({ theme }) => theme.spacing.multiple(10)};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.active};
`;
