import React from "react";
import * as S from "../../styles/auth/login.styles";
import Link from "next/link";
import Seo from "@component/components/Seo";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { loginPost } from "@component/api/account/accountApi";
import { useRouter } from "next/router";
import { ILoginProps } from "@component/interfaces/accountInterface";
import { useRecoilState } from "recoil";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";
import Head from "next/head";
import { roleAtom } from "@component/atoms/roleAtom";

const Login = () => {
  const { register, handleSubmit, formState } = useForm<ILoginProps>();
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);
  const [isVisible, setIsVisible] = useState(true);
  const [userRole, setUserRole] = useRecoilState(roleAtom);
  const router = useRouter();

  const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  console.log("Rerender !");
  console.log(isVisible);

  interface SplashImageProps {
    isVisible: boolean;
  }

  const SplashImage = styled.img<SplashImageProps>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    display: ${(props) => (props.isVisible ? "block" : "none")};
    ${(props) =>
      props.isVisible &&
      css`
        animation: ${fadeOut} 2s ease-out forwards 1s 1 normal;
      `};
  `;

  const { mutate } = useMutation("loginPost", loginPost, {
    onSuccess: (res) => {
      console.log("Login Success !", res);
      setUserToken(res.data.token);
      setUserRole(res.data.role[0].roleName);
      console.log(userToken);
      console.log(userRole);
      router.push("/");
    },
    onError: (res) => console.log("Error !", res),
  });

  const onValid = (data: ILoginProps) => {
    mutate({
      loginId: data.loginId,
      pw: data.pw,
    });
  };

  const onInvalid = () => {
    if (formState.errors?.loginId) {
      alert(`${formState.errors?.loginId?.message}`);
    } else if (formState.errors.pw) {
      alert(`${formState.errors?.pw?.message}`);
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.LoginContainer>
        <Seo title="로그인" />
        <S.ImageArea>
          <S.LogoImage width={86} height={74} src="/images/logo/AppLogo.png" alt="App logo" />
        </S.ImageArea>
        <S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
          <S.Input
            {...register("loginId", {
              required: "아이디는 필수 입력사항 입니다.",
            })}
            placeholder="아이디(이메일)"
          ></S.Input>
          <S.Input {...register("pw", { required: "비밀번호는 필수 입력사항 입니다." })} type="password" placeholder="비밀번호"></S.Input>
          <S.SubmitButton>로그인</S.SubmitButton>
        </S.Form>
        <S.AccountPanel>
          <Link href="/auth/role-select">
            <S.AccountPanelText>회원가입</S.AccountPanelText>
          </Link>
          <Link href="/">
            <S.AccountPanelText>아이디/비밀번호 찾기</S.AccountPanelText>
          </Link>
        </S.AccountPanel>
        <S.EasyLoginArea>
          <Link href="/">
            <S.EasyLoginImage width={60} height={60} src="/images/logo/KakaoLoginLogo.png" alt="Google Logo" />
          </Link>
          <Link href="/">
            <S.EasyLoginImage width={60} height={60} src="/images/logo/GoogleLoginLogo.png" alt="Google" />
          </Link>
        </S.EasyLoginArea>
        <SplashImage src="/images/splash.jpg" alt="splash" isVisible={isVisible} />
      </S.LoginContainer>
    </>
  );
};

export default Login;
