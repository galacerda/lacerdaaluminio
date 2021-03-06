import * as S from "./styled";
import Heading from "../Heading";
import MediaMatch from "../MediaMatch";
import "aos/dist/aos.css";

const handshakeImg = "/img/handshake.webp";

const WhoAreUs = () => {
  return (
    <S.Wrapper>
      <Heading lineLeft>Quem somos nós</Heading>
      <S.Content>
        <S.Description>
          <p data-aos="fade-right" data-aos-duration="600">
            Somos uma empresa especializada na produção de esquadrias de
            alumínio, totalmente focada em atender com excelência nossos
            clientes. Nossa maior motivação é concretizar nossos projetos,
            buscando não só entregar o resultado sonhado pelo nosso cliente,
            como também superando suas expectativas. Acreditamos que sempre
            podemos ir além do esperado, e nos superarmos em cada novo projeto!
          </p>
          <MediaMatch greaterThan="medium">
            <img
              src={handshakeImg}
              alt="Duas pessoas apertando as mãos simbolizando o fechamento de um contrato, com um chapéu de construção atrás"
              data-aos="fade-left"
              data-aos-duration="600"
            />
          </MediaMatch>
        </S.Description>
      </S.Content>
    </S.Wrapper>
  );
};

export default WhoAreUs;
