import Heading from "../Heading";
import * as S from "./styled";

const frame = "/img/frame2.svg";

const BudgetForm = () => {
  return (
    <S.Wrapper>
      <Heading lineLeft>Solicite um orçamento</Heading>
      <S.Content>
        <S.Frame>
          <img src={frame} />
        </S.Frame>
        <S.Form></S.Form>
      </S.Content>
    </S.Wrapper>
  );
};

export default BudgetForm;
