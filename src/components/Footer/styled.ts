import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
import media, { DefaultBreakpoints } from "styled-media-query";

export const Wrapper = styled.footer`
  background-color: ${defaultTheme.colors.gray};
  width: 100%;
  height: 40rem;
  margin-top: -15rem;
  position: relative;

  ${media.lessThan("1336px" as keyof DefaultBreakpoints)`
    margin-top: -20rem;
  `}
`;

export const Dev = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translateX(-50%);
  span {
    color: ${defaultTheme.colors.white};
  }
`;
