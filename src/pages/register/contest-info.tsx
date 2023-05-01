import {
  contestMaxNumOfAudience,
  contestMaxNumOfPlayers,
} from "@component/atoms/contestAtom";
import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import { useRecoilValue } from "recoil";
import { Input, InputArea, InputTitle } from "./headcount.styles";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "./contest-info.styles";

const ContestInfo = () => {
  return (
    <PageWrapper as="form">
      <Seo title="대회 정보 입력" />
      <GoBackHeader title="대회 등록" />
      <S.InputWrapper>
        <InputArea>
          <InputTitle>대회 제목</InputTitle>
          <Input
            type="text"
            placeholder="ex) 제 1회 스포츠잇 대표 선발전"
          ></Input>
        </InputArea>
        <InputArea>
          <InputTitle>대회 기관(단체)명</InputTitle>
          <Input type="text" placeholder="ex) 스포츠잇"></Input>
        </InputArea>
        <InputArea>
          <InputTitle>모집 기간</InputTitle>
          <S.SmallInputWrapper>
            <S.SmallInput type="date" />
            <S.Text>부터</S.Text>
            <S.SmallInput type="date" />
            <S.Text>까지</S.Text>
          </S.SmallInputWrapper>
        </InputArea>
        <InputArea>
          <InputTitle>시상</InputTitle>
          <S.LargeInput type="text" />
        </InputArea>
        <InputArea>
          <InputTitle>개최 장소</InputTitle>
          <Input type="text" placeholder="장소 검색" />
          <Input type="text" placeholder="상세 주소 입력" />
        </InputArea>
      </S.InputWrapper>

      <NavBar active={true} />
    </PageWrapper>
  );
};

export default ContestInfo;
