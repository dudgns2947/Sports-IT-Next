import React from "react";
import * as S from "./ContestDetail.style";
import { IContestInfo } from "@component/interfaces/contestInterface";

const ContestDetail = ({ contest }: { contest: IContestInfo }) => {
  const getMonth = (str: string) => {
    const date = new Date(str);
    return date.getMonth() + 1;
  };

  const getDay = (str: string) => {
    const date = new Date(str);
    return date.getDate();
  };

  const getDayOfWeek = (str: string) => {
    const date = new Date(str);
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  };
  return (
    <>
      <S.DetailWrapper>
        <S.DetailTitle>모집 기간</S.DetailTitle>
        <S.DetailContent>
          {getMonth(contest?.recruitingStart as string)}월{" "}
          {getDay(contest?.recruitingStart as string)}일 (
          {getDayOfWeek(contest?.recruitingStart as string)}) ~{" "}
          {getMonth(contest?.recruitingEnd as string)}월{" "}
          {getDay(contest?.recruitingEnd as string)}일 (
          {getDayOfWeek(contest?.recruitingEnd as string)})
        </S.DetailContent>
      </S.DetailWrapper>
      <S.DetailWrapper>
        <S.DetailTitle>총 상금</S.DetailTitle>
        <S.DetailContent>{contest?.totalPrize}</S.DetailContent>
      </S.DetailWrapper>
      <S.DetailWrapper>
        <S.DetailTitle>개최 지역</S.DetailTitle>
        <S.DetailContent>
          {contest?.location} {contest?.locationDetail}
        </S.DetailContent>
      </S.DetailWrapper>
      <S.DetailWrapper>
        <S.DetailTitle>상세 정보</S.DetailTitle>
        <S.DetailContent>{contest?.content}</S.DetailContent>
      </S.DetailWrapper>
    </>
  );
};

export default ContestDetail;
