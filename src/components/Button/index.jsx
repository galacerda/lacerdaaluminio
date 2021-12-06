import * as S from "./styled";

export default function Button({
  text,
  onClick,
  borderRadius = "0.5rem",
  bgColor = "yellow",
  bgHover = "#FABE12",
  fontWeight = "500",
  type = "button",
}) {
  return (
    <S.Button
      borderRadius={borderRadius}
      bgColor={bgColor}
      bgHover={bgHover}
      fontWeight={fontWeight}
      type={type}
    >
      {text}
    </S.Button>
  );
}
