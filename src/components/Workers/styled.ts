import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
import media, { DefaultBreakpoints } from "styled-media-query";

type InfoProps = {
  fontWeight: number;
};

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  ${media.lessThan("medium" as keyof DefaultBreakpoints)`
    display: flex;
    flex-direction:column;
    padding:3rem;
    gap:0;
  `}
`;

export const ImageWorker = styled.div`
  img {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  max-width: 47%;
  padding-top: 17rem;
  font-size: 2rem;
  ${media.lessThan("1280px" as keyof DefaultBreakpoints)`
    padding-top: 13rem;
    max-width: 60%;
  `}
  ${media.lessThan("medium")`
    font-size: 1.8rem;
    max-width: 100%;
    padding-top: 5rem;
  `}
`;

export const Heading = styled.div`
  display: flex;
  margin-bottom: 5rem;
  align-items: center;
  ::before {
    content: "";
    background-color: ${defaultTheme.colors.orange};
    width: 0.6rem;
    height: 7rem;
    margin-right: 1rem;
    ${media.lessThan("medium")`
    height: 5rem;
  `}
  }
`;

export const Info = styled.span<InfoProps>`
  ${({ fontWeight }) => css`
    font-weight: ${fontWeight || "400"};
  `}
  font-size: 3rem;
  ${media.lessThan("medium")`
    font-size: 2rem;
  `}
`;

export const InfoTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: justify;
  align-items: center;
  img {
    width: 70%;
    margin-top: 13rem;
    ${media.lessThan("1280px" as keyof DefaultBreakpoints)`
      margin-top: 5rem;
   `}
    ${media.lessThan("medium")`
    margin-top: 10rem;
    width: 60%;
  `}
  }
  span {
    ${media.lessThan("medium")`
    font-size: 1.6rem;
  `}
  }
`;
