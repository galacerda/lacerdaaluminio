import * as S from "./styled";

const worker = "/img/workers.svg";
const frame = "/img/frame.svg";
const Workers = () => {
  return (
    <S.Wrapper>
      <S.ImageWorker>
        <img src={worker} />
      </S.ImageWorker>
      <S.InfoWrapper>
        <S.Heading>
          <S.InfoTextContent>
            <S.Info>Nossa especialidade é</S.Info>
            <S.Info fontWeight={700}>ESQUADRIAS DE ALUMÍNIO</S.Info>
          </S.InfoTextContent>
        </S.Heading>
        <S.Description>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>

          <img src={frame} />
        </S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default Workers;
