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
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { AiOutlineDown } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import * as S from "./index.styles";
import { useForm } from "react-hook-form";
import qs from "qs";
import FilterButton from "@component/components/button/FilterButton";
import { useRouter } from "next/router";
import BottomBar from "@component/components/navbar/BottomBar";
import Contest from "@component/components/contest/Contest";

const Index = () => {
  const { register, handleSubmit, formState } = useForm<ISearchInput>();
  const [keyword, setKeyword] = useState("");
  const [filterBy, setFilterBy] = useState<FilterType[]>([
    "PLANNING",
    "RECRUITING",
  ]);
  const [orderBy, setOrderBy] = useState("createdDate");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [contestList, setContestList] = useState<IContestInfo[]>([]);

  const token = useRecoilValue(userTokenAtom);

  const router = useRouter();

  async function getContest(contestProps: IContestParams) {
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
    setContestList(response.data.content);
    await console.log(contestList);
  }

  const onValid = (data: ISearchInput) => {
    setKeyword(data.keyword);
  };

  const onClickTotal = () => {
    if (
      filterBy.includes("recruitingEnd") &&
      filterBy.includes("totalPrize") &&
      filterBy.includes("recommend")
    ) {
      let newFilterBy = [...filterBy];
      newFilterBy = newFilterBy.filter((item) => item !== "recruitingEnd");
      newFilterBy = newFilterBy.filter((item) => item !== "totalPrize");
      newFilterBy = newFilterBy.filter((item) => item !== "recommend");
      setFilterBy(newFilterBy);
    } else if (
      filterBy.includes("recruitingEnd") ||
      filterBy.includes("totalPrize") ||
      filterBy.includes("recommend")
    ) {
      let newFilterBy = [...filterBy];
      if (!newFilterBy.includes("recruitingEnd")) {
        newFilterBy.push("recruitingEnd");
      }
      if (!newFilterBy.includes("totalPrize")) {
        newFilterBy.push("totalPrize");
      }
      if (!newFilterBy.includes("recommend")) {
        newFilterBy.push("recommend");
      }
      setFilterBy(newFilterBy);
    } else {
      const newFilterBy = [...filterBy];
      newFilterBy.push("recruitingEnd");
      newFilterBy.push("totalPrize");
      newFilterBy.push("recommend");
      setFilterBy(newFilterBy);
    }
  };

  useEffect(() => {
    getContest({
      token: token,
      keyword: keyword,
      filterBy: filterBy,
      orderBy: orderBy,
      page: page,
      size: size,
    });
  }, [keyword, filterBy, orderBy, page, size]);

  return (
    <PageWrapper>
      <Seo title="대회" />
      <S.Container>
        <S.TopBar>
          <S.SearchForm>
            <S.SearchInput
              {...register("keyword")}
              type="text"
              placeholder="통합 검색"
            />
            <S.SearchButton>
              <S.SearchIcon />
            </S.SearchButton>
          </S.SearchForm>
          <S.AlarmButton />
          <S.MyPageButton />
        </S.TopBar>

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
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            filterKeyWord="recruitingEnd"
            filterContent="마감 임박 ⏰"
          />
          <FilterButton
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            filterKeyWord="totalPrize"
            filterContent="높은 상금 💰"
          />
          <FilterButton
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            filterKeyWord="recommend"
            filterContent="추천 대회 🏆"
          />
        </S.FilterButtonArea>
        <S.ContentArea>
          <S.OrderArea>
            <S.Filter>
              <FiFilter />
              <S.OrderText>필터</S.OrderText>
            </S.Filter>
            <S.Order>
              <S.OrderText>날짜순</S.OrderText>
              <AiOutlineDown />
            </S.Order>
          </S.OrderArea>
          <S.ContestArea>
            {contestList
              ? contestList.map((contest) => (
                  <Contest
                    key={contest.competitionId}
                    competitionId={contest.competitionId}
                    competitionType={contest.competitionType}
                    name={contest.name}
                    host={contest.host}
                    endDate={contest.endDate}
                  />
                ))
              : null}
            <S.RegisterButton
              onClick={() => router.push("register/event-select")}
            >
              <S.PlusIcons />
              대회 개최하기
            </S.RegisterButton>
          </S.ContestArea>
        </S.ContentArea>
      </S.Container>
      <BottomBar />
    </PageWrapper>
  );
};

export default Index;
