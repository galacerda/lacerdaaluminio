import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";
import media, { DefaultBreakpoints } from "styled-media-query";

type InfoProps = {
  fontWeight: number;
};

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  padding: 5rem 23rem;
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
  font-size: 2rem;
  ${media.lessThan("1336px" as keyof DefaultBreakpoints)`
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

export const Title = styled.h1<InfoProps>`
  ${({ fontWeight }) => css`
    font-weight: ${fontWeight || "400"};
  `}
  font-size: 3rem;
  ${media.lessThan("medium")`
    font-size: 2rem;
  `}
`;

export const Subtitle = styled.h2<InfoProps>`
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
  /* img {
    width: 70%;
    margin-top: 13rem;
    ${media.lessThan("1336px" as keyof DefaultBreakpoints)`
      margin-top: 5rem;
   `}
    ${media.lessThan("medium")`
    margin-top: 10rem;
    width: 60%;
  `}
  } */
  span {
    font-size: 1.8rem;
    ${media.lessThan("medium")`
    font-size: 1.6rem;
  `}
  }
`;

export const List = styled.ul`
  padding: 5rem 0 0 3rem;
  ${media.lessThan("medium")`
     padding: 3rem 0 0 3rem;
  `}
`;

export const ListItem = styled.li`
  font-size: 1.8rem;
  ${media.lessThan("medium")`
      font-size: 1.6rem;
  `}
`;

export const ProductsWrapper = styled.div``;

export const ListProducts = styled.ul`
  list-style: none;
  ${media.lessThan("medium")`
    margin-top: 5rem;
  `}
`;

export const ProductItem = styled.li`
  display: flex;
  height: 10rem;
  border-radius: 1rem;
  border: 0.1rem solid #ededed;
  border-right: 1rem solid ${defaultTheme.colors.orange};
  margin-bottom: 1.5rem;
  box-shadow: 0.2rem 0.6rem 0.6rem -0.2rem rgba(0, 0, 0, 0.42);
  img {
    border-radius: 1rem 0 0 1rem;
    height: 100%;
    width: 11rem;
    ${media.lessThan("medium")`
      width: 8rem;
    `}
  }
  span {
    font-size: 2rem;
    ${media.lessThan("medium")`
      font-size: 1.4rem;
    `}
  }
  ${media.lessThan("medium")`
     height: 8rem;
  `}
`;

export const DescriptionProduct = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
