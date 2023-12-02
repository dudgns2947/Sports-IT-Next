import {
  ContentPaddingArea,
  FlexColumn,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import NextButton from "@component/components/web/button/NextButton";
import Header from "@component/components/web/header/Header";
import { WebContainer } from "@component/styles/index.styles";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import Link from "next/link";
import React from "react";

const preview = () => {
  return (
    <WebContainer>
      <Header />
      <PaddingArea>
        <FlexColumn>
          <GlobalBoldText>👀 대회 페이지 미리보기</GlobalBoldText>
        </FlexColumn>
      </PaddingArea>
      <FlexColumnRowCenter>
        <Link href="/">
          <NextButton />
        </Link>
      </FlexColumnRowCenter>
    </WebContainer>
  );
};

export default preview;
