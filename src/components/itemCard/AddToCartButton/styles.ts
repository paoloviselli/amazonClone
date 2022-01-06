import styled from "styled-components";

interface AddToCartButtonProps {
  hover?: boolean;
}

export const ButtonContainer = styled.button<AddToCartButtonProps>`
  display: flex;
  width: ${({ theme }) => theme.spacing.multiple(16)};
  height: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.active};
  cursor: pointer;
  border: 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonActive};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonOff};
  }
`;
