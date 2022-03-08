import styled from "styled-components";

export const CartIconContainer = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  height: ${({ theme }) => theme.spacing.multiple(10)};
  width: ${({ theme }) => theme.spacing.multiple(10)};
  justify-content: center;
  align-items: center;
`;

export const CartIconCounter = styled.div`
  display: flex;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.active};
  height: ${({ theme }) => theme.spacing.multiple(2.5)};
  width: ${({ theme }) => theme.spacing.multiple(2.5)};
  border-radius: ${({ theme }) => theme.spacing.double};
  right: 15px;
  top: 18px;
  justify-content: center;
  align-items: center;
`;
