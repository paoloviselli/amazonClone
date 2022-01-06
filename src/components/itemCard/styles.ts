import styled from "styled-components";

export const ItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.multiple(45)};
  width: ${({ theme }) => theme.spacing.multiple(40)};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TitleContainer = styled.div`
  display: felx;
  height: "10%";
  width: ${({ theme }) => theme.spacing.multiple(30)};
  justify-content: flex-start;
`;

export const PictureContainer = styled.div`
  display: felx;
  position: relative;
  height: 80%;
  width: ${({ theme }) => theme.spacing.multiple(30)};
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const AddToCartButtonContainer = styled.div`
  display: felx;
  height: 10%;
  width: 100%;
  justify-content: flex-start;
  align-items: start;
  padding-top: ${({ theme }) => theme.spacing.single};
`;
