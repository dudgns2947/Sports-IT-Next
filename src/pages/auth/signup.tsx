import Seo from "@component/components/Seo";
import {
  Container,
  PageWrapper,
} from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React, { useState } from "react";
import * as S from "../../styles/auth/signup.styles";
import NavBar from "@component/components/navbar/NavBar";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { roleAtom } from "@component/atoms/roleAtom";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { signupPost, checkEmail } from "@component/api/account/accountApi";
import {
  ISignupForm,
  ICheckEmailForm,
} from "@component/interfaces/accountInterface";
import { ContentArea } from "@component/components/area/areaComponent";
import Head from "next/head";
import styled from "styled-components";
import axios from "axios";
import { baseApi } from "@component/api/utils/instance";

const DuplicateCheckButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: #f2f2f2;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin-left: 10px;
`;

const Signup = () => {
  const { register, handleSubmit, formState, watch } = useForm<ISignupForm>();
  const [duplicateEmailState, setDuplicateEmailState] = React.useState("");
  const [isDouble, setIsDouble] = useState(true);
  const [isDoubleText, setIsDoubleText] = useState("");
  const [isPhoneDouble, setIsPhoneDouble] = useState(true);
  const [isPhoneDoubleText, setIsPhoneDoubleText] = useState("");
  const role = useRecoilValue(roleAtom);
  const router = useRouter();

  const { mutate } = useMutation("signupPost", signupPost, {
    onSuccess: (res) => {
      console.log("Signup Success !!", res);
      router.replace("/auth/terms");
    },
    onError: (res) => {
      alert("이미 있는 계정입니다.");
      console.log("Error !!", res);
    },
  });

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuplicateEmailState(e.target.value);
  };

  // async function checkEmail() {
  //   const response = await baseApi.post("member/checkEmail", {
  //     email: duplicateEmailState,
  //   });
  //   console.log(response);
  // }

  async function checkEmail() {
    const response = await baseApi.post("/member/checkEmail", {
      email: watch().email,
    });
    console.log(response);
    if (response.data.isDuplicated) {
      // alert(response.data.message);
      setIsDouble(true);
      setIsDoubleText(response.data.message);
    } else {
      setIsDouble(false);
      setIsDoubleText("사용가능한 이메일입니다.");
    }
  }

  async function checkPhone() {
    console.log(watch().phone);
    const response = await baseApi.post("/member/checkPhone", {
      phone: watch().phone,
    });
    console.log(response);
    if (response.data.isDuplicate) {
      // alert(response.data.message);
      setIsPhoneDouble(true);
      setIsPhoneDoubleText(response.data.message);
    } else {
      setIsPhoneDouble(false);
      setIsPhoneDoubleText("사용가능한 번호입니다.");
    }
  }

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
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="회원가입" />
        <GoBackHeader title="회원가입" />
        <ContentArea>
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
                <S.DoubleCheckWrapper>
                  <S.InputContentTwo
                    {...register("email", {
                      required: "이메일를 입력해주세요.",
                      pattern: {
                        value:
                          /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                        message: "이메일 형식에 맞춰 입력해주세요.",
                      },
                    })}
                    placeholder="이메일 입력"
                    onChange={handleChanged}
                    type="email"
                    required
                  ></S.InputContentTwo>
                  <S.DoubleCheckButton onClick={() => checkEmail()}>
                    중복 확인
                  </S.DoubleCheckButton>
                </S.DoubleCheckWrapper>
                {isDoubleText !== "" ? (
                  isDoubleText === "중복된 이메일로 가입된 계정이 있습니다." ? (
                    <S.DisableText>{isDoubleText}</S.DisableText>
                  ) : (
                    <S.AvailableText>{isDoubleText}</S.AvailableText>
                  )
                ) : (
                  <S.DisableText>이메일 중복 확인을 해주세요.</S.DisableText>
                )}
              </S.Input>
              <S.Input>
                <S.InputTitle>전화번호</S.InputTitle>
                <S.DoubleCheckWrapper>
                  <S.InputContentTwo
                    {...register("phone", {
                      required: "전화번호를 입력해주세요.",
                    })}
                    placeholder="- 없이 입력"
                  ></S.InputContentTwo>
                  <S.DoubleCheckButton onClick={() => checkPhone()}>
                    중복 확인
                  </S.DoubleCheckButton>
                </S.DoubleCheckWrapper>
                {isPhoneDoubleText !== "" ? (
                  isPhoneDoubleText ===
                  "중복된 전화번호로 가입된 계정이 있습니다." ? (
                    <S.DisableText>{isPhoneDoubleText}</S.DisableText>
                  ) : (
                    <S.AvailableText>{isPhoneDoubleText}</S.AvailableText>
                  )
                ) : (
                  <S.DisableText>전화번호 중복 확인을 해주세요.</S.DisableText>
                )}
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
                      value:
                        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
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
            <NavBar navText="다음" active={!isDouble && !isPhoneDouble} />
          </S.Form>
        </ContentArea>
      </PageWrapper>
    </>
  );
};

export default Signup;
