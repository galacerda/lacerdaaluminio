import styled, { css } from "styled-components";
import media from "styled-media-query";

export const SectionImage = styled.div`
  ${({ image }) => css`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    height: 70vh;
  `}
`;
