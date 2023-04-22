import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import * as S from "./signupSuccessStyles";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Text = styled.span`
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 10px;
`;

const ImageArea = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

const LogoImage = styled(Image)``;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 55px;
`;

const NavButton = styled.button`
  background-color: #ffffff;
  border-radius: 12px;
  width: 335px;
  height: 50px;
  font-size: 18px;
`;

const signupSuccess = () => {
  const router = useRouter();

  return (
    <S.SignUpContainer>
      <GoBackHeader />
      <Seo title="회원가입 완료" />
      <TextArea>
        <Text>회원가입이 성공적으로</Text>
        <Text>완료되었습니다 !</Text>
      </TextArea>
      <ImageArea>
        <LogoImage
          width={244}
          height={211}
          alt="App logo black"
          src="/images/logo/AppLogo_black.png"
        ></LogoImage>
      </ImageArea>
      <ButtonArea>
        <NavButton onClick={() => router.push("/auth/login")}>
          로그인 화면으로 돌아가기
        </NavButton>
      </ButtonArea>
    </S.SignUpContainer>
  );
};

export default signupSuccess;
