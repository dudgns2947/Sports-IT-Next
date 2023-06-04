import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Input, InputArea, InputTitle } from "../../styles/register/headcount.styles";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "../../styles/register/contest-info.styles";
import Link from "next/link";
import { ContentArea, ContentPaddingArea } from "@component/components/area/areaComponent";
import {
  contestEndDateAtom,
  contestLocationAtom,
  contestLocationDetailAtom,
  contestNameAtom,
  contestRecruitingEndAtom,
  contestRecruitingStartAtom,
  contestStartDateAtom,
  contestTotalPrizeAtom,
} from "@component/atoms/contestAtom";

const ContestInfo = () => {
  const [contestName, setContestName] = useRecoilState(contestNameAtom);
  const [startDate, setStartDate] = useRecoilState(contestStartDateAtom);
  const [endDate, setEndDate] = useRecoilState(contestEndDateAtom);
  const [recruitingStart, setRecruitingStart] = useRecoilState(contestRecruitingStartAtom);
  const [recruitingEnd, setRecruitingEnd] = useRecoilState(contestRecruitingEndAtom);
  const [totalPrize, setTotalPrize] = useRecoilState(contestTotalPrizeAtom);
  const [location, setLocation] = useRecoilState(contestLocationAtom);
  const [locationDetail, setLocationDetail] = useRecoilState(contestLocationDetailAtom);

  console.log(contestName);
  console.log(startDate);
  console.log(endDate);
  console.log(recruitingStart);
  console.log(recruitingEnd);
  console.log(totalPrize);
  console.log(location);
  console.log(locationDetail);
  return (
    <PageWrapper as="form">
      <Seo title="대회 정보 입력" />
      <GoBackHeader title="대회 등록" />
      <ContentPaddingArea>
        {/* <S.InputWrapper> */}
        <InputArea>
          <InputTitle>대회 제목</InputTitle>
          <Input type="text" placeholder="ex) 제 1회 스포츠잇 대표 선발전" onChange={(e) => setContestName(e.currentTarget.value)}></Input>
        </InputArea>
        {/* <InputArea>
          <InputTitle>대회 기관(단체)명</InputTitle>
          <Input type="text" placeholder="ex) 스포츠잇"></Input>
        </InputArea> */}
        <InputArea>
          <InputTitle>대회 일정</InputTitle>
          <S.SmallInputWrapper>
            <S.SmallInput onChange={(e) => setStartDate(new Date(e.currentTarget.value).toISOString())} type="date" />
            <S.Text>부터</S.Text>
            <S.SmallInput onChange={(e) => setEndDate(new Date(e.currentTarget.value).toISOString())} type="date" />
            <S.Text>까지</S.Text>
          </S.SmallInputWrapper>
        </InputArea>
        <InputArea>
          <InputTitle>모집 기간</InputTitle>
          <S.SmallInputWrapper>
            <S.SmallInput onChange={(e) => setRecruitingStart(new Date(e.currentTarget.value).toISOString())} type="date" />
            <S.Text>부터</S.Text>
            <S.SmallInput onChange={(e) => setRecruitingEnd(new Date(e.currentTarget.value).toISOString())} type="date" />
            <S.Text>까지</S.Text>
          </S.SmallInputWrapper>
        </InputArea>
        <InputArea>
          <InputTitle>총 상금</InputTitle>
          <S.LargeInput type="number" placeholder="ex) 10,000,000" onChange={(e) => setTotalPrize(parseInt(e.currentTarget.value))} />
        </InputArea>
        <InputArea>
          <InputTitle>개최 장소</InputTitle>
          <Input type="text" placeholder="장소 검색" onChange={(e) => setLocation(e.currentTarget.value)} />
          <Input type="text" placeholder="상세 주소 입력" onChange={(e) => setLocationDetail(e.currentTarget.value)} />
        </InputArea>
        {/* </S.InputWrapper> */}
      </ContentPaddingArea>

      <Link href="/register/contest-detail">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default ContestInfo;
