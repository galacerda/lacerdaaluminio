import styled, { css } from "styled-components";
import media from "styled-media-query";

export const SectionImage = styled.div`
  ${({ img, fixed }) => css`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

    ${({ fixed }) => fixed && "background-attachment: fixed"};

    height: 70vh;
  `}
`;
