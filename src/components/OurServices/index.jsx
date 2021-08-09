import * as S from "./styled";
import Heading from "../Heading";
import ServiceDetail from "../ServiceDetail";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OurServices() {
  const telasImg = "/img/telas.svg";
  const vidrosImg = "/img/vidros.svg";
  const perfilImg = "/img/perfil.svg";
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
          duration={4000}
          title="VIDROS"
          description="Vidros temperados, comuns e laminados. Opções de cores: incolor, fumê, verde, bronze e azul. 
        ​A diferença entre o vidro temperado e comum está na resistência de cada um, bem maior no temperado."
          image={vidrosImg}
        />
        <ServiceDetail
          duration={5000}
          title="TELAS"
          description="Nossas esquadrias podem conter a tela mosqueteira, produzida a partir de fibra de vidro, 
        que impede a entrada de insetos no ambiente, sem prejudicar a ventilação e entrada de luz. As telas são 
        resistentes a chuva e possuem ótima qualidade nas fibras, fazendo com que dificilmente deformem ou desfiem."
          image={telasImg}
        />
        <ServiceDetail
          duration={6000}
          title="PERFIL"
          description="Cada linha tem sua peculiaridade e sempre o melhor tipo de perfil é indicado para cada peça a ser produzida 
        e instalada no vão de uma obra. Os perfis tem espessuras diferentes e isso interfere diretamente na sua resistência."
          image={perfilImg}
        />
      </S.WrapperServicesDetails>
    </S.Wrapper>
  );
}
