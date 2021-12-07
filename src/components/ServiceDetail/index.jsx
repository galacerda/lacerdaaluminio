import * as S from "./styled";
import Heading from "../Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceDetail = ({
  image,
  title,
  description,
  colorCicle = "yellow",
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <S.Wrapper
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="250"
    >
      <S.Circle colorCicle={colorCicle}>
        <img src={image} alt={`Imagem referente a uma: ${title}`} />
      </S.Circle>
      <Heading lineBottom>{title}</Heading>
      <p>{description}</p>
    </S.Wrapper>
  );
};

export default ServiceDetail;
