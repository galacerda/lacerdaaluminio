import styled, { css } from "styled-components";
import media from "styled-media-query";

const mediaMatchModifiers = {
  lessThan: (size = "medium") => css`
    ${media.lessThan(size)` display: block `}
  `,

  greaterThan: (size = "medium") => css`
    ${media.greaterThan(size)` display: block `}
  `,
};

export default styled.div`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;
