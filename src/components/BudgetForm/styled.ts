import styled from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

export const Wrapper = styled.section`
  padding: 5rem 23rem;
  ${media.lessThan("1336px" as keyof DefaultBreakpoints)`
     padding:10rem 5rem;
  `}

  ${media.lessThan("medium")`
     padding: 2rem 3rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  p {
    width: 50%;
    font-weight: 400;
    margin-right: 5rem;
    font-size: 1.6rem;
  }
  ${media.lessThan("medium")`
      flex-direction:column;
      p {
        width: 100%;
      }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 80rem;
  height: auto;
  padding: 3rem;
  background-color: white;
  z-index: 1;
  span {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
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
