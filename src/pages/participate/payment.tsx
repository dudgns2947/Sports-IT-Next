import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import Contest from "@component/components/contest/Contest";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

import { MdRadioButtonChecked } from "react-icons/md";

interface RadioIconProps {
  active: boolean;
}

const HistoryArea = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #aeaeae;
`;

const BoldText = styled.span`
  display: block;
  font-weight: 700;
  font-size: 17px;
  line-height: 19px;
  margin-bottom: 10px;
  color: #212121;
`;

const HistoryContent = styled.div`
  border-bottom: 1px solid #aeaeae;
  padding-bottom: 10px;
`;

const LightText = styled.span`
  color: #212121;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
`;

const RadioArea = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

const RadioSubArea = styled(RadioArea)`
  justify-content: space-between;
  padding-left: 20px;
`;

const SubArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const RadioLeft = styled.div`
  display: flex;
  align-items: center;
`;

const RadioIcon = styled(MdRadioButtonChecked)`
  color: #fd3446;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

const CostText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
`;

const BoldCostText = styled(CostText)`
  font-size: 16px;
`;

const BoldSmallText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  color: #212121;
`;

const HistoryBottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 0;
`;

const InsuranceArea = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #aeaeae;
`;

const InsuranceRadioArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 0 0;
`;

const ManualText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #aeaeae;
`;

const RadioIconComponent = styled(MdRadioButtonChecked)<RadioIconProps>`
  color: ${(props) => (props.active ? "#fd3446" : "#AEAEAE")};
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

const TotalCostArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 5px;
`;

const TotalCostText = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #fd3446;
`;

const Payment = () => {
  const [insuranceCheck, setInsuranceCheck] = useState(true);
  return (
    <PageWrapper>
      <Seo title="참가비 결제" />
      <GoBackHeader title="대회 신청" />
      <ContentArea>
        <Contest
          competitionId={12}
          competitionType="FREE"
          name="탁구 대회"
          host={{ uid: 12, name: "호스트" }}
          recruitingEnd="2023-05-25T18:00:00"
        />
        <HistoryArea>
          <BoldText>신청 내역</BoldText>
          <HistoryContent>
            <RadioArea>
              <RadioIcon />
              <LightText>프로</LightText>
            </RadioArea>
            <RadioSubArea>
              <RadioArea>
                <RadioIcon />
                <LightText>-70kg</LightText>
              </RadioArea>
              <CostText>90000원</CostText>
            </RadioSubArea>
            <RadioSubArea>
              <RadioArea>
                <RadioIcon />
                <LightText>-80kg</LightText>
              </RadioArea>
              <CostText>20000원</CostText>
            </RadioSubArea>
            <SubArea>
              <LightText>VAT (10%)</LightText>
              <CostText>11000원</CostText>
            </SubArea>
            <SubArea>
              <LightText>수수료 (3%)</LightText>
              <CostText>3000원</CostText>
            </SubArea>
          </HistoryContent>
          <HistoryBottomArea>
            <BoldSmallText>신청 금액</BoldSmallText>
            <BoldCostText>124000원</BoldCostText>
          </HistoryBottomArea>
        </HistoryArea>
        <InsuranceArea>
          <BoldText>안전 대회참가 보증보험</BoldText>
          <ManualText>
            주최자의 부재로 인한 대회 폐지 시 참가신청 금액을 돌려주며, 고객님의
            계좌로 안전하게 자동환불이 이루어집니다.
          </ManualText>
          <InsuranceRadioArea
            onClick={() => setInsuranceCheck((current) => !current)}
          >
            <RadioLeft>
              <RadioIconComponent active={insuranceCheck} />
              <LightText>보증 보험</LightText>
            </RadioLeft>
            <CostText>5000원</CostText>
          </InsuranceRadioArea>
        </InsuranceArea>
        <TotalCostArea>
          <BoldText>총 결제금액</BoldText>
          <TotalCostText>129000원</TotalCostText>
        </TotalCostArea>
      </ContentArea>
      <Link href="/participate/apply-success">
        <NavBar navText="결제하기" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default Payment;
