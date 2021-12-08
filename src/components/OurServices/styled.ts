import styled from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

export const Wrapper = styled.main`
  padding: 5rem 23rem;
  ${media.lessThan("1336px" as keyof DefaultBreakpoints)`
    padding: 5rem 5rem;
  `}
  ${media.lessThan("medium")`
    padding:5rem 3rem;
  `}
`;

export const WrapperServicesDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  ${media.lessThan("medium")`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
    margin-top:5rem;
  `}
`;
