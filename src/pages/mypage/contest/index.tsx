import Seo from "@component/components/Seo";
import { ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import ContestCard from "@component/components/contest/ContestCard";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { SearchIcon } from "@component/components/navbar/TopBar.styles";
import React, { useState } from "react";
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

const Index = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <PageWrapper>
      <Seo title="참가한 대회" />
      <GoBackHeader title="내가 참가한 대회" />
      <ContentPaddingArea>
        <SearchInputArea>
          <SearchInput
            value={keyword}
            placeholder="대회 검색"
            onChange={(e) => setKeyword(e.currentTarget.value)}
          />
          <SearchIcon />
        </SearchInputArea>
        <ContestArea>
          <ContestCard
            tags={["팔씨름", "스포츠", "대회"]}
            scrap={true}
            title="제 26회 대한민국 팔씨름 연맹 주최 국가대표 선발전"
            host="(사)대한 팔씨름 연맹"
            date="2023년 3월 13일"
            contestId={12}
          />
          <ContestCard
            tags={["탁구", "스포츠"]}
            scrap={false}
            title="22-33 탁구 세계 선수권 대회"
            host="(사)대한 탁구 연맹"
            date="2023년 3월 20일"
            contestId={11}
          />
        </ContestArea>
      </ContentPaddingArea>
    </PageWrapper>
  );
};

export default Index;
