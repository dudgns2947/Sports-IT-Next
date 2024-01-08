import {
  AwardInfoAtom,
  contestContentAtom,
  contestEndDateAtom,
  contestLocationAtom,
  contestLocationDetailAtom,
  contestMaxPlayerAtom,
  contestMaxViewerAtom,
  contestNameAtom,
  contestRecruitingEndAtom,
  contestRecruitingStartAtom,
  contestStartDateAtom,
  contestTotalPrizeAtom,
} from "@component/atoms/contestAtom";
import { selectEventAtom } from "@component/atoms/eventAtom";
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
import { useRecoilValue } from "recoil";

const Preview = () => {
  const selectEvent = useRecoilValue(selectEventAtom);
  const maxNumOfPlayers = useRecoilValue(contestMaxPlayerAtom);
  const maxNumOfAudience = useRecoilValue(contestMaxViewerAtom);
  const contestName = useRecoilValue(contestNameAtom);
  const startDate = useRecoilValue(contestStartDateAtom);
  const endDate = useRecoilValue(contestEndDateAtom);
  const recruitingStart = useRecoilValue(contestRecruitingStartAtom);
  const recruitingEnd = useRecoilValue(contestRecruitingEndAtom);
  const totalPrize = useRecoilValue(contestTotalPrizeAtom);
  const awardInfo = useRecoilValue(AwardInfoAtom);
  const location = useRecoilValue(contestLocationAtom);
  const locationDetail = useRecoilValue(contestLocationDetailAtom);
  const contestContent = useRecoilValue(contestContentAtom);

  console.log(selectEvent);
  console.log(maxNumOfPlayers);
  console.log(maxNumOfAudience);
  console.log(contestName);
  console.log(startDate);
  console.log(endDate);
  console.log(endDate);
  console.log(recruitingStart);
  console.log(recruitingEnd);
  console.log(totalPrize);
  console.log(awardInfo);
  console.log(location);
  console.log(locationDetail);
  console.log(contestContent);

  return (
    <WebContainer>
      <Header />
      <PaddingArea>
        <FlexColumn>
          <GlobalBoldText>👀 대회 페이지 미리보기</GlobalBoldText>
        </FlexColumn>
      </PaddingArea>
      <FlexColumnRowCenter>
        <div onClick={() => {}}>
          <NextButton content="최종 등록" />
        </div>
      </FlexColumnRowCenter>
    </WebContainer>
  );
};

export default Preview;
