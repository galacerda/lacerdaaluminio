import styled, { css } from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

type MediaMatchModifiers = {
  lessThan: (size: keyof DefaultBreakpoints) => any;
  greaterThan: (size: keyof DefaultBreakpoints) => any;
};

const mediaMatchModifiers: MediaMatchModifiers = {
  lessThan: (size = "medium") => css`
    ${media.lessThan(size as keyof DefaultBreakpoints)` display: block `}
  `,

  greaterThan: (size = "medium") => css`
    ${media.greaterThan(size as keyof DefaultBreakpoints)` display: block `}
  `,
};

export default styled.div<any>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;
