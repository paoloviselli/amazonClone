import styled from "styled-components";

interface AddToCartButtonProps {
  hover?: boolean;
}

export const ButtonContainer = styled.button<AddToCartButtonProps>`
  display: flex;
  width: ${({ theme }) => theme.spacing.multiple(16)};
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.half};
  margin: ${({ theme }) => theme.spacing.half};
  background-color: ${({ theme }) => theme.colors.buttonActive};
  cursor: pointer;
  border: 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonOff};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonActive};
  }
`;
