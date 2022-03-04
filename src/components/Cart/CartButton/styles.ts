import styled from "styled-components";

export const CartButtonContainer = styled.button`
  display: flex;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.buttonActive};
  border-radius: ${({ theme }) => theme.spacing.single};
  border-width: 0px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonOff};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonActive};
  }
`;
