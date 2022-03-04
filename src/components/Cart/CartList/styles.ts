import styled from "styled-components";

export const CartListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.triple};
  margin-right: 0;
  padding: ${({ theme }) => theme.spacing.oneAndHalf}
    ${({ theme }) => theme.spacing.triple};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DivLine = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 1px;
  margin-top: ${({ theme }) => theme.spacing.double};
`;
