import {
  contestMaxNumOfAudience,
  contestMaxNumOfPlayers,
} from "@component/atoms/contestAtom";
import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import { useRecoilValue } from "recoil";
import { Input, InputArea, InputTitle } from "./headcount.styles";

const ContestInfo = () => {
  const numOfPlayers = useRecoilValue(contestMaxNumOfPlayers);
  const numOfAudience = useRecoilValue(contestMaxNumOfAudience);

  console.log("선수 정원 : ", numOfPlayers);
  console.log("관람객 정원 : ", numOfAudience);
  return (
    <PageWrapper>
      <Seo title="대회 정보 입력" />
      <GoBackHeader title="대회 등록" />
      <InputArea>
        <InputTitle>대회 제목</InputTitle>
        <Input type="text"></Input>
      </InputArea>
      <InputArea>
        <InputTitle>대회 기관(단체)명</InputTitle>
        <Input type="text"></Input>
      </InputArea>
    </PageWrapper>
  );
};

export default ContestInfo;
