import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
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
        <ContentPaddingArea>
          <ContestCard
            tags={["스포츠", "대회"]}
            scrap={false}
            title="2023 수원배 전국 유소년 야구대회"
            host="신우현"
            date="2023년 6월 21일"
            contestId={2728}
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
        </ContentPaddingArea>
        <NavBar navText="선택" active={true} />
      </PageWrapper>
    </>
  );
};

export default ContestDocument;
