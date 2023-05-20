import React from "react";
import * as S from "./TopBar.styles";

const TopBar = () => {
  return (
    <S.TopBar>
      <S.SearchForm>
        <S.SearchInput type="text" placeholder="통합 검색" />
        <S.SearchButton>
          <S.SearchIcon />
        </S.SearchButton>
      </S.SearchForm>
      <S.AlarmButton />
      <S.MyPageButton />
    </S.TopBar>
  );
};

export default TopBar;
