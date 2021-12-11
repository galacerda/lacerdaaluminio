import * as S from "./styled";
import SlickSlider, { Settings } from "react-slick";

type SliderProps = {
  children: React.ReactNode;
  settings: Settings;
  darkDots?: boolean;
};

const Slider = ({ children, settings, darkDots = false }: SliderProps) => {
  return (
    <S.Wrapper darkDots={darkDots}>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  );
};

export default Slider;
