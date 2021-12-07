import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
import media from "styled-media-query";

export const Wrapper = styled.footer`
  background-color: ${defaultTheme.colors.gray};
  width: 100%;
  height: 40rem;
  margin-top: -15rem;
  position: relative;

  ${media.lessThan("1280px")`
    margin-top: -20rem;
  `}
`;
