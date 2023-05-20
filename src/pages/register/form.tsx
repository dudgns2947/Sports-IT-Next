import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import AddButton from "@component/components/button/AddButton";
import SurveyCard from "@component/components/card/SurveyCard";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const ContestInfoArea = styled.div`
  padding-bottom: 20px;
`;

const ContestName = styled.h1`
  font-weight: 600;
  font-size: 18px;
  color: #212121;
  margin-bottom: 8px;
`;

const ContestGroup = styled.h2`
  font-weight: 500;
  font-size: 14px;
  color: #aeaeae;
`;

const AddButtonArea = styled.div`
  padding-bottom: 40px;
`;

const Form = () => {
  const [surveyList, setSurveyList] = useState<string[]>([""]);

  return (
    <PageWrapper>
      <Seo title="대회 폼 등록" />
      <GoBackHeader title="대회 등록" />
      <ContentArea>
        <ContestInfoArea>
          <ContestName>대한 팔씨름 연맹 제 26회 국가대표 선발전</ContestName>
          <ContestGroup>(사)대한 팔씨름 연맹</ContestGroup>
        </ContestInfoArea>
        {surveyList.map((survey, index) => (
          <SurveyCard index={index} setSurveyList={setSurveyList} />
        ))}
        <AddButtonArea
          onClick={() => setSurveyList((current) => [...current, ""])}
        >
          <AddButton text="질문 추가하기" />
        </AddButtonArea>
      </ContentArea>
      <Link href="/register/register-success">
        <NavBar navText="등록" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default Form;
