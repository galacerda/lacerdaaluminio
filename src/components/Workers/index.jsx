import MediaMatch from "../MediaMatch";
import * as S from "./styled";

const worker = "/img/workers.svg";
const frame = "/img/frame.svg";
const Workers = () => {
  return (
    <S.Wrapper>
      <MediaMatch greaterThan="medium">
        <S.ImageWorker>
          <img src={worker} />
        </S.ImageWorker>
      </MediaMatch>
      <S.InfoWrapper>
        <S.Heading>
          <S.InfoTextContent>
            <S.Info>Nossa especialidade é...</S.Info>
            <S.Info
              fontWeight={700}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset="200"
            >
              ESQUADRIAS DE ALUMÍNIO
            </S.Info>
          </S.InfoTextContent>
        </S.Heading>
        <S.Description
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-offset="300"
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>

          <img
            src={frame}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-offset="200"
          />
        </S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default Workers;
