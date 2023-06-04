import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import ContestCard from "@component/components/contest/ContestCard";
import Document from "@component/components/document/Document";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import React from "react";
import styled from "styled-components";
import Head from "next/head";

const DocumentArea = styled.div`
  display: flex;
  padding: 24px 0;
  flex-wrap: wrap;
`;

const ContestDocument = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="공문서 발급" />
        <GoBackHeader title="공문서 발급" />
        <ContentArea>
          <ContestCard
            tags={["팔씨름", "스포츠", "대회"]}
            scrap={true}
            title="제 26회 대한민국 팔씨름 연맹 주최 국가대표 선발전"
            host="(사)대한 팔씨름 연맹"
            date="2023년 3월 13일"
            contestId={12}
          />
          <DocumentArea>
            <Document name="대회 참여 확인증" documentId={6} />
            <Document name="대회 입상 확인증" documentId={6} />
            <Document name="선수 등록 확인증" documentId={6} />
            <Document name="대회 입상 확인증" documentId={6} />
            <Document name="선수 참여 확인증" documentId={6} />
            <Document name="대회 참여 확인증" documentId={6} />
            <Document name="대회 입상 확인증" documentId={6} />
            <Document name="선수 참가 확인증" documentId={6} />
          </DocumentArea>
        </ContentArea>
        <NavBar navText="선택" active={true} />
      </PageWrapper>
    </>
  );
};

export default ContestDocument;
