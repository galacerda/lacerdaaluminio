/* eslint-disable @next/next/no-img-element */
import * as S from "./styled";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import OurServices from "../../components/OurServices/index";
import SectionImage from "../../components/SectionImage";
import WhoAreUs from "../../components/WhoAreUs";
import BudgetForm from "../../components/BudgetForm";
import Slider from "../../components/Slider";
import Workers from "../../components/Workers";
import Footer from "../../components/Footer";
import WhatsAppLink from "../../components/WhatsAppLink";
import Gallery from "../../components/Gallery";


const houseBg = "/img/houseBg.svg";

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

const solding = "/img/solding.webp";

const mailIcon = "/img/mailIcon.svg";
const phoneIcon = "/img/phoneIcon.svg";
const logo = "/img/logo.svg";

export default function Home() {
  return (
    <S.Wrapper>
      <header>
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
            <span>orçamento.lacerdaaluminio@gmail.com</span>
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
            <img src={houseBg} />
            <S.CarouselWrapper>
              <S.SliderContainer>
                <Slider settings={settings}>
                  <S.SlideText>
                    Oferecemos <span>serviços profissionais</span>, com
                    acabamentos <span>impecáveis!</span>
                  </S.SlideText>
                  <S.SlideText>
                    Trabalhamos com os <span>melhores materiais</span> presentes
                    no mercado
                  </S.SlideText>
                  <S.SlideText>
                    Uma equipe <span>profissional</span>, compromissada com a
                    sua
                    <span> satisfação!</span>
                  </S.SlideText>
                </Slider>
              </S.SliderContainer>
            </S.CarouselWrapper>
            <S.ButtonWrapper>
              <a href="#budget-form">
                <Button text="Solicite um orçamento" fontWeight="500" />
              </a>
            </S.ButtonWrapper>
          </S.HeaderCarousel>
        </div>
      </header>
      <main>
        <Workers />
        <S.MoreAbout>
          <Heading lineBottom>Saiba mais sobre a nossa empresa</Heading>
        </S.MoreAbout>
        <OurServices />
        <Gallery />
        <SectionImage img="/img/yellowBg.svg" />
        <WhoAreUs />
        <SectionImage img={solding} />
        <BudgetForm />
      </main>
      <Footer />
    </S.Wrapper>
  );
}
