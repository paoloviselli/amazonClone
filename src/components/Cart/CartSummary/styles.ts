import styled from "styled-components";

export const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ theme }) => theme.spacing.multiple(20)};
  min-width: ${({ theme }) => theme.spacing.multiple(38)};
  margin-left: ${({ theme }) => theme.spacing.oneAndHalf};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.triple};
  margin: ${({ theme }) => theme.spacing.triple};
  justify-content: space-around;
`;

export const SubtotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
