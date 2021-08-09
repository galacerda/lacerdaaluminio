import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  padding: 10rem 20rem;
  ${media.lessThan("medium")`
    padding:3rem;
  `}
`;

export const WrapperServicesDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10rem;
  ${media.lessThan("medium")`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
    margin-top:5rem;
  `}
`;
