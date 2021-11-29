import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";

export const Wrapper = styled.section`
  h2 {
    margin: 12.5rem 0 15rem 20rem;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Form = styled.form`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 30%;
  height: 60rem;
  background-color: white;
  z-index: 1;
`;

export const Frame = styled.div`
  width: fit-content;
  z-index: -1;
`;
