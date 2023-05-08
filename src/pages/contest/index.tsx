import { getContestList } from "@component/api/contest/contestApi";
import { baseApi } from "@component/api/utils/instance";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import {
  IContestInfo,
  IContestParams,
} from "@component/interfaces/contestInterface";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { AiOutlineDown } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import * as S from "./index.styles";

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

const Index = () => {
  const [keyword, setKeyword] = useState("");
  const [filterBy, setFilterBy] = useState("totalPrize");
  const [orderBy, setOrderBy] = useState("createdDate");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [contestList, setContestList] = useState<IContestInfo[]>([]);

  const token = useRecoilValue(userTokenAtom);

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
    });
    console.log(response);
    setContestList(response.data.content);
    await console.log(contestList);
  }

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
                <S.Contest key={contest.competitionId}>
                  <S.ContestImage src="/images/contest/example.png" />
                  <S.ContestInfo>
                    <S.ContestTagArea>
                      {contest.competitionType === "FREE" ? null : (
                        <S.PremiumTag>프리미엄</S.PremiumTag>
                      )}
                      <S.Tag>팔씨름</S.Tag>
                      <S.Tag>씨름</S.Tag>
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
                </S.Contest>
              ))
            : null}
        </S.ContestArea>
      </S.ContentArea>
    </PageWrapper>
  );
};

export default Index;
