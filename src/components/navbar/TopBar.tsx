import React from "react";
import * as S from "./TopBar.styles";
import { useRouter } from "next/router";

const TopBar = () => {
  const router = useRouter();
  return (
    <S.TopBar>
      <S.SearchForm>
        <S.SearchInput type="text" placeholder="통합 검색" />
        <S.SearchButton>
          <S.SearchIcon />
        </S.SearchButton>
      </S.SearchForm>
      <S.ButtonArea>
        <S.AlarmButton />
        <S.MyPageButton onClick={() => router.push("/mypage")} />
      </S.ButtonArea>
    </S.TopBar>
  );
};

export default TopBar;
