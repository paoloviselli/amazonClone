import styled from "styled-components";

export const LogoContainer = styled.div`
  height: 40%;
  position: relative;
  width: ${({ theme }) => theme.spacing.multiple(13)};
  margin-left: ${({ theme }) => theme.spacing.triple};
`;
