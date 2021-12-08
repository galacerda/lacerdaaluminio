import * as S from "./styled";

type HenadingProps = {
  children: React.ReactNode;
  lineLeft: boolean;
  lineBottom: boolean;
};

const Heading = ({ children, lineLeft, lineBottom }: HenadingProps) => {
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
