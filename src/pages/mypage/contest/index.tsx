import { baseApi } from "@component/api/utils/instance";
import Seo from "@component/components/Seo";
import { ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import ContestCard from "@component/components/contest/ContestCard";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { SearchIcon } from "@component/components/navbar/TopBar.styles";
import { IPoster } from "@component/interfaces/contestInterface";
import { IHost } from "@component/interfaces/contestInterface";
import { ContestNullArea } from "@component/styles/contest/index.styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const SearchInputArea = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 0 10px;
  background-color: #f9f9fa;
`;

const ContestArea = styled.div``;

const SeeMoreArea = styled.div`
  height: 50px;
  margin: 20px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ICompetition {
  competitionId: number;
  host: IHost;
  name: string;
  posters: IPoster[];
  sportCategory: string;
  startDate: string;
}

interface IMyContestList {
  competition: ICompetition;
  joinDate: string;
  type: string;
}

const Index = () => {
  const [myContestList, setMyContestList] = useState<IMyContestList[]>([]);
  const [registerContest, setRegisterContest] = useState<ICompetition[]>([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);
  const [ref, inView] = useInView();
  const router = useRouter();

  function getFormattedDate(inputString: string) {
    const date = new Date(inputString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  }

  async function getMyContest({ page, size }: { page: number; size: number }) {
    if (typeof window !== "undefined") {
      console.log(window.localStorage.getItem("jwt"));
      try {
        if (window.localStorage.getItem("role") === "ROLE_USER") {
          const response = await baseApi.get(
            `competitions/join/slice/${window.localStorage.getItem(
              "uid"
            )}?page=${page}&size=${size}`,
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
              },
            }
          );
          console.log(response);
          setMyContestList(response.data.result.content);
        } else {
          const response = await baseApi.get(
            `competitions/all/${window.localStorage.getItem(
              "uid"
            )}?page=${page}&size=${size}`,
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
              },
            }
          );
          setRegisterContest(response.data.result.content);
          console.log(response);
        }
      } catch (e: any) {
        alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        router.back();
      }
    }
  }

  useEffect(() => {
    if (inView && myContestList.length !== 0) {
      console.log("get more data !");
      setPage((current) => current + 1);
    }
  }, [inView]);

  useEffect(() => {
    getMyContest({ page: page, size: size });
  }, [page, size]);

  return (
    <PageWrapper>
      <Seo
        title={
          typeof window !== "undefined" &&
          window.localStorage.getItem("role") === "ROLE_USER"
            ? "참가 대회"
            : "개최 대회"
        }
      />
      <GoBackHeader
        title={
          typeof window !== "undefined" &&
          window.localStorage.getItem("role") === "ROLE_USER"
            ? "내가 참가한 대회"
            : "내가 개최한 대회"
        }
      />
      <ContentPaddingArea>
        <SearchInputArea>
          <SearchInput
            value={keyword}
            placeholder="대회 검색"
            onChange={(e) => setKeyword(e.currentTarget.value)}
          />
          <SearchIcon />
        </SearchInputArea>
        {/* <ContestArea> */}
        {myContestList.length > 0 ? (
          myContestList
            .filter((contest) => contest.competition.name.includes(keyword))
            .map((myContest, index) => (
              <ContestCard
                key={index}
                tags={["스포츠", "대회"]}
                scrap={false}
                title={myContest.competition.name}
                host={myContest.competition.host.name}
                date={getFormattedDate(myContest.joinDate)}
                contestId={myContest.competition.competitionId}
                imageUrl={
                  myContest.competition.posters.length > 0
                    ? myContest.competition.posters[0].posterUrl
                    : "/images/logo/replace_poster.png"
                }
              />
            ))
        ) : registerContest.length > 0 ? (
          registerContest
            .filter((contest) => contest.name.includes(keyword))
            .map((item, index) => (
              <ContestCard
                key={index}
                tags={["스포츠", "대회"]}
                scrap={false}
                title={item.name}
                host={item.host.name}
                date={getFormattedDate(item.startDate)}
                contestId={item.competitionId}
                imageUrl={
                  item.posters.length > 0
                    ? item.posters[0].posterUrl
                    : "/images/logo/replace_poster.png"
                }
              />
            ))
        ) : typeof window !== "undefined" &&
          window.localStorage.getItem("role") === "ROLE_USER" ? (
          <ContestNullArea>참가한 대회가 존재하지 않습니다.</ContestNullArea>
        ) : (
          <ContestNullArea>개최한 대회가 존재하지 않습니다.</ContestNullArea>
        )}
        <SeeMoreArea ref={ref}></SeeMoreArea>
      </ContentPaddingArea>
    </PageWrapper>
  );
};

export default Index;
