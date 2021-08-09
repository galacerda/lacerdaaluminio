import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
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
      border: 0.1rem solid ${defaultTheme.colors.yellow};
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
  `}
`;
