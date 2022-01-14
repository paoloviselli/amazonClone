import styled from "styled-components";

export const CartSummaryContainer = styled.div`
  display: flex;
  height: 100%;
  min-width: ${({ theme }) => theme.spacing.multiple(38)};
  margin: ${({ theme }) => theme.spacing.triple};
  margin-left: ${({ theme }) => theme.spacing.oneAndHalf};
  background-color: ${({ theme }) => theme.colors.white};
`;
