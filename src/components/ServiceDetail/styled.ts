import styled, { css } from "styled-components";
import media from "styled-media-query";
import { defaultTheme } from "../../styles/defaultTheme";
import { ServiceDetailProps } from "./index";

type CircleProps = {
  colorCicle: Pick<ServiceDetailProps, "colorCicle">;
};

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  p {
    text-align: center;
    font-size: 1.8rem;
  }
  ${media.lessThan("medium")`
    padding: 2rem;
  `}
`;

export const Circle = styled.div<CircleProps>`
  ${({ colorCicle }) => css`
    width: 20rem;
    height: 20rem;
    border: 0.5rem solid ${defaultTheme.colors[colorCicle]};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    img {
      width: 8.5rem;
    }
  `}
`;
