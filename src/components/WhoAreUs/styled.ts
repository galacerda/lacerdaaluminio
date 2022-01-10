import styled from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

export const Wrapper = styled.section`
  padding: 12.5rem 23rem;
  ${media.lessThan("1336px" as keyof DefaultBreakpoints)`
  padding: 10rem 5rem;
  `}
  ${media.lessThan("medium")`
  padding:5rem 3rem;
  `}
`;

export const Content = styled.div``;

export const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 1.8rem;
    margin-right: 2rem;
  }
  img {
    border-radius: 0.5rem;
    -webkit-box-shadow: 1.2rem 1rem 1.6rem -0.5rem rgba(179, 179, 179, 1);
    -moz-box-shadow: 1.2rem 1rem 1.6rem -0.5rem rgba(179, 179, 179, 1);
    box-shadow: 1.2rem 1rem 1.6rem -0.5rem rgba(179, 179, 179, 1);
  }

  ${media.lessThan("medium")`
    padding:5rem 0;
  `}
`;
