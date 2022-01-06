import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: felx;
  height: 10%;
  width: 100%;
  justify-content: felx-start;
  background-color: red;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
`;

// background-color: #222f3e;
// color of blue stripe under search bar "filter selector bar"

export const LogoContainer = styled.div`
  height: 80%;
  width: ${({ theme }) => theme.spacing.multiple(25)};
  margin-left: ${({ theme }) => theme.spacing.double};
  background-color: ${({ theme }) => theme.colors.active};
`;
