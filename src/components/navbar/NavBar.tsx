import React from "react";
import * as S from "./NavBar.styles";
import { NavBarProps, NavProps } from "@component/interfaces/navInterface";

const NavBar = ({ active, navText }: NavBarProps) => {
  return (
    <S.NavArea disabled={!active} active={active}>
      <S.NavText active={active}>{navText}</S.NavText>
    </S.NavArea>
  );
};

export default NavBar;
