import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import BottomBar from "@component/components/navbar/BottomBar";
import NavTab from "@component/components/navbar/NavTab";
import NavTitle from "@component/components/navbar/NavTitle";
import ProfileTab from "@component/components/profile/ProfileTab";
import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  userEmailAtom,
  userNameAtom,
  userTokenAtom,
} from "@component/atoms/tokenAtom";
import { useState, useEffect } from "react";
import { roleAtom } from "@component/atoms/roleAtom";

const LogoutArea = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 15px 0 10px 0;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-bottom: 18%;
  cursor: pointer;
`;

const Setting = () => {
  const userRole = useRecoilValue(roleAtom);
  // const userName = useRecoilValue(userNameAtom);
  // const userEmail = useRecoilValue(userEmailAtom);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const setUserToken = useSetRecoilState(userTokenAtom);

  //local storage에 저장된 토큰을 가져온다.
  const token = typeof window !== "undefined" && localStorage.getItem("jwt");
  const StoredUserName =
    typeof window !== "undefined" && localStorage.getItem("name");
  const StoredUserEmail =
    typeof window !== "undefined" && localStorage.getItem("email");

  useEffect(() => {
    setUserName((StoredUserName as string) ?? "");
    setUserEmail((StoredUserEmail as string) ?? "");
    //local storage에 이름 및 email 재저장
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (token !== null && typeof window !== "undefined") {
    localStorage.setItem("name", userName);
    localStorage.setItem("email", userEmail);
  }

  console.log("userName and UesrEmail :", StoredUserName, StoredUserEmail);
  const router = useRouter();

  function LogoutButton() {
    const logout = async () => {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("jwt");
        window.localStorage.removeItem("role");
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("email");
        setUserToken("");
        router.push("/auth/login");
      }
    };
    logout();
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <GoBackHeader title="설정" />
        <Seo title="설정" />
        <ContentPaddingArea>
          <ProfileTab
            imgUrl="/images/example/Post1.png"
            userName={userName}
            userEmail={userEmail}
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
          <LogoutArea
            onClick={() => {
              LogoutButton();
              alert("로그아웃 되었습니다.");
            }}
          >
            로그아웃
          </LogoutArea>
        </ContentPaddingArea>
        <BottomBar />
      </PageWrapper>
    </>
  );
};

export default Setting;
