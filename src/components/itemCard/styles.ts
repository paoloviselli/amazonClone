import styled from "styled-components";

export const ItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.multiple(50)};
  width: 28%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.spacing.triple};
  padding: ${({ theme }) => theme.spacing.double} 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.spacing.multiple(30)};
  justify-content: flex-start;
`;

export const PriceContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.spacing.multiple(30)};
  justify-content: flex-start;
`;

export const PictureContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(30)};
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing.half};

  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const AddToCartButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
`;
