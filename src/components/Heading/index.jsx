import * as S from "./styled";

const Heading = ({ children, lineLeft, lineBottom }) => {
  return (
    <S.Heading lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Heading>
  );
};

export default Heading;

Heading.defaultProps = {
  text: "",
  lineLeft: false,
  lineBottom: false,
};
