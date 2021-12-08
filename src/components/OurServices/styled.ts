import styled from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

export const Wrapper = styled.main`
  padding: 5rem 30rem;
  ${media.lessThan("1280px" as keyof DefaultBreakpoints)`
    padding: 5rem 15rem;
  `}
  ${media.lessThan("medium")`
    padding:5rem 3rem;
  `}
`;

export const WrapperServicesDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10rem;
  ${media.lessThan("1280px" as keyof DefaultBreakpoints)`
    gap: 3rem;
  `}
  ${media.lessThan("medium")`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
    margin-top:5rem;
  `}
`;
