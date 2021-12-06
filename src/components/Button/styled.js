import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
import media from "styled-media-query";
export const Button = styled.button`
  ${({ borderRadius, bgColor, bgHover, fontWeight }) => css`
    padding: 1.5rem 7rem;
    border-radius: ${borderRadius};
    background-color: ${defaultTheme.colors[bgColor]};
    border: none;
    font-size: 2rem;
    font-weight: ${fontWeight};
    color: ${defaultTheme.colors.white};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: ${bgHover};
    }
    ${media.lessThan("medium")`
    padding: 1.5rem 5rem;
    `}
  `}
`;
