import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import BottomBar from "@component/components/navbar/BottomBar";
import NavBar from "@component/components/navbar/NavBar";
import React, { useEffect, useState } from "react";
import { IconContainer, WebContainer } from "../../styles/index.styles";
import CustomButton from "@component/components/button/Custombutton";
import styled from "styled-components";
import Seo from "@component/components/Seo";

import { AiOutlineRight } from "react-icons/ai";
import NavTitle from "@component/components/navbar/NavTitle";
import NavTab from "@component/components/navbar/NavTab";
import ProfileTab from "@component/components/profile/ProfileTab";
import { useRouter } from "next/router";
import Head from "next/head";
import { useRecoilState, useRecoilValue } from "recoil";
import { roleAtom } from "@component/atoms/roleAtom";
import { userEmailAtom, userNameAtom } from "@component/atoms/tokenAtom";
import { set } from "react-hook-form";
import Header from "@component/components/web/header/Header";
import { IContestInfo } from "@component/interfaces/contestInterface";
import ContestCard from "@component/components/web/contest/Contest";

const MyPage = () => {
  const [userRole, setUserRole] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [token, setToken] = useState("");
  const [orderBy, setOrderBy] = useState("createdDate");
  const [contestList, setContestList] = useState<IContestInfo[]>([]);

  const router = useRouter();

  const Options = [
    { value: "createdDate", name: "최신순" },
    { value: "scrapCount", name: "좋아요순" },
    { value: "viewCount", name: "조회순" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserRole(localStorage.getItem("role")!);
      setUserName(localStorage.getItem("name")!);
      setUserEmail(localStorage.getItem("email")!);
      setToken(localStorage.getItem("jwt")!);
    }
  }, []);

  console.log(userRole);
  return (
    <>
      <WebContainer>
        <Header />
        <OrderContainer>
          <OrderWrapper>
            <OrderSelect
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                // setIsFresh(true);
                // setPage(0);
                setOrderBy(e.currentTarget.value);
              }}
            >
              {Options.map((option) => (
                <OrderOption key={option.value} value={option.value}>
                  {option.name}
                </OrderOption>
              ))}
            </OrderSelect>
          </OrderWrapper>
        </OrderContainer>
        <ContentContainer>
          <AsideContainer>Hello</AsideContainer>
          <ContestArea>
            {contestList.map((contest) => (
              <ContestCard
                key={contest.competitionId}
                posterImageUrl={
                  contest.posters.length === 0
                    ? ""
                    : contest.posters[0].posterUrl
                }
                competitionId={contest.competitionId}
                competitionType={contest.competitionType}
                name={contest.name}
                host={contest.host}
                recruitingEnd={contest.recruitingEnd}
                showImage={true}
              />
            ))}
          </ContestArea>
        </ContentContainer>
      </WebContainer>

      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <GoBackHeader title="마이페이지" setting={true} />
        <Seo title="마이페이지" />
        <ContentPaddingArea>
          <ProfileTab
            imgUrl="/images/example/Post1.png"
            userName={
              token !== null ? userName : "로그인 후 이용할 수 있습니다."
            }
            userEmail={token !== null ? userEmail : ""}
          />
          {userRole === "ROLE_USER" ? (
            <TransformArea>
              <TransformTextArea>
                <TransformBoldText>주최자로 전환</TransformBoldText>
                <TransformLightText>대회 개최하고 관리하기</TransformLightText>
              </TransformTextArea>
              <TransformButton onClick={() => alert("준비중인 기능입니다 :)")}>
                전환
              </TransformButton>
            </TransformArea>
          ) : (
            <TransformArea>
              <TransformTextArea>
                <TransformBoldText>체육인으로 전환</TransformBoldText>
                <TransformLightText>대회 참여하기</TransformLightText>
              </TransformTextArea>
              <TransformButton onClick={() => alert("준비중인 기능입니다 :)")}>
                전환
              </TransformButton>
            </TransformArea>
          )}
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
          <NavTab url="/mypage/payment" content="결제 내역" />
          <NavTab url="/mypage" content="스크랩" />
          <NavTab url="/mypage" content="프리미엄 구독 신청" />
        </ContentPaddingArea>
        <BottomBar />
      </PageWrapper> */}
    </>
  );
};
export default MyPage;

const OrderSelect = styled.select`
  border: none;
`;

const OrderOption = styled.option`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const AsideContainer = styled.aside`
  border: 1px solid #e9ebed;
  border-radius: 10px;
  width: 300px;
  padding: 30px;
  position: sticky;
  position: -webkit-sticky;
  top: 60px;
`;

const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ContentContainer = styled.div`
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ContestArea = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  @media only screen and (min-width: 868px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const OrderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  top: 0px;
  padding: 10px 10%;
  position: sticky;
  background-color: #ffffff;
`;

const OrderWrapper = styled.div`
  border: 1px solid #aeaeae;
  padding: 8px 10px;
  border-radius: 8px;
`;
