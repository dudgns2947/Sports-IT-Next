import {
  ContentPaddingArea,
  FlexColumn,
  PaddingArea,
} from "@component/components/area/areaComponent";
import Header from "@component/components/web/header/Header";
import { WebContainer } from "@component/styles/index.styles";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import React from "react";

const survey = () => {
  return (
    <>
      <WebContainer>
        <Header />
        <PaddingArea>
          <FlexColumn>
            <GlobalBoldText>
              ✏️ 참가자에게 수집할 설문을 등록해주세요.
            </GlobalBoldText>
            <GlobalGreyText>
              참가자에게 이름과 전화번호 등 대회에 필요한 개인정보가 있다면
              설문을 작성해보세요.
            </GlobalGreyText>
          </FlexColumn>
          <ContentPaddingArea></ContentPaddingArea>
        </PaddingArea>
      </WebContainer>
    </>
  );
};

export default survey;
