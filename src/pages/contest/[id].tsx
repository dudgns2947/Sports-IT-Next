import { baseApi } from "@component/api/utils/instance";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import Contest from "@component/components/contest/Contest";
import ContestInfo from "@component/components/contest/ContestInfo";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { IContestInfo, IHost } from "@component/interfaces/contestInterface";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "../../styles/contest/[id].styles";
import {
  selectContestIdAtom,
  selectContestNameAtom,
  templateIdAtom,
} from "@component/atoms/contestAtom";
import { roleAtom } from "@component/atoms/roleAtom";

const ContestDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  const token = useRecoilValue(userTokenAtom);
  const [contest, setContest] = useState<IContestInfo>();
  const [templateID, setTemplateID] = useRecoilState(templateIdAtom);
  const [selectContestID, setSelectContestID] =
    useRecoilState(selectContestIdAtom);
  const [selectContestName, setSelectContestName] = useRecoilState(
    selectContestNameAtom
  );
  const [hostName, setHostName] = useState("");
  const role =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : "";
  const name =
    typeof window !== "undefined" ? window.localStorage.getItem("name") : "";

  const getDday = (timestamp: number) => {
    // 주어진 타임스탬프 값을 Date 객체로 변환
    const date = new Date(timestamp * 1000);
    // 현재 날짜와 시간을 나타내는 Date 객체 생성
    const today = new Date();
    // 두 날짜 간의 차이 계산
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return `D-${diffDays}`;
  };

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

  async function getContestDetail(id: number) {
    const response = await baseApi.get(`/competitions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    setContest(response.data);
    setHostName(response.data.host.name);
    setTemplateID(response.data.templateID);
    setSelectContestID(response.data.competitionId);
    setSelectContestName(response.data.name);
  }

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      getContestDetail(parseInt(id as string));
    }
  }, [router.isReady]);

  return (
    <PageWrapper>
      <Seo title="대회 상세정보" />
      <GoBackHeader title="대회 상세" />
      <ContentPaddingArea>
        {contest ? (
          <S.ContestArea>
            <S.ContestInfo>
              <S.ContestTagArea>
                {contest.competitionType === "FREE" ? null : (
                  <S.PremiumTag>프리미엄</S.PremiumTag>
                )}
                <S.Tag>스포츠</S.Tag>
                <S.Tag>대회</S.Tag>
              </S.ContestTagArea>
              <S.ContestTitle>{contest.name}</S.ContestTitle>
              <S.ContestHostArea>
                <S.ContestHostName>{contest.host.name}</S.ContestHostName>
                <S.PremiumLogo src="/images/logo/premiumLogo.png" />
              </S.ContestHostArea>
              <S.ContestDday>
                {getDday(Date.parse(contest.endDate) / 1000)}
              </S.ContestDday>
            </S.ContestInfo>
            <S.PosterImage
              src={
                contest.posters[0]
                  ? contest?.posters[0].posterUrl
                  : "/images/logo/replace_poster.png"
              }
            />
            <S.DetailWrapper>
              <S.DetailTitle>모집 기간</S.DetailTitle>
              <S.DetailContent>
                {getMonth(contest.recruitingStart)}월{" "}
                {getDay(contest.recruitingStart)}일 (
                {getDayOfWeek(contest.recruitingStart)}) ~{" "}
                {getMonth(contest.recruitingEnd)}월{" "}
                {getDay(contest.recruitingEnd)}일 (
                {getDayOfWeek(contest.recruitingEnd)})
              </S.DetailContent>
            </S.DetailWrapper>
            <S.DetailWrapper>
              <S.DetailTitle>총 상금</S.DetailTitle>
              <S.DetailContent>{contest.totalPrize}</S.DetailContent>
            </S.DetailWrapper>
            <S.DetailWrapper>
              <S.DetailTitle>개최 지역</S.DetailTitle>
              <S.DetailContent>
                {contest.location} {contest.locationDetail}
              </S.DetailContent>
            </S.DetailWrapper>
            <S.DetailWrapper>
              <S.DetailTitle>상세 정보</S.DetailTitle>
              <S.DetailContent>{contest.content}</S.DetailContent>
            </S.DetailWrapper>
          </S.ContestArea>
        ) : null}
      </ContentPaddingArea>
      <S.ApplyWrapper>
        <S.ApplyBar>
          <S.IconArea>
            <S.ShareIcon />
          </S.IconArea>
          {/* <S.IconArea>
            <S.MessageIcon />
          </S.IconArea> */}
          {role === "ROLE_INSTITUTION" && hostName === name ? (
            <S.ResultButton
              onClick={() => router.push(`/contest/result/${id}`)}
            >
              대회 결과확인
            </S.ResultButton>
          ) : (
            <S.ApplyButton
              onClick={() => router.push("/participate/choice-role")}
            >
              대회 신청하기
            </S.ApplyButton>
          )}
          {/* <S.ApplyButton
            onClick={() => router.push("/participate/choice-role")}
          >
            대회 신청하기
          </S.ApplyButton> */}
        </S.ApplyBar>
      </S.ApplyWrapper>
    </PageWrapper>
  );
};

export default ContestDetail;
