import MediaMatch from "../MediaMatch";
import * as S from "./styled";

const worker = "/img/workers.svg";
const frame = "/img/frame.svg";
const img1 = "img/esquadria.png";
const img2 = "img/vidro.jpg";
const img3 = "img/box.jpg";
const img4 = "img/guardaCorpo.jpg";

const Workers = () => {
  return (
    <S.Wrapper>
      {/* <MediaMatch greaterThan="medium">
        <S.ImageWorker>
          <img
            src={worker}
            alt="Dois trabalhadores segurando uma janela de esquadria de aluminio"
          />
        </S.ImageWorker>
      </MediaMatch> */}
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

          {/* <img src={frame} alt="Um perfil de uma esquadria cortado ao meio" /> */}
          <S.List>
            <S.ListItem>Melhores fornecedores</S.ListItem>
            <S.ListItem>Técnicos especiazados</S.ListItem>
            <S.ListItem>Projeto sob medida</S.ListItem>
          </S.List>
        </S.Description>
      </S.InfoWrapper>
      <S.ProductsWrapper>
        <S.ListProducts>
          <S.ProductItem>
            <img src={img1} />
            <S.DescriptionProduct>
              <span>Esquadrias de alumínio</span>
            </S.DescriptionProduct>
          </S.ProductItem>
          <S.ProductItem>
            <img src={img2} />
            <S.DescriptionProduct>
              <span>Esquadrias com vidro temperado</span>
            </S.DescriptionProduct>
          </S.ProductItem>
          <S.ProductItem>
            <img src={img3} />
            <S.DescriptionProduct>
              <span>Box</span>
            </S.DescriptionProduct>
          </S.ProductItem>
          <S.ProductItem>
            <img src={img4} />
            <S.DescriptionProduct>
              <span>Guarda corpo</span>
            </S.DescriptionProduct>
          </S.ProductItem>
        </S.ListProducts>
      </S.ProductsWrapper>
    </S.Wrapper>
  );
};

export default Workers;
