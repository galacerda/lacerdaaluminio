import * as S from "./styled";

type ButtonProps = {
  text: string;
  borderRadius?: string;
  bgColor?: string;
  bgHover?: string;
  fontWeight?: string;
  type?: string;
};

export default function Button({
  text,
  borderRadius = "0.5rem",
  bgColor = "orange",
  bgHover = "#D73A08",
  fontWeight = "500",
  type = "button",
}: ButtonProps) {
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
