import * as S from "./styled";
export default function WhatsAppLink() {
  return (
    <S.Wrapper href="https://wa.me/5519994419605" target="__blank">
      <S.WhatsAppLogo
        src="/img/whatsAppLogo.svg"
        alt="Ícone do Whatsapp, um circulo verde com um telefone envolto de um circilo branco que lembra um Q ao contrario"
      />
    </S.Wrapper>
  );
}
