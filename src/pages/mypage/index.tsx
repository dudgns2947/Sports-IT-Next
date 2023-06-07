import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import BottomBar from "@component/components/navbar/BottomBar";
import NavBar from "@component/components/navbar/NavBar";
import React from "react";
import { IconContainer } from "../../styles/index.styles";
import CustomButton from "@component/components/button/Custombutton";
import styled from "styled-components";
import Seo from "@component/components/Seo";

import { AiOutlineRight } from "react-icons/ai";
import NavTitle from "@component/components/navbar/NavTitle";
import NavTab from "@component/components/navbar/NavTab";
import ProfileTab from "@component/components/profile/ProfileTab";
import { useRouter } from "next/router";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { roleAtom } from "@component/atoms/roleAtom";
import { userEmailAtom, userNameAtom } from "@component/atoms/tokenAtom";

const TransformArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9fa;
  border-radius: 14px;
  width: 100%;
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
  cursor: pointer;
`;

const LoginNavArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginNavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff002e;
  color: white;
  width: 70%;
  height: 10%;
  border-radius: 8px;
  cursor: pointer;
`;

const iconProps = [
  ["/images/logo/contest.png", "대회", "/mypage"],
  ["/images/logo/document.png", "공문서", "document"],
  ["/images/logo/coupon.png", "쿠폰", "/mypage"],
  ["/images/logo/point.png", "포인트", "/mypage"],
];

const MyPage = () => {
  const userRole = useRecoilValue(roleAtom);
  const userName = useRecoilValue(userNameAtom);
  const userEmail = useRecoilValue(userEmailAtom);
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <GoBackHeader title="마이페이지" setting={true} />
        <Seo title="마이페이지" />
        <ContentPaddingArea>
          <ProfileTab
            imgUrl="/images/example/Post1.png"
            userName={
              userName !== "" ? userName : "로그인 후 이용할 수 있습니다."
            }
            userEmail={userEmail}
          />
          {userName !== "" ? (
            <>
              {userRole === "ROLE_USER" ? (
                <TransformArea>
                  <TransformTextArea>
                    <TransformBoldText>주최자로 전환</TransformBoldText>
                    <TransformLightText>
                      대회 개최하고 관리하기
                    </TransformLightText>
                  </TransformTextArea>
                  <TransformButton
                    onClick={() => alert("준비중인 기능입니다 :)")}
                  >
                    전환
                  </TransformButton>
                </TransformArea>
              ) : null}
              <IconContainer>
                {iconProps.map((iconProp, index) => (
                  <CustomButton
                    key={index}
                    imageUrl={iconProp[0]}
                    buttonName={iconProp[1]}
                    routeUrl={iconProp[2]}
                  />
                ))}
              </IconContainer>
              <NavTitle content="나의 스포티" />
              <NavTab url="/" content="결제 내역" />
              <NavTab url="/" content="스크랩" />
              <NavTab url="/" content="프리미엄 구독 신청" />
            </>
          ) : (
            <LoginNavArea>
              <LoginNavButton onClick={() => router.push("/auth/login")}>
                로그인 페이지로 이동
              </LoginNavButton>
            </LoginNavArea>
          )}
        </ContentPaddingArea>
        <BottomBar />
      </PageWrapper>
    </>
  );
};

export default MyPage;
