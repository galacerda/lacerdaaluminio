import React from "react";
import * as S from "./styled";

const LoadingScreen = () => {
  return (
    <S.Screen>
      <S.Balls>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
      </S.Balls>
    </S.Screen>
  );
};

export default LoadingScreen;
