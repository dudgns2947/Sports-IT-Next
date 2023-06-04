import Seo from "@component/components/Seo";
import AddButton from "@component/components/button/AddButton";
import SurveyCard from "@component/components/card/ApplySurveyCard";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "../../styles/participate/apply.styles";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { ContentArea } from "@component/components/area/areaComponent";
import Head from "next/head";

const AddButtonArea = styled.div`
  padding-bottom: 40px;
`;

const Apply = () => {
  const [surveyList, setSurveyList] = useState<string[]>([""]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="대회 참가" />
        <GoBackHeader title="대회 신청" />
        <ContentArea>
          <S.ContestInform contestName="대한팔씨름연맹 제 26회 국가대표 선발전" contestGroup="(사)대한팔씨름연맹"></S.ContestInform>
          <S.Divider />

          {surveyList.map((survey, index) => (
            <SurveyCard key={index} index={index} setSurveyList={setSurveyList} />
          ))}
        </ContentArea>
        <Link href="/participate/check-weight-sector">
          <NavBar navText="다음" active={true} />
        </Link>
      </PageWrapper>
    </>
  );
};

export default Apply;
