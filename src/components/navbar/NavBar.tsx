import React from "react";
import * as S from "./NavBarStyles";
import { NavProps } from "@component/interfaces/navInterface";

const NavBar = ({ active }: NavProps) => {
  return (
    <S.NavArea disabled={!active} active={active}>
      <S.NavText active={active}>다음</S.NavText>
    </S.NavArea>
  );
};

export default NavBar;
