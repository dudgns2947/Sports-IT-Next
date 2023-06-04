import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import ContestCard from "@component/components/contest/ContestCard";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { Input } from "@component/components/input/inputComponent";
import { SearchIcon } from "@component/components/navbar/TopBar.styles";
import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

const BoldTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px 0;
  padding-top: 66px;
  margin-bottom: 20px;
`;

const BoldText = styled.span`
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  color: #212121;
  margin-bottom: 2px;
`;

const SearchInputArea = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  width: 335px;
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
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="공문서 발급" />
        <GoBackHeader title="공문서 발급" />
        <ContentArea>
          <BoldTextArea>
            <BoldText>대회를</BoldText>
            <BoldText>선택해주세요.</BoldText>
          </BoldTextArea>
          <SearchInputArea>
            <SearchInput value={keyword} placeholder="대회 검색" onChange={(e) => setKeyword(e.currentTarget.value)} />
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
        </ContentArea>
      </PageWrapper>
    </>
  );
};

export default Index;
