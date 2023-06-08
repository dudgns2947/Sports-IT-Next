import React, { useState } from "react";
import * as S from "./TopBar.styles";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { keywordAtom } from "@component/atoms/contestAtom";

const TopBar = () => {
  const router = useRouter();
  const [tempKeyword, setTempKeyword] = useState("");
  const [keyword, setKeyword] = useRecoilState(keywordAtom);
  return (
    <S.TopBar>
      <S.SearchForm
        onSubmit={(e) => {
          e.preventDefault();
          setKeyword(tempKeyword);
          router.push("/contest");
        }}
      >
        <S.SearchInput value={tempKeyword} onChange={(e) => setTempKeyword(e.currentTarget.value)} type="text" placeholder="통합 검색" />
        <S.SearchIcon
          onClick={() => {
            setKeyword(tempKeyword);
            router.push("/contest");
          }}
        />
      </S.SearchForm>
      <S.ButtonArea>
        <S.AlarmButton onClick={() => router.push("/alarm")} />
        <S.MyPageButton onClick={() => router.push("/mypage")} />
      </S.ButtonArea>
    </S.TopBar>
  );
};

export default TopBar;
