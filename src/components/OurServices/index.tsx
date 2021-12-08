import * as S from "./styled";
import Heading from "../Heading";
import ServiceDetail from "../ServiceDetail";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OurServices() {
  const telasImg = "/img/telas.svg";
  const vidrosImg = "/img/vidros.svg";
  const bodyGlass = "/img/bodyGlass.svg";
  const close = "/img/close.svg";

  useEffect(() => {
    AOS.init({ duration: 200 });
  });

  return (
    <S.Wrapper>
      <Heading data-aos="fade-up" lineLeft>
        Nossos Serviços
      </Heading>
      <S.WrapperServicesDetails>
        <ServiceDetail
          title="VIDROS"
          description="Vidros temperados, comuns e laminados. Opções de cores: incolor, fumê, verde, bronze e azul. 
        ​A diferença entre o vidro temperado e comum está na resistência de cada um, bem maior no temperado."
          image={vidrosImg}
        />
        <ServiceDetail
          colorCicle="gray"
          title="TELAS"
          description="Nossas esquadrias podem conter a tela mosqueteira, produzida a partir de fibra de vidro, 
        que impede a entrada de insetos no ambiente, sem prejudicar a ventilação e entrada de luz. As telas são 
        resistentes a chuva e possuem ótima qualidade nas fibras, fazendo com que dificilmente deformem ou desfiem."
          image={telasImg}
        />
        <ServiceDetail
          colorCicle="gray"
          title="GUARDA CORPO DE VIDRO"
          description="Peça chave na valorização de ambientes externos e internos. O guarda-corpo de vidro é tendência incontestável no universo da arquitetura e da decoração contemporânea, além de oferecer segurança contra o risco de queda."
          image={bodyGlass}
        />
        <ServiceDetail
          title="FECHAMENTO DE SACADA"
          description="Peça chave na valorização de ambientes externos e internos. O guarda-corpo de vidro é tendência incontestável no universo da arquitetura e da decoração contemporânea, além de oferecer segurança contra o risco de queda."
          image={close}
        />
      </S.WrapperServicesDetails>
    </S.Wrapper>
  );
}
