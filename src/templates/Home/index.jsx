/* eslint-disable @next/next/no-img-element */
import * as S from "./styled";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import OurServices from "../../components/OurServices/index";
import { SectionImage } from "../../components/SectionImage/styled";
import WhoAreUs from "../../components/WhoAreUs";
import BudgetForm from "../../components/BudgetForm";

import { useEffect } from "react";
import Slider from "../../components/Slider";

const mailIcon = "/img/mailIcon.svg";
const logo = "/img/luminiumLogo.svg";
export default function Home() {
  return (
    <S.Wrapper>
      <div>
        <S.HeaderContact>
          <S.MailIcon />
          <span>contato_lacerda-aluminio.com</span>
        </S.HeaderContact>
        <S.CarouselWrapper>
          <S.WrapperLogo>
            <img src={logo} />
          </S.WrapperLogo>
          <S.SeiLa>
            <Slider>
              <S.SlideText>
                Oferecemos <span>serviços profissionais</span>, com acabamentos{" "}
                <span>impecáveis!</span>
              </S.SlideText>
              <S.SlideText>
                Oferecemos serviços profissionais, com acabamentos impecáveis!
              </S.SlideText>
              <S.SlideText>
                Oferecemos serviços profissionais, com acabamentos impecáveis!
              </S.SlideText>
            </Slider>
          </S.SeiLa>
          <S.ButtonWrapper>
            <Button text="Peça um orçamento" />
          </S.ButtonWrapper>
        </S.CarouselWrapper>
      </div>
      <S.MoreAbout>
        <Heading lineBottom>Saiba mais sobre a nossa empresa</Heading>
      </S.MoreAbout>
      <OurServices />
      <SectionImage image="/img/yellowBg.svg" />
      <WhoAreUs />
      <BudgetForm />
    </S.Wrapper>
  );
}
