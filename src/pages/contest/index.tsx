import { getContestList } from "@component/api/contest/contestApi";
import { baseApi } from "@component/api/utils/instance";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import {
  FilterType,
  IContestInfo,
  IContestParams,
  ISearchInput,
} from "@component/interfaces/contestInterface";
import React, { use, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, SetRecoilState } from "recoil";
import { AiOutlineDown } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import * as S from "../../styles/contest/index.styles";
import { useForm } from "react-hook-form";
import qs from "qs";
import FilterButton from "@component/components/button/FilterButton";
import { useRouter } from "next/router";
import BottomBar from "@component/components/navbar/BottomBar";
import Contest from "@component/components/contest/Contest";
import { roleAtom } from "@component/atoms/roleAtom";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { keywordAtom } from "@component/atoms/contestAtom";
import { ContestAreaTwo, WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import Footer from "@component/components/web/footer/Footer";
import ContestCard from "@component/components/web/contest/Contest";
import FilterBox from "@component/components/web/checkbox/FilterBox";
// import { useVirtualizer } from "@tanstack/react-virtual";

type OrderType = "viewCount" | "createdDate" | "scrapCount";

const Options = [
  { value: "createdDate", name: "최신순" },
  { value: "scrapCount", name: "좋아요순" },
  { value: "viewCount", name: "조회순" },
];

const Index = () => {
  const { register, handleSubmit, setValue, watch } = useForm<ISearchInput>();
  const [keyword, setKeyword] = useRecoilState(keywordAtom);
  const [filterBy, setFilterBy] = useState<FilterType[]>([]);
  const [orderBy, setOrderBy] = useState("createdDate");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [contestList, setContestList] = useState<IContestInfo[]>([]);
  const [token, setToken] = useRecoilState(userTokenAtom);
  const [role, setRole] = useRecoilState(roleAtom);
  if (typeof window !== "undefined") {
    let role: string | null = window.localStorage.getItem("role");
    if (role === null) {
      role = "ROLE_USER";
    }
    setToken(window.localStorage.getItem("token"));
    setRole(role as "ROLE_USER" | "ROLE_INSTITUTION");
  }
  const [isFresh, setIsFresh] = useState(true);
  const [ref, inView] = useInView();

  const router = useRouter();

  async function getContest(contestProps: IContestParams) {
    if (typeof window !== "undefined") {
      try {
        const response = await baseApi.get("competitions/slice", {
          headers: {
            Authorization: `Bearer ${contestProps.token}`,
          },
          params: {
            keyword: contestProps.keyword,
            filterBy: contestProps.filterBy,
            orderBy: contestProps.orderBy,
            page: contestProps.page,
            size: contestProps.size,
          },
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        });
        console.log(response);
        // setContestList((current) => [...current, ...response.data.content]);
        setContestList(response.data.result.content);
        await console.log(contestList);
      } catch (e) {
        alert(e);
        router.back();
      }
    }
  }

  async function getContestMore(contestProps: IContestParams) {
    const response = await baseApi.get("competitions/slice", {
      headers: {
        Authorization: `Bearer ${contestProps.token}`,
      },
      params: {
        keyword: contestProps.keyword,
        filterBy: contestProps.filterBy,
        orderBy: contestProps.orderBy,
        page: contestProps.page,
        size: contestProps.size,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    });
    console.log(response);
    setContestList((current) => [...current, ...response.data.content]);
    // setContestList(response.data.content);
    await console.log(contestList);
  }

  const onValid = (data: ISearchInput) => {
    setIsFresh(true);
    setPage(0);
    setKeyword(data.keyword);
    setValue("keyword", "");
  };

  // const onClickTotal = () => {
  //   setIsFresh(true);
  //   setPage(0);
  //   if (
  //     filterBy.includes("recruitingEnd") &&
  //     filterBy.includes("totalPrize") &&
  //     filterBy.includes("recommend")
  //   ) {
  //     let newFilterBy = [...filterBy];
  //     newFilterBy = newFilterBy.filter((item) => item !== "recruitingEnd");
  //     newFilterBy = newFilterBy.filter((item) => item !== "totalPrize");
  //     newFilterBy = newFilterBy.filter((item) => item !== "recommend");
  //     setFilterBy(newFilterBy);
  //   } else if (
  //     filterBy.includes("recruitingEnd") ||
  //     filterBy.includes("totalPrize") ||
  //     filterBy.includes("recommend")
  //   ) {
  //     let newFilterBy = [...filterBy];
  //     if (!newFilterBy.includes("recruitingEnd")) {
  //       newFilterBy.push("recruitingEnd");
  //     }
  //     if (!newFilterBy.includes("totalPrize")) {
  //       newFilterBy.push("totalPrize");
  //     }
  //     if (!newFilterBy.includes("recommend")) {
  //       newFilterBy.push("recommend");
  //     }
  //     setFilterBy(newFilterBy);
  //   } else {
  //     const newFilterBy = [...filterBy];
  //     newFilterBy.push("recruitingEnd");
  //     newFilterBy.push("totalPrize");
  //     newFilterBy.push("recommend");
  //     setFilterBy(newFilterBy);
  //   }
  // };

  useEffect(() => {
    getContest({
      token: token,
      keyword: keyword,
      filterBy: filterBy,
      orderBy: orderBy,
      page: page,
      size: size,
    });
  }, [keyword, filterBy, orderBy]);

  // useEffect(() => {
  //   if (!isFresh) {
  //     getContestMore({
  //       token: token,
  //       keyword: keyword,
  //       filterBy: filterBy,
  //       orderBy: orderBy,
  //       page: page,
  //       size: size,
  //     });
  //   }
  // }, [page, size]);

  // useEffect(() => {
  //   if (inView && contestList && contestList.length !== 0) {
  //     console.log("get more data !");
  //     setIsFresh(false);
  //     setPage((current) => current + 1);
  //   }
  // }, [inView]);

  console.log(contestList);
  console.log(filterBy);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <WebContainer>
        <Header />
        <main
          style={{
            padding: "0 11%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <S.AsideContainer>
            <S.AsideContent>
              <S.FilterCategory>상태</S.FilterCategory>
              <FilterBox
                filterKeyword="RECRUITING"
                filterContent="모집중"
                filterBy={filterBy}
                setFilterBy={setFilterBy}
              />
              <FilterBox
                filterKeyword="RECRUITING_END"
                filterContent="모집 완료"
                filterBy={filterBy}
                setFilterBy={setFilterBy}
              />
              <FilterBox
                filterKeyword="IN_PROGRESS"
                filterContent="진행중"
                filterBy={filterBy}
                setFilterBy={setFilterBy}
              />
              <FilterBox
                filterKeyword="END"
                filterContent="종료"
                filterBy={filterBy}
                setFilterBy={setFilterBy}
              />
            </S.AsideContent>
            <S.AsideContent>
              <S.FilterCategory>카테고리</S.FilterCategory>
              {/* <S.FilterLabel htmlFor="END">
                <S.FilterInput
                  type="checkbox"
                  name="status"
                  value="END"
                  id="END"
                />
                팔씨름
              </S.FilterLabel>
              <S.FilterLabel htmlFor="END">
                <S.FilterInput
                  type="checkbox"
                  name="status"
                  value="END"
                  id="END"
                />
                수영
              </S.FilterLabel> */}
            </S.AsideContent>
          </S.AsideContainer>
          <section>
            <S.ContestArea>
              {contestList.map((contest) => (
                <ContestCard
                  key={contest.competitionId}
                  posterImageUrl={
                    contest.posters.length === 0
                      ? ""
                      : contest.posters[0].posterUrl
                  }
                  competitionId={contest.competitionId}
                  competitionType={contest.competitionType}
                  name={contest.name}
                  host={contest.host}
                  recruitingEnd={contest.recruitingEnd}
                  showImage={true}
                />
              ))}
            </S.ContestArea>
          </section>
        </main>
        <Footer />
      </WebContainer>
      {/* <PageWrapper>
        <Seo title="대회" />
        <S.TopBar>
          <S.SearchForm onSubmit={handleSubmit(onValid)}>
            <S.SearchInput
              {...register("keyword")}
              type="text"
              placeholder="통합 검색"
            />
            
            <S.SearchIcon
              onClick={() => {
                setIsFresh(true);
                setPage(0);
                setKeyword(watch().keyword);
                setValue("keyword", "");
              }}
            />

          </S.SearchForm>
          <S.ButtonArea>
            <S.AlarmButton onClick={() => router.push("/alarm")} />
            <S.MyPageButton onClick={() => router.push("/mypage")} />
          </S.ButtonArea>
        </S.TopBar>
        <S.Container>
          <S.TopWrapper>
            <S.FilterButtonArea>
              <S.TotalButton
                active={
                  filterBy.includes("recruitingEnd") &&
                  filterBy.includes("totalPrize") &&
                  filterBy.includes("recommend")
                }
                onClick={onClickTotal}
              >
                전체
              </S.TotalButton>
              <FilterButton
                setIsFresh={setIsFresh}
                setPage={setPage}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                filterKeyWord="recruitingEnd"
                filterContent="마감 임박 ⏰"
              />
              <FilterButton
                setIsFresh={setIsFresh}
                setPage={setPage}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                filterKeyWord="totalPrize"
                filterContent="높은 상금 💰"
              />
              <FilterButton
                setIsFresh={setIsFresh}
                setPage={setPage}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                filterKeyWord="recommend"
                filterContent="추천 대회 🏆"
              />
            </S.FilterButtonArea>
          </S.TopWrapper>

          <S.ContentArea>
            <S.OrderArea>
              <S.Filter>
                <S.FilterIcon />
                <S.OrderText>필터</S.OrderText>
              </S.Filter>
              <S.Order>
                <S.OrderSelect
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setIsFresh(true);
                    setPage(0);
                    setOrderBy(e.currentTarget.value);
                  }}
                >
                  {Options.map((option) => (
                    <S.OrderOption key={option.value} value={option.value}>
                      {option.name}
                    </S.OrderOption>
                  ))}
                </S.OrderSelect>
                
              </S.Order>
            </S.OrderArea>

            <S.ContestArea>
              {contestList && contestList.length !== 0 ? (
                contestList.map((contest) => (
                  <Contest
                    key={contest.competitionId}
                    posterImageUrl={
                      contest.posters[0] ? contest.posters[0].posterUrl : ""
                    }
                    competitionId={contest.competitionId}
                    competitionType={contest.competitionType}
                    name={contest.name}
                    host={contest.host}
                    recruitingEnd={contest.recruitingEnd}
                  />
                ))
              ) : (
                <S.ContestNullArea>조회된 대회가 없습니다.</S.ContestNullArea>
              )}
            </S.ContestArea>
            <S.SeeMoreArea ref={ref}></S.SeeMoreArea>
            {role === "ROLE_INSTITUTION" ? (
              <S.RegisterButton
                onClick={() => router.push("register/event-select")}
              >
                <S.PlusIcons />
                대회 개최하기
              </S.RegisterButton>
            ) : null}
          </S.ContentArea>
        </S.Container>
        <BottomBar />
      </PageWrapper> */}
    </>
  );
};

export default Index;
