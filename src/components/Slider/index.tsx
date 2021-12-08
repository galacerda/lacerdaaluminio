import * as S from "./styled";
import SlickSlider from "react-slick";

type SliderProps = {
  children: React.ReactNode;
};

const Slider = ({ children }: SliderProps) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  );
};

export default Slider;