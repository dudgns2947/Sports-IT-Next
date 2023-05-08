import { getContestList } from "@component/api/contest/contestApi";
import { baseApi } from "@component/api/utils/instance";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import { IContestParams } from "@component/interfaces/contestInterface";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";

const Index = () => {
  const [keyword, setKeyword] = useState("탁구");
  const [filterBy, setFilterBy] = useState("totalPrize");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const token = useRecoilValue(userTokenAtom);

  async function getContest(contestProps: IContestParams) {
    const response = await baseApi.get("competitions/slice", {
      headers: {
        Authorization: `Bearer ${contestProps.token}`,
      },
      params: {
        keyword: contestProps.keyword,
        filterBy: contestProps.filterBy,
        page: contestProps.page,
        size: contestProps.size,
      },
    });
    console.log(response);
  }

  useEffect(() => {
    getContest({
      token: token,
      keyword: keyword,
      filterBy: filterBy,
      page: page,
      size: size,
    });
  }, [keyword, filterBy, page, size]);

  return (
    <PageWrapper>
      <Seo title="대회" />
      <button onClick={() => setKeyword("팔씨름")}>탁구</button>
    </PageWrapper>
  );
};

export default Index;
