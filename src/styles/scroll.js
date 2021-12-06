import { css } from "styled-components";

export const ScrollCustom = () => css`
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 1rem;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5rem;
    background: #cbcccc;
    opacity: 0.9;
  }
`;
