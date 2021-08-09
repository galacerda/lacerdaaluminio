import * as S from "./styled";
import Heading from "../Heading";

const WhoAreUs = () => {
  return (
    <S.Wrapper>
      <Heading lineLeft>Quem somos nós</Heading>
      <S.Content>
        <S.Description>
          <p>
            Somos uma empresa especializada na produção de esquadrias de
            alumínio, totalmente focada em atender com excelência nossos
            clientes. Nossa maior motivação é concretizar nossos projetos,
            buscando não só entregar o resultado sonhado pelo nosso cliente,
            como também superando suas expectativas. Acreditamos que sempre
            podemos ir além do esperado, e nos superarmos em cada novo projeto!
          </p>
        </S.Description>
      </S.Content>
    </S.Wrapper>
  );
};

export default WhoAreUs;
