import styled from "styled-components";

interface CartListContainerProps {
  isEmpty?: boolean;
}

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartScreenContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.cartBackground};
  justify-content: center;
  overflow: scroll;
`;

export const CartListContainer = styled.div<CartListContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: ${({ theme }) => theme.spacing.multiple(23)};
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.triple};
  margin-right: 0;

  padding: ${({ theme }) => theme.spacing.oneAndHalf}
    ${({ theme }) => theme.spacing.triple};
  background-color: ${({ theme }) => theme.colors.white};
  ${({ isEmpty, theme }) =>
    isEmpty &&
    `
    justify-content: center;
    align-items: center;
    ;
  `};
`;

export const LoaderWraper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.cartBackground};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SpacingDiv = styled.div`
  width: ${({ theme }) => theme.spacing.single};
`;
