import Seo from "@component/components/Seo";
import {
  Container,
  PageWrapper,
} from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";
import * as S from "./signup.styles";
import NavBar from "@component/components/navbar/NavBar";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { roleAtom } from "@component/atoms/roleAtom";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { signupPost } from "@component/api/account/accountApi";
import { ISignupForm } from "@component/interfaces/accountInterface";
import { ContentArea } from "@component/components/area/areaComponent";

const Signup = () => {
  const { register, handleSubmit, formState } = useForm<ISignupForm>();
  const role = useRecoilValue(roleAtom);
  const router = useRouter();

  const { mutate } = useMutation("signupPost", signupPost, {
    onSuccess: (res) => {
      console.log("Signup Success !!", res);
      router.replace("/auth/terms");
    },
    onError: (res) => console.log("Error !!", res),
  });

  const onValid = (data: ISignupForm) => {
    mutate({
      email: data.email,
      pw: data.pw,
      name: data.name,
      memberType: role,
      phone: data.phone,
      activated: 1,
    });
  };

  const onInValid = () => {
    if (formState.errors.name) {
      alert(`${formState.errors?.name?.message}`);
    } else if (formState.errors.email) {
      alert(`${formState.errors?.email?.message}`);
    } else if (formState.errors.phone) {
      alert(`${formState.errors?.phone?.message}`);
    } else if (formState.errors.authNumber) {
      alert(`${formState.errors?.authNumber?.message}`);
    } else if (formState.errors.pw) {
      alert(`${formState.errors?.pw?.message}`);
    } else if (formState.errors.pwCheck) {
      alert(`${formState.errors?.pwCheck?.message}`);
    }
  };

  return (
    <PageWrapper>
      <Seo title="회원가입" />
      <GoBackHeader title="회원가입" />

      <S.Form onSubmit={handleSubmit(onValid, onInValid)}>
        <S.InputArea>
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
              {...register("phone", {
                required: "전화번호를 입력해주세요.",
              })}
              placeholder="- 없이 입력"
            ></S.InputContent>
          </S.Input>
          {/* <S.Input>
            <S.InputTitle>인증번호</S.InputTitle>
            <S.InputContent
              {...register("authNumber", {
                required: "인증번호를 입력해주세요.",
              })}
              placeholder="인증번호 입력"
            ></S.InputContent>
          </S.Input> */}
          <S.Input>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.InputContent
              {...register("pw", {
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
              {...register("pwCheck", {
                required: "비밀번호 확인을 입력해주세요.",
              })}
              placeholder="비밀번호 재입력"
              type="password"
            ></S.InputContent>
          </S.Input>
        </S.InputArea>
        <NavBar navText="다음" active={true} />
      </S.Form>
    </PageWrapper>
  );
};

export default Signup;
