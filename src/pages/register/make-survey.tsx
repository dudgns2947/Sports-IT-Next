import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import NavBar from "@component/components/navbar/NavBar";
import styled from "styled-components";

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

const SurveyCard = styled.div`
  width: 100%;
  padding: 5px 25px;
  border: 1px solid #ededed;
  border-radius: 8px;
`;

const SurveyTopArea = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TinySqaure = styled.div`
  width: 50px;
  height: 3px;
  background-color: #aeaeae;
  border-radius: 100px;
`;

const SurveyTitleArea = styled.div`
  height: 50px;
`;

const SurveyTitleInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-bottom: 1px solid #ededed;
  font-weight: 500;
  font-size: 14px;
`;

const SurveyCheckArea = styled.div`
  border-bottom: 1px solid #ededed;
  padding: 10px 0px;
`;

const SurveyCheckBox = styled.input``;

const SurveyBottomArea = styled.div``;

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
        <SurveyArea>
          <SurveyCard>
            <SurveyTopArea>
              <TinySqaure />
            </SurveyTopArea>
            <SurveyTitleArea>
              <SurveyTitleInput type="text" placeholder="입력해주세요." />
            </SurveyTitleArea>
            <SurveyCheckArea>
              <label>
                <SurveyCheckBox type="checkbox" name="category" value="체급" />
                체급
              </label>
            </SurveyCheckArea>
            <div></div>
          </SurveyCard>
        </SurveyArea>
      </ContentArea>
      <NavBar navText="다음" active={true} />
    </PageWrapper>
  );
};

export default MakeSurvey;
