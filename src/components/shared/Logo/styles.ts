import styled from "styled-components";

export const LogoContainer = styled.div`
  height: ${({ theme }) => theme.spacing.multiple(4)};
  cursor: pointer;
  position: relative;
  width: ${({ theme }) => theme.spacing.multiple(13)};
  margin-left: ${({ theme }) => theme.spacing.triple};
`;
