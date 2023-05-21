import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import NavBar from "@component/components/navbar/NavBar";
import styled from "styled-components";
import SurveyCard from "@component/components/card/SurveyCard";
import AddButton from "@component/components/button/AddButton";

const ContentArea = styled.div`
  height: 100%;
  padding: 60px 20px 0 20px;
`;

const BoldTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const BoldText = styled.span`
  font-weight: 600;
  font-size: 28px;
  margin: 5px 0;
`;

const SurveyArea = styled.div``;

const MakeSurvey = () => {
  return (
    <PageWrapper>
      <Seo title="설문지 등록" />
      <GoBackHeader title="대회 등록" />
      <ContentArea>
        <BoldTextArea>
          <BoldText>부문 또는 체급을</BoldText>
          <BoldText>등록해주세요.</BoldText>
        </BoldTextArea>
        <SurveyArea>{/* <SurveyCard /> */}</SurveyArea>
        <AddButton text="부문 / 체급 추가하기"></AddButton>
      </ContentArea>
      <NavBar navText="다음" active={true} />
    </PageWrapper>
  );
};

export default MakeSurvey;
