import * as S from "./styled";

type SectionImage = {
  img: string;
  fixed: boolean;
};

const SectionImage = ({ img, fixed = false }: SectionImage) => {
  <S.SectionImage image={img} fixed={fixed} />;
};

export default SectionImage;
