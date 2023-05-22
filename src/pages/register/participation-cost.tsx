import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { Input } from "@component/components/input/inputComponent";
import NavBar from "@component/components/navbar/NavBar";
import {
  BoldSubText,
  BoldText,
  BoldTextArea,
} from "@component/components/text/boldText";
import Link from "next/link";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

const CostInputArea = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SuffixText = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  /* line-height: 100%; */
`;

const CostArea = styled.div`
  position: relative;
`;

const ParticipationCost = () => {
  return (
    <PageWrapper>
      <Seo title="참가비용 설정" />
      <GoBackHeader title="대회 등록" />
      <ContentArea>
        <BoldTextArea>
          <BoldText>참가 비용을</BoldText>
          <BoldText>입력해주세요.</BoldText>
        </BoldTextArea>
        <CostInputArea>
          <BoldSubText>프로부문 단일체급 참가비용</BoldSubText>
          <Input type="number" placeholder="금액을 입력해주세요." />
        </CostInputArea>
        <CostInputArea>
          <BoldSubText>프로부문 단일체급 추가비용</BoldSubText>
          <Input type="number" placeholder="금액을 입력해주세요." />
        </CostInputArea>
        <CostInputArea>
          <BoldSubText>아마추어부문 단일체급 참가비용</BoldSubText>
          <Input type="number" placeholder="금액을 입력해주세요." />
        </CostInputArea>
        <CostInputArea>
          <BoldSubText>아마추어부문 단일체급 추가비용</BoldSubText>
          <Input type="number" placeholder="금액을 입력해주세요." />
        </CostInputArea>
        {/* <CostInputArea>
          <BoldSubText>노비스부문 단일체급 참가비용</BoldSubText>
          <Input type="number" placeholder="금액을 입력해주세요." />
        </CostInputArea>
        <CostInputArea>
          <BoldSubText>노비스부문 단일체급 추가비용</BoldSubText>
          <Input type="number" placeholder="금액을 입력해주세요." />
        </CostInputArea> */}
      </ContentArea>
      <Link href="/register/form">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default ParticipationCost;
