import MediaMatch from "../MediaMatch";
import * as S from "./styled";

const worker = "/img/workers.svg";
const frame = "/img/frame.svg";
const Workers = () => {
  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <S.ImageWorker>
          <img
            src={worker}
            alt="Dois trabalhadores segurando uma janela de esquadria de aluminio"
          />
        </S.ImageWorker>
      </MediaMatch>
      <S.InfoWrapper>
        <S.Heading>
          <S.InfoTextContent>
            <S.Subtitle>Nossa especialidade é...</S.Subtitle>
            <S.Title fontWeight={700}>ESQUADRIAS DE ALUMÍNIO</S.Title>
          </S.InfoTextContent>
        </S.Heading>
        <S.Description>
          <span>
            Se você busca um acabamento sofisticado em sua contrução, as
            esquadrias de alumínio devem fazer parte do seu projeto, e para
            colocar seu projeto em prática é que nós existimos. Com os melhores
            materiais e profissionais, garantimos a sua satisfação!
          </span>

          <img src={frame} alt="Um perfil de uma esquadria cortado ao meio" />
        </S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default Workers;
