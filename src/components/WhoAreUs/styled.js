import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  padding: 12.5rem 20rem;
  ${media.lessThan("medium")`
    padding:3rem;
  `}
`;

export const Content = styled.div``;

export const Description = styled.div`
  padding: 5rem 0;
  width: 70%;
  p {
    font-size: 1.8rem;
  }
`;
