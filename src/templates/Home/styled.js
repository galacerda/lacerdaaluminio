import styled from "styled-components";
import media from "styled-media-query";
import { Mail } from "@styled-icons/entypo/Mail";
import { defaultTheme } from "../../styles/defaultTheme";

const houseBg = "/img/houseBg.jpg";

export const Wrapper = styled.div``;

export const HeaderContact = styled.div`
  background-color: ${defaultTheme.colors.black};
  padding: 2rem 3rem;
  display: flex;
  span {
    padding-left: 1rem;
    font-size: 1.6;
    font-weight: 500;
    color: ${defaultTheme.colors.white};
  }
  align-items: center;
  justify-content: flex-end;

  ${media.lessThan("medium")`
  display: none;
    span,img{
      display: none;
    }
  `}
`;

export const WrapperLogo = styled.div`
  padding: 10rem 0 5rem 0;
`;

export const CarouselWrapper = styled.div`
  background-image: url(${houseBg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 15rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-family: "Poppins";
  }
  ${media.lessThan("1600px")`
    padding-bottom: 10rem;
  `}
  ${media.lessThan("medium")`
    height: 70vh;
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
  ${media.lessThan("1600px")`
      padding: 2rem;
  `}
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
`;

export const ButtonWrapper = styled.div`
  margin-top: 12.5rem;
  ${media.lessThan("1600px")`
    margin-top: 10rem;
  `}
`;

export const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const SeiLa = styled.div`
  width: 100%;
  text-align: center;
`;

export const SlideText = styled.span`
  font-size: 3.4rem;
  color: ${defaultTheme.colors.white};
  span {
    color: ${defaultTheme.colors.yellow};
  }
`;

export const MailIcon = styled(Mail)`
  width: 2rem;
  color: ${defaultTheme.colors.yellow};
`;
