import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const HomepageContainer = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.homeBackground};
  //
  justify-content: center;
  align-items: center;
`;
