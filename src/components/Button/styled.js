import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
export const Button = styled.button`
  padding: 1.5rem 7rem;
  border-radius: 0.2rem;
  background-color: ${defaultTheme.colors.yellow};
  border: none;
  font-size: 2rem;
  font-weight: 500;
  color: ${defaultTheme.colors.white};
`;
