import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import BottomBar from "@component/components/navbar/BottomBar";
import NavTab from "@component/components/navbar/NavTab";
import NavTitle from "@component/components/navbar/NavTitle";
import ProfileTab from "@component/components/profile/ProfileTab";
import React from "react";
import styled from "styled-components";

const LogoutArea = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 5px 0 10px 0;
  background-color: black;
  color: white;
  border-radius: 5px;
`;

const Setting = () => {
  return (
    <PageWrapper>
      <GoBackHeader title="설정" />
      <Seo title="설정" />
      <ContentArea>
        <ProfileTab
          imgUrl="/images/example/Post1.png"
          userName="이준수"
          userEmail="young@naver.com"
        />
        <NavTitle content="계정 관리" />
        <NavTab url="/" content="비밀번호 재설정" />
        <NavTab url="/" content="휴대폰 번호 재설정" />
        <NavTitle content="알림" />
        <NavTab url="/" content="혜택 알림 설정" />
        <NavTitle content="이용정보" />
        <NavTab url="/" content="약관 및 정책" />
        <NavTab url="/" content="오픈소스 라이센스" />
        <NavTab url="/" content="회원 탈퇴하기" />
        <LogoutArea>로그아웃</LogoutArea>
      </ContentArea>
      <BottomBar />
    </PageWrapper>
  );
};

export default Setting;
