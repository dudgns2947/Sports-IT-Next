import React from "react";
import * as S from "./loginStyles";
import Link from "next/link";
import Seo from "@component/components/Seo";

const login = () => {
  return (
    <S.LoginContainer>
      <Seo title="로그인" />
      <S.ImageArea>
        <S.LogoImage
          width={86}
          height={74}
          src="/images/logo/AppLogo.png"
          alt="App logo"
        />
      </S.ImageArea>
      <S.Form>
        <S.Input placeholder="아이디(이메일)"></S.Input>
        <S.Input type="password" placeholder="비밀번호"></S.Input>
        <S.SubmitButton>로그인</S.SubmitButton>
      </S.Form>
      <S.AccountPanel>
        <Link href="/role-select">
          <S.AccountPanelText>회원가입</S.AccountPanelText>
        </Link>
        <Link href="/">
          <S.AccountPanelText>아이디/비밀번호 찾기</S.AccountPanelText>
        </Link>
      </S.AccountPanel>
      <S.EasyLoginArea>
        <Link href="/">
          <S.EasyLoginImage
            width={60}
            height={60}
            src="/images/logo/KakaoLoginLogo.png"
            alt="Google Logo"
          />
        </Link>
        <Link href="/">
          <S.EasyLoginImage
            width={60}
            height={60}
            src="/images/logo/GoogleLoginLogo.png"
            alt="Google"
          />
        </Link>
      </S.EasyLoginArea>
    </S.LoginContainer>
  );
};

export default login;
