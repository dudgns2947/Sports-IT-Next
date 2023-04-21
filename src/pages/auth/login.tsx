import React from "react";
import * as S from "./loginStyles";
import Link from "next/link";
import Seo from "@component/components/Seo";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { loginPost } from "@component/api/account/accountApi";
import { useRouter } from "next/router";
import { ILoginProps } from "@component/interfaces/accountInterface";

const login = () => {
  const { register, handleSubmit, formState } = useForm<ILoginProps>();
  const router = useRouter();

  const { mutate } = useMutation("loginPost", loginPost, {
    onSuccess: (res) => {
      console.log("Login Success !", res);
      router.push("/");
    },
    onError: (res) => console.log("Error !", res),
  });

  const onValid = (data: ILoginProps) => {
    // mutate({
    //   loginId: data.loginId,
    //   pw: data.pw,
    // });
    router.push("/");
  };

  const onInvalid = () => {
    if (formState.errors?.loginId) {
      alert(`${formState.errors?.loginId?.message}`);
    } else if (formState.errors.pw) {
      alert(`${formState.errors?.pw?.message}`);
    }
  };

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
      <S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
        <S.Input
          {...register("loginId", {
            required: "아이디는 필수 입력사항 입니다.",
          })}
          placeholder="아이디(이메일)"
        ></S.Input>
        <S.Input
          {...register("pw", { required: "비밀번호는 필수 입력사항 입니다." })}
          type="password"
          placeholder="비밀번호"
        ></S.Input>
        <S.SubmitButton>로그인</S.SubmitButton>
      </S.Form>
      <S.AccountPanel>
        <Link href="/">
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
