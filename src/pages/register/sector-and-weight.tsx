import Seo from "@component/components/Seo";
import AddButton from "@component/components/button/AddButton";
import SurveyCard from "@component/components/card/SurveyCard";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const ContentArea = styled.div`
  height: 100%;
  padding: 60px 20px 0 20px;
  overflow: auto;
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

const AddButtonArea = styled.div`
  padding-bottom: 40px;
`;

const SectorAndWeight = () => {
  const [surveyList, setSurveyList] = useState<string[]>([""]);
  const router = useRouter();
  return (
    <PageWrapper>
      <Seo title="부문 및 체급등록" />
      <GoBackHeader title="대회 등록" />
      <ContentArea>
        <BoldTextArea>
          <BoldText>부문 또는 체급을</BoldText>
          <BoldText>등록해주세요.</BoldText>
        </BoldTextArea>
        <SurveyArea>
          {surveyList.map((survey, index) => (
            <SurveyCard index={index} setSurveyList={setSurveyList} />
          ))}
        </SurveyArea>
        <AddButtonArea
          onClick={() => setSurveyList((current) => [...current, ""])}
        >
          <AddButton text="부문 / 체급 추가하기"></AddButton>
        </AddButtonArea>
      </ContentArea>
      <Link href="/register/participation-cost">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default SectorAndWeight;
