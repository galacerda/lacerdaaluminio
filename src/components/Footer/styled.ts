import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
import media, { DefaultBreakpoints } from "styled-media-query";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${defaultTheme.colors.gray};
  width: 100%;
  height: 10rem;
`;

export const Dev = styled.div`
  span {
    color: ${defaultTheme.colors.white};
  }
`;
