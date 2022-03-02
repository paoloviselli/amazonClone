import styled from "styled-components";

export const CartListContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.triple};
  margin-right: ${({ theme }) => theme.spacing.oneAndHalf};
  background-color: ${({ theme }) => theme.colors.white};
`;
