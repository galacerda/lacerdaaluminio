import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
import media from "styled-media-query";

export const Wrapper = styled.section`
  padding: 5rem 23rem;

  ${media.lessThan("medium")`
     padding: 5rem 3rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 70rem;
  height: 60rem;
  padding: 4rem 3rem;
  background-color: white;
  z-index: 1;
  ${media.lessThan("medium")`
      width:100%;
      margin:3rem 0;
      padding: 2rem;
      height: auto;
  `}
`;

export const Frame = styled.div`
  width: fit-content;
  z-index: -1;
`;

export const Line = styled.div`
  display: grid;
  grid-template-columns: 55% auto;
  gap: 2rem;
  ${media.lessThan("medium")`
     grid-template-columns: 100%;
     gap: 0;
  `}
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: end;
  justify-content: center;
`;
