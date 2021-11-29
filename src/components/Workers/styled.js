import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/defaultTheme";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
`;

export const ImageWorker = styled.div`
  img {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  max-width: 47%;
  padding: 17rem 0 0 0;
  font-size: 2rem;
`;

export const Heading = styled.div`
  display: flex;
  margin-bottom: 5rem;
  align-items: center;
  ::before {
    content: "";
    background-color: ${defaultTheme.colors.yellow};
    width: 0.9rem;
    height: 8rem;
    margin-right: 1rem;
  }
`;

export const Info = styled.span`
  ${({ fontWeight }) => css`
    font-weight: ${fontWeight || "400"};
  `}
  font-size: 3rem;
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
  }
`;
