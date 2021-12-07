import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  padding: 12.5rem 23rem;
  ${media.lessThan("medium")`
  padding:5rem 3rem;
  `}
  ${media.lessThan("1280px")`
  padding: 10rem 15rem;
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
    -webkit-box-shadow: 12px 10px 16px -5px rgba(179, 179, 179, 1);
    -moz-box-shadow: 12px 10px 16px -5px rgba(179, 179, 179, 1);
    box-shadow: 12px 10px 16px -5px rgba(179, 179, 179, 1);
  }
  ${media.lessThan("medium")`
    padding:5rem 0;
  `}
`;
