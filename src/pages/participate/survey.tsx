import {
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import NextButton from "@component/components/web/button/NextButton";
import Header from "@component/components/web/header/Header";
import { WebContainer } from "@component/styles/index.styles";
import Link from "next/link";
import React from "react";

const Survey = () => {
  return (
    <WebContainer>
      <Header />
      <PaddingArea></PaddingArea>
      <FlexColumnRowCenter>
        <Link href="/participate/check-weight-sector">
          <NextButton />
        </Link>
      </FlexColumnRowCenter>
    </WebContainer>
  );
};

export default Survey;
