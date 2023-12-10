import {
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import NextButton from "@component/components/web/button/NextButton";
import Header from "@component/components/web/header/Header";
import { SurveyContainer } from "@component/components/web/survey";
import { WebContainer } from "@component/styles/index.styles";
import { GlobalBoldText } from "@component/styles/text/text.style";
import Link from "next/link";
import React from "react";

const Survey = () => {

  return (
    <div style={{width: '100%', overflowX: 'hidden', paddingTop: 112, height: '100vh'}}>
      <Header />
      <SurveyContainer/>
    </div>
  );
};

export default Survey;
