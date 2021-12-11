import styled from "styled-components";
import media from "styled-media-query";
import { Mail } from "@styled-icons/entypo/Mail";
import { defaultTheme } from "../../styles/defaultTheme";

const houseBg = "/img/houseBg.svg";

export const Wrapper = styled.div``;

export const HeaderContact = styled.div`
  background-color: ${defaultTheme.colors.gray};
  height: 4rem;
  padding: 0 2rem;
  display: flex;
  span {
    padding-left: 0.5rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${defaultTheme.colors.white};
  }
  img {
    width: 2rem;
    margin-left: 2rem;
  }
  align-items: center;
  justify-content: flex-end;

  ${media.lessThan("medium")`
  justify-content:center;
  gap:1.5rem;
  padding: 0 1rem;
  span {
    padding-left: 0.5rem;
    font-size: 1.1rem;
  }
  img {
    width: 1.5rem;
    margin-left: 0;
  }
  `}
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  img {
    width: 40rem;
  }
  ${media.lessThan("medium")`
    img {
      width: 35rem;
    }
  `}
`;

export const HeaderCarousel = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${houseBg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 65vh;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  span {
    font-family: "Poppins";
  }

  ${media.lessThan("medium")`
    padding:0 2rem;
    height: 95vh;
  `}
`;

export const BudgetWrapper = styled.div`
  padding: 3rem;
  background-color: ${defaultTheme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  span {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    padding-right: 3rem;
  }

  ${media.lessThan("medium")`
   span{
     padding: 0 0 2rem 0;
   }
  `}
`;

export const MoreAbout = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  ${media.lessThan("medium")`
    margin-top: 5rem;
  `}
  text-align:center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const SliderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const SlideText = styled.span`
  font-size: 3rem;
  color: ${defaultTheme.colors.white};
  span {
    color: ${defaultTheme.colors.orange};
    font-weight: 600;
  }
  ${media.lessThan("medium")`
    font-size: 2rem;
  `}
`;

export const MailIcon = styled(Mail)`
  width: 2rem;
  color: ${defaultTheme.colors.orange};
`;
