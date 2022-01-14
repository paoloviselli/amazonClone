import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: felx;
  height: 10%;
  width: 100%;
  justify-content: space-between;
  background-color: red;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
`;

// background-color: #222f3e;
// color of blue stripe under search bar "filter selector bar"
