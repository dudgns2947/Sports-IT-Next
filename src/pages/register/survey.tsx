import { surveyModalOpenAtom } from "@component/atoms/modalAtom";
import {
  ContentPaddingArea,
  FlexColumn,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import NextButton from "@component/components/web/button/NextButton";
import Header from "@component/components/web/header/Header";
import SurveyModal from "@component/components/web/modal/SurveyModal";
import { WebContainer } from "@component/styles/index.styles";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Survey = () => {
  const [surveyModalOpen, setSurveyModalOpen] =
    useRecoilState(surveyModalOpenAtom);

  return (
    <WebContainer>
      <Header />
      <PaddingArea>
        <FlexColumn>
          <GlobalBoldText>
            ✏️ 참가자에게 수집할 설문을 등록해주세요.
          </GlobalBoldText>
          <GlobalGreyText>
            참가자에게 이름과 전화번호 등 대회에 필요한 개인정보가 있다면 설문을
            작성해보세요.
          </GlobalGreyText>
        </FlexColumn>
        <ContentPaddingArea>
          <RegisterArea onClick={() => setSurveyModalOpen(true)}>
            + 설문 등록
          </RegisterArea>
          <SurveyModal
            modalOpen={surveyModalOpen}
            setModalOpen={setSurveyModalOpen}
          />
        </ContentPaddingArea>
      </PaddingArea>
      <FlexColumnRowCenter>
        <Link href="/register/preview">
          <NextButton />
        </Link>
      </FlexColumnRowCenter>
    </WebContainer>
  );
};

export default Survey;

const RegisterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted #000000;
  width: 100%;
  height: 56px;
  font-size: 16px;
  border-radius: 6px;
  margin: 20px 0;
  cursor: pointer;
`;
