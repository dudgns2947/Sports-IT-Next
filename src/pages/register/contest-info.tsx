import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Input, InputArea, InputTitle } from "./headcount.styles";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "./contest-info.styles";
import Link from "next/link";
import { ContentArea } from "@component/components/area/areaComponent";
import {
  contestLocationAtom,
  contestLocationDetailAtom,
  contestNameAtom,
  contestRecruitingEndAtom,
  contestRecruitingStartAtom,
  contestTotalPrizeAtom,
} from "@component/atoms/contestAtom";

const ContestInfo = () => {
  const [contestName, setContestName] = useRecoilState(contestNameAtom);
  const [recruitingStart, setRecruitingStart] = useRecoilState(
    contestRecruitingStartAtom
  );
  const [recruitingEnd, setRecruitingEnd] = useRecoilState(
    contestRecruitingEndAtom
  );
  const [totalPrize, setTotalPrize] = useRecoilState(contestTotalPrizeAtom);
  const [location, setLocation] = useRecoilState(contestLocationAtom);
  const [locationDetail, setLocationDetail] = useRecoilState(
    contestLocationDetailAtom
  );
  return (
    <PageWrapper as="form">
      <Seo title="대회 정보 입력" />
      <GoBackHeader title="대회 등록" />
      <ContentArea>
        {/* <S.InputWrapper> */}
        <InputArea>
          <InputTitle>대회 제목</InputTitle>
          <Input
            type="text"
            placeholder="ex) 제 1회 스포츠잇 대표 선발전"
            onChange={(e) => setContestName(e.currentTarget.value)}
          ></Input>
        </InputArea>
        {/* <InputArea>
          <InputTitle>대회 기관(단체)명</InputTitle>
          <Input type="text" placeholder="ex) 스포츠잇"></Input>
        </InputArea> */}
        <InputArea>
          <InputTitle>모집 기간</InputTitle>
          <S.SmallInputWrapper>
            <S.SmallInput
              onChange={(e) => setRecruitingStart(e.currentTarget.value)}
              type="date"
            />
            <S.Text>부터</S.Text>
            <S.SmallInput
              onChange={(e) => setRecruitingEnd(e.currentTarget.value)}
              type="date"
            />
            <S.Text>까지</S.Text>
          </S.SmallInputWrapper>
        </InputArea>
        <InputArea>
          <InputTitle>총 상금</InputTitle>
          <S.LargeInput
            type="number"
            onChange={(e) => setTotalPrize(parseInt(e.currentTarget.value))}
          />
        </InputArea>
        <InputArea>
          <InputTitle>개최 장소</InputTitle>
          <Input
            type="text"
            placeholder="장소 검색"
            onChange={(e) => setLocation(e.currentTarget.value)}
          />
          <Input
            type="text"
            placeholder="상세 주소 입력"
            onChange={(e) => setLocationDetail(e.currentTarget.value)}
          />
        </InputArea>
        {/* </S.InputWrapper> */}
      </ContentArea>

      <Link href="/register/contest-detail">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default ContestInfo;
