import styled from "styled-components";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { defaultTheme } from "../../styles/defaultTheme";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Image = styled.img``;

export const SliderWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const NextArrow = styled(ArrowForwardIosRoundedIcon)`
  position: absolute;
  top: 40%;
  left: 97.9%;
  font-size: 4rem !important;
  color: ${defaultTheme.colors.orange}99;
  cursor: pointer;
`;
export const PrevArrow = styled(ArrowBackIosRoundedIcon)`
  position: absolute;
  z-index: 2;
  top: 40%;
  font-size: 4rem !important;
  color: ${defaultTheme.colors.orange}99;
  cursor: pointer;
`;
