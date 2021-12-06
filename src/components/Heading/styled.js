import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
import media from "styled-media-query";
const headingModifiers = {
  lineLeft: () => css`
    padding-left: 1rem;
    border-left: 0.4rem solid ${defaultTheme.colors.yellow};
  `,
  lineBottom: () => css`
    margin-bottom: 1rem;
    &::after {
      content: "";
      width: 80%;
      height: 0.5rem;
      background-color: ${defaultTheme.colors.yellow};
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export const Heading = styled.h2`
  ${({ lineLeft, lineBottom }) => css`
    ${lineLeft && headingModifiers.lineLeft}
    ${lineBottom && headingModifiers.lineBottom}
  
    font-size:2rem;
  `}
`;
