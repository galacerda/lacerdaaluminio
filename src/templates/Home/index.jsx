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
import Workers from "../../components/Workers";
import Footer from "../../components/Footer";
import WhatsAppLink from "../../components/WhatsAppLink";

const solding = "/img/solding.svg";

const mailIcon = "/img/mailIcon.svg";
const phoneIcon = "/img/phoneIcon.svg";
const logo = "/img/logo.svg";
export default function Home() {
  return (
    <S.Wrapper>
      <WhatsAppLink />
      <S.HeaderContact>
        <S.ContactItem>
          <img src={phoneIcon} alt="Ícone referente a um telefone" />
          <span>(19) 99441-9605</span>
        </S.ContactItem>
        <S.ContactItem>
          <img
            src={mailIcon}
            alt="Ícone referente a uma carta simbolizando o e-mail"
          />
          <span>luminiun@gmail.com</span>
        </S.ContactItem>
      </S.HeaderContact>
      <S.WrapperLogo>
        <img
          src={logo}
          alt="Logotipo da Lacerda Aluminios, no qual possui um A grande e laranjado no centro, unindo as palavras lacerd e luminio"
        />
      </S.WrapperLogo>
      <div>
        <S.HeaderCarousel>
          <S.CarouselWrapper>
            <S.SeiLa>
              <Slider>
                <S.SlideText>
                  Oferecemos <span>serviços profissionais</span>, com
                  acabamentos <span>impecáveis!</span>
                </S.SlideText>
                <S.SlideText>
                  Oferecemos serviços profissionais, com acabamentos impecáveis!
                </S.SlideText>
                <S.SlideText>
                  Oferecemos serviços profissionais, com acabamentos impecáveis!
                </S.SlideText>
              </Slider>
            </S.SeiLa>
          </S.CarouselWrapper>
          <S.ButtonWrapper>
            <a href="#budget-form">
              <Button text="Solicite um orçamento" fontWeight="500" />
            </a>
          </S.ButtonWrapper>
        </S.HeaderCarousel>
      </div>
      <Workers />
      <S.MoreAbout>
        <Heading lineBottom>Saiba mais sobre a nossa empresa</Heading>
      </S.MoreAbout>
      <OurServices />
      <SectionImage img="/img/yellowBg.svg" fixed />
      <WhoAreUs />
      <SectionImage img={solding} fixed />
      <BudgetForm />
      <Footer />
    </S.Wrapper>
  );
}
