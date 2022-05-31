import * as S from "./styled";

type SectionImage = {
  img: string;
};

const SectionImage = ({ img }: SectionImage) => {
  return (
    <S.Section>
      <img src={img} />
    </S.Section>
  );
};

export default SectionImage;
