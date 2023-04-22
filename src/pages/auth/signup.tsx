import Seo from "@component/components/Seo";
import { Container } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import * as S from "./signupStyles";
import NavBar from "@component/components/navbar/NavBar";
import { useForm } from "react-hook-form";
import { ISignUpForm } from "@component/interfaces/accountInterface";
import { useRecoilValue } from "recoil";
import { roleAtom } from "@component/atoms/roleAtom";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { signupPost } from "@component/api/account/accountApi";

const signup = () => {
  const { register, handleSubmit, formState } = useForm<ISignUpForm>();
  const role = useRecoilValue(roleAtom);
  const router = useRouter();

  const { mutate } = useMutation("signupPost", signupPost, {
    onSuccess: (res) => {
      console.log("Signup Success !!", res);
      router.replace("/auth/login");
    },
    onError: (res) => console.log("Error !!", res),
  });

  const onValid = (data: ISignUpForm) => {
    // mutate({
    //   loginId: data.id,
    //   pw: data.password,
    //   name: data.name,
    //   memberType: role,
    //   email: data.email,
    //   phone: data.phoneNumber,
    //   activated: 1,
    // });
    router.push("/auth/terms");
  };

  const onInValid = () => {
    if (formState.errors.id) {
      alert(`${formState.errors?.id?.message}`);
    } else if (formState.errors.password) {
      alert(`${formState.errors?.password?.message}`);
    } else if (formState.errors.passwordCheck) {
      alert(`${formState.errors?.passwordCheck?.message}`);
    } else if (formState.errors.name) {
      alert(`${formState.errors?.name?.message}`);
    } else if (formState.errors.email) {
      alert(`${formState.errors?.email?.message}`);
    } else if (formState.errors.phoneNumber) {
      alert(`${formState.errors?.phoneNumber?.message}`);
    } else if (formState.errors.authNumber) {
      alert(`${formState.errors?.authNumber?.message}`);
    }
  };

  return (
    <>
      <Seo title="회원가입" />
      <GoBackHeader title="회원가입" />
      <S.Form onSubmit={handleSubmit(onValid, onInValid)}>
        <S.InputArea>
          <S.Input>
            <S.InputTitle>아이디</S.InputTitle>
            <S.InputContent
              {...register("id", {
                required: "아이디를 입력해주세요.",
              })}
              placeholder="아이디 입력"
            ></S.InputContent>
          </S.Input>
          <S.Input>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.InputContent
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자리 이상 입력해야 합니다.",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                  message:
                    "비밀번호는 영문, 숫자, 특수문자 포함한 8 ~ 16자리를 만족하여야 합니다.",
                },
              })}
              placeholder="8 ~ 16자리 영문, 숫자, 특수문자 포함"
              type="password"
            ></S.InputContent>
          </S.Input>
          <S.Input>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <S.InputContent
              {...register("passwordCheck", {
                required: "비밀번호 확인을 입력해주세요.",
              })}
              placeholder="비밀번호 재입력"
              type="password"
            ></S.InputContent>
          </S.Input>
          <S.Input>
            <S.InputTitle>이름</S.InputTitle>
            <S.InputContent
              {...register("name", {
                required: "이름을 입력해주세요.",
              })}
              placeholder="이름 입력"
            ></S.InputContent>
          </S.Input>
          <S.Input>
            <S.InputTitle>이메일</S.InputTitle>
            <S.InputContent
              {...register("email", {
                required: "이메일를 입력해주세요.",
                pattern: {
                  value:
                    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                  message: "이메일 형식에 맞춰 입력해주세요.",
                },
              })}
              placeholder="이메일 입력"
            ></S.InputContent>
          </S.Input>
          <S.Input>
            <S.InputTitle>전화번호</S.InputTitle>
            <S.InputContent
              {...register("phoneNumber", {
                required: "전화번호를 입력해주세요.",
              })}
              placeholder="- 없이 입력"
            ></S.InputContent>
          </S.Input>
          <S.Input>
            <S.InputTitle>인증번호</S.InputTitle>
            <S.InputContent
              {...register("authNumber", {
                required: "인증번호를 입력해주세요.",
              })}
              placeholder="인증번호 입력"
            ></S.InputContent>
          </S.Input>
        </S.InputArea>

        <NavBar active={true} />
      </S.Form>
    </>
  );
};

export default signup;
