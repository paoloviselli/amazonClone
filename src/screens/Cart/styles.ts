import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartScreenContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cartBackground};
  justify-content: center;
  overflow: scroll;
`;

export const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.triple};
  margin-right: ${({ theme }) => theme.spacing.oneAndHalf};
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.multiple(15)};
`;
