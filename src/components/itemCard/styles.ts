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
  height: "100%";
  width: ${({ theme }) => theme.spacing.multiple(30)};
  background-color: ${({ theme }) => theme.colors.active};
  justify-content: center;
`;

export const PictureContainer = styled.div`
  display: felx;
  height: ${({ theme }) => theme.spacing.multiple(35)};
  width: ${({ theme }) => theme.spacing.multiple(30)};
  background-color: ${({ theme }) => theme.colors.dark};
`;
