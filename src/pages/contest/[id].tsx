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
import { Map } from "@component/components/map/Map";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import Footer from "@component/components/web/footer/Footer";
import ContestDetailLayout from "@component/components/layout/ContestDetailLayout";
import Link from "next/link";
import { InfoMenuType } from "@component/interfaces/contest/contestInterface";
import { Tag, TagArea } from "@component/components/web/contest/Contest.style";

const ContestDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  const token = useRecoilValue(userTokenAtom);
  const [joined, setJoined] = useState(false);
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
  const [latitude, setLatitude] = useState<string>("") || "";
  const [longitude, setLongitude] = useState<string>("") || "";

  const [infoMenu, setInfoMenu] = useState<InfoMenuType>("detail");

  const getDday = (timestamp: number) => {
    // 주어진 타임스탬프 값을 Date 객체로 변환
    const date = new Date(timestamp * 1000);
    // 현재 날짜와 시간을 나타내는 Date 객체 생성
    const today = new Date();
    // 두 날짜 간의 차이 계산
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
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
    try {
      if (typeof window !== "undefined") {
        const response = await baseApi.get(`/competitions/${id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        console.log(response.data);
        setContest(response.data.result);
        setHostName(response.data.result.host.name);
        setTemplateID(response.data.result.templateID);
        setSelectContestID(response.data.result.competitionId);
        window.localStorage.setItem(
          "selectCompetitionId",
          response.data.result.competitionId
        );
        setSelectContestName(response.data.result.name);
        window.localStorage.setItem(
          "selectCompetitionName",
          response.data.result.name
        );
        setJoined(response.data.joined);
        return response.data.result;
      }
    } catch (e) {
      alert(e);
      router.back();
    }
  }

  async function cencelContest() {
    if (confirm("정말 취소하시겠습니까?")) {
      if (typeof window !== "undefined") {
        const response = await baseApi.delete("/competitions/join", {
          data: {
            uid: window.localStorage.getItem("uid"),
            competitionId: id,
          },
        });
        console.log(response);
        if (response.data.success) {
          alert("대회 참가가 취소되었습니다 !");
          router.back();
        }
      }
    }
  }

  async function copyURL() {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        alert("클립보드에 URL이 복사 되었습니다 !");
      }
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      getContestDetail(parseInt(id as string));
    }
  }, [router.isReady]);

  // async function getCoordinates() {
  //   if (contest?.location) {
  //     const coordinates = await fetchGeoCoding(contest?.location);
  //     console.log(coordinates);
  //     if (coordinates && coordinates.x && coordinates.y) {
  //       console.log(coordinates.x, coordinates.y);
  //       setLatitude(coordinates.x);
  //       setLongitude(coordinates.y);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   getCoordinates();
  //   console.log("coordinate :", latitude, longitude);
  // }, [contest?.location, latitude, longitude]);

  return (
    <WebContainer>
      <Header />

      <S.ContestDetailContainer>
        <S.ContestInfoLeft>
          <S.ContestImage
            src={
              contest?.posters[0]
                ? contest?.posters[0].posterUrl
                : "/images/contest/example3.png"
            }
            alt="posterImage"
            width={1000}
            height={1000}
          />
          <S.MenuBar>
            <S.Menu
              active={infoMenu === "detail"}
              onClick={() => setInfoMenu("detail")}
            >
              상세정보
            </S.Menu>
            <S.Menu
              active={infoMenu === "inquiry"}
              onClick={() => setInfoMenu("inquiry")}
            >
              문의
            </S.Menu>
            <S.Menu
              active={infoMenu === "review"}
              onClick={() => setInfoMenu("review")}
            >
              리뷰
            </S.Menu>
            <S.Menu
              active={infoMenu === "notice"}
              onClick={() => setInfoMenu("notice")}
            >
              대회공지
            </S.Menu>
            <S.MenuRemain></S.MenuRemain>
          </S.MenuBar>
          <div></div>
        </S.ContestInfoLeft>
        <S.ContestInfoRight>
          <S.ContestCard>
            <TagArea>
              {getDday(Date.parse(contest?.endDate as string) / 1000) < 8 ? (
                <Tag is_premium={true}>마감임박</Tag>
              ) : null}
              {contest?.categories.map((category) => (
                <Tag key={category.category} is_premium={false}>
                  {category.name}
                </Tag>
              ))}
            </TagArea>
            <S.ContestName>{contest?.name}</S.ContestName>
            <S.ContestHostName>{contest?.host.name}</S.ContestHostName>
            <S.SpaceBetweenAreaWithMargin>
              <S.TotalPrice>
                🏆 {(contest?.totalPrize as number) / 10000}만원
              </S.TotalPrice>
              <S.Dday>
                {`D-${getDday(Date.parse(contest?.endDate as string) / 1000)}`}
              </S.Dday>
            </S.SpaceBetweenAreaWithMargin>
            <S.SpaceBetweenArea>
              <S.ApplyButton>대회 신청하기</S.ApplyButton>
              <S.IconArea>
                <S.ShareIcon></S.ShareIcon>
              </S.IconArea>
              <S.IconArea>
                <S.HeartIcon></S.HeartIcon>
              </S.IconArea>
            </S.SpaceBetweenArea>
          </S.ContestCard>
        </S.ContestInfoRight>
      </S.ContestDetailContainer>
      <Footer />
    </WebContainer>
    // <PageWrapper>
    //   <Seo title="대회 상세정보" />
    //   <GoBackHeader title="대회 상세" />
    //   <ContentPaddingArea>
    //     {contest ? (
    //       <S.ContestArea>
    //         <S.ContestInfo>
    //           <S.ContestTagArea>
    //             {contest.competitionType === "FREE" ? null : (
    //               <S.PremiumTag>프리미엄</S.PremiumTag>
    //             )}
    //             <S.Tag>스포츠</S.Tag>
    //             <S.Tag>대회</S.Tag>
    //           </S.ContestTagArea>
    //           <S.ContestTitle>{contest.name}</S.ContestTitle>
    //           <S.ContestHostArea>
    //             <S.ContestHostName>{contest.host.name}</S.ContestHostName>
    //             <S.PremiumLogo src="/images/logo/premiumLogo.png" />
    //           </S.ContestHostArea>
    //           <S.ContestDday>
    //             {getDday(Date.parse(contest.endDate) / 1000)}
    //           </S.ContestDday>
    //         </S.ContestInfo>
    //         <S.PosterImage
    //           src={
    //             contest.posters[0]
    //               ? contest?.posters[0].posterUrl
    //               : "/images/logo/replace_poster.png"
    //           }
    //         />
    //         <S.DetailWrapper>
    //           <S.DetailTitle>모집 기간</S.DetailTitle>
    //           <S.DetailContent>
    //             {getMonth(contest.recruitingStart)}월{" "}
    //             {getDay(contest.recruitingStart)}일 (
    //             {getDayOfWeek(contest.recruitingStart)}) ~{" "}
    //             {getMonth(contest.recruitingEnd)}월{" "}
    //             {getDay(contest.recruitingEnd)}일 (
    //             {getDayOfWeek(contest.recruitingEnd)})
    //           </S.DetailContent>
    //         </S.DetailWrapper>
    //         <S.DetailWrapper>
    //           <S.DetailTitle>총 상금</S.DetailTitle>
    //           <S.DetailContent>{contest.totalPrize}</S.DetailContent>
    //         </S.DetailWrapper>
    //         <S.DetailWrapper>
    //           <S.DetailTitle>개최 지역</S.DetailTitle>
    //           <S.DetailContent>
    //             {contest.location} {contest.locationDetail}
    //           </S.DetailContent>
    //           {/* <Map
    //             latitude={parseFloat("127.0403496")}
    //             longitude={parseFloat("37.2815219")}
    //             addressName={contest?.location!}
    //           /> */}
    //         </S.DetailWrapper>
    //         <S.DetailWrapper>
    //           <S.DetailTitle>상세 정보</S.DetailTitle>
    //           <S.DetailContent>{contest.content}</S.DetailContent>
    //         </S.DetailWrapper>
    //       </S.ContestArea>
    //     ) : null}
    //   </ContentPaddingArea>
    //   <S.ApplyWrapper>
    //     <S.ApplyBar>
    //       <S.IconArea onClick={() => copyURL()}>
    //         <S.ShareIcon />
    //       </S.IconArea>
    //       {/* <S.IconArea>
    //         <S.MessageIcon />
    //       </S.IconArea> */}
    //       {role === "ROLE_INSTITUTION" && hostName === name ? (
    //         <S.ResultButton
    //           onClick={() => router.push(`/contest/result/${id}`)}
    //         >
    //           대회 결과확인
    //         </S.ResultButton>
    //       ) : joined ? (
    //         <S.ApplyButton onClick={() => cencelContest()}>
    //           대회 취소하기
    //         </S.ApplyButton>
    //       ) : (
    //         <S.ApplyButton
    //           onClick={() => router.push("/participate/choice-role")}
    //         >
    //           대회 신청하기
    //         </S.ApplyButton>
    //       )}
    //       {/* <S.ApplyButton
    //         onClick={() => router.push("/participate/choice-role")}
    //       >
    //         대회 신청하기
    //       </S.ApplyButton> */}
    //     </S.ApplyBar>
    //   </S.ApplyWrapper>
    // </PageWrapper>
  );
};

export default ContestDetail;
