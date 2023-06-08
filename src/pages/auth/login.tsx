import React from "react";
import * as S from "../../styles/auth/login.styles";
import Link from "next/link";
import Seo from "@component/components/Seo";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { loginPost } from "@component/api/account/accountApi";
import { useRouter } from "next/router";
import { ILoginProps } from "@component/interfaces/accountInterface";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userEmailAtom, userNameAtom, userTokenAtom } from "@component/atoms/tokenAtom";
import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";
import Head from "next/head";
import { roleAtom } from "@component/atoms/roleAtom";

const Login = () => {
  const { register, handleSubmit, formState } = useForm<ILoginProps>();
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);
  const [isVisible, setIsVisible] = useState(true);
  const [userRole, setUserRole] = useRecoilState(roleAtom);
  const setUserName = useSetRecoilState(userNameAtom);
  const setUserEmail = useSetRecoilState(userEmailAtom);
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
      setUserName(res.data.name);
      setUserEmail(res.data.email);
      window.localStorage.setItem("name", res.data.name);
      window.localStorage.setItem("email", res.data.email);
      window.localStorage.setItem("role", res.data.role[0].roleName);
      console.log(userToken);
      console.log(userRole);
      if (res.data.token) {
        window.localStorage.setItem("jwt", res.data.token);
      } else {
        alert("로그인 토큰정보를 받아오지 못했습니다. ");
        router.push("/auth/login");
      }
      router.push("/");
    },
    onError: (res) => {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      console.log("Error !", res);
    },
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

  const notValidClick = () => {
    alert("준비중인 기능입니다.");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.LoginContainer>
        <Seo title="로그인" />
        <S.ImageArea>
          <S.LogoImage width={189} height={128} src="/images/logo/AppLogo_korean.png" alt="App logo" />
        </S.ImageArea>
        <S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
          <S.Input
            {...register("loginId", {
              required: "아이디는 필수 입력사항 입니다.",
            })}
            placeholder="아이디(이메일)"
          ></S.Input>
          <S.Input
            {...register("pw", {
              required: "비밀번호는 필수 입력사항 입니다.",
            })}
            type="password"
            placeholder="비밀번호"
          ></S.Input>
          <S.SubmitButton>로그인</S.SubmitButton>
        </S.Form>
        <S.AccountPanel>
          <Link href="/auth/role-select">
            <S.AccountPanelText>회원가입</S.AccountPanelText>
          </Link>
          <Link href="/auth/findinfo">
            <S.AccountPanelText>아이디/비밀번호 찾기</S.AccountPanelText>
          </Link>
        </S.AccountPanel>
        <S.EasyLoginArea>
          {/* <Link href="/auth/login">
            <S.EasyLoginImage
              width={60}
              height={60}
              src="/images/logo/KakaoLoginLogo.png"
              alt="Google Logo"
              onClick={notValidClick}
            />
          </Link>
          <Link href="/auth/login">
            <S.EasyLoginImage
              width={60}
              height={60}
              src="/images/logo/GoogleLoginLogo.png"
              alt="Google"
              onClick={notValidClick}
            />
          </Link> */}
        </S.EasyLoginArea>
        <SplashImage src="/images/splash.jpg" alt="splash" isVisible={isVisible} />
      </S.LoginContainer>
    </>
  );
};

export default Login;
