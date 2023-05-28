import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import BottomBar from "@component/components/navbar/BottomBar";
import NavBar from "@component/components/navbar/NavBar";
import React from "react";
import { IconContainer } from "../index.styles";
import CustomButton from "@component/components/button/Custombutton";
import styled from "styled-components";
import Seo from "@component/components/Seo";

import { AiOutlineRight } from "react-icons/ai";
import NavTitle from "@component/components/navbar/NavTitle";
import NavTab from "@component/components/navbar/NavTab";
import ProfileTab from "@component/components/profile/ProfileTab";

const TransformArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9fa;
  border-radius: 14px;
  width: 335px;
  height: 72px;
  padding: 14px 17px;
`;

const TransformTextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransformBoldText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #212121;
  margin-bottom: 2px;
`;

const TransformLightText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #aeaeae;
`;

const TransformButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 44px;
  border-radius: 14px;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  background-color: #fd3446;
`;

const iconProps = [
  ["/images/logo/contest.png", "대회", "contest"],
  ["/images/logo/document.png", "공문서", "document"],
  ["/images/logo/coupon.png", "쿠폰", "coupon"],
  ["/images/logo/point.png", "포인트", "point"],
];

const MyPage = () => {
  return (
    <PageWrapper>
      <GoBackHeader title="마이페이지" setting={true} id={12} />
      <Seo title="마이페이지" />
      <ContentArea>
        <ProfileTab
          imgUrl="/images/example/Post1.png"
          userName="이준수"
          userEmail="young@naver.com"
        />
        <TransformArea>
          <TransformTextArea>
            <TransformBoldText>주최자로 전환</TransformBoldText>
            <TransformLightText>대회 개최하고 관리하기</TransformLightText>
          </TransformTextArea>
          <TransformButton>전환</TransformButton>
        </TransformArea>
        <IconContainer>
          {iconProps.map((iconProp, index) => (
            <CustomButton
              key={index}
              imageUrl={iconProp[0]}
              buttonName={iconProp[1]}
            />
          ))}
        </IconContainer>
        <NavTitle content="나의 스포티" />
        <NavTab url="/" content="결제 내역" />
        <NavTab url="/" content="스크랩" />
        <NavTab url="/" content="프리미엄 구독 신청" />
      </ContentArea>
      <BottomBar />
    </PageWrapper>
  );
};

export default MyPage;
