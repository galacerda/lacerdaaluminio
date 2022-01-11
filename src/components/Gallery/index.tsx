import MediaMatch from "../MediaMatch";
import Slider from "../Slider";
import * as S from "./styled";

const settingsDesktop = {
  dots: true,
  arrows: true,
  nextArrow: <S.NextArrow />,
  prevArrow: <S.PrevArrow />,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  pauseOnHover: false,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const settingsMobile = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300,
  pauseOnHover: false,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const image1 = "/img/1.webp";
const image2 = "/img/2.webp";

const Gallery = () => {
  const imagesGallery = [image1, image2];
  return (
    <S.Wrapper>
      <S.Content>
        <S.SliderWrapper>
          <MediaMatch greaterThan="medium">
            <Slider settings={settingsDesktop} darkDots>
              <S.Image src={image1} />
              <S.Image src={image2} />
              <S.Image src={image1} />
              <S.Image src={image1} />
            </Slider>
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Slider settings={settingsMobile} darkDots>
              <S.Image src={image1} />
              <S.Image src={image2} />
              <S.Image src={image1} />
              <S.Image src={image1} />
            </Slider>
          </MediaMatch>
        </S.SliderWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Gallery;
