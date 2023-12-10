import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React, { useState } from "react";
import { Text, TextArea } from "../../styles/auth/event-select.styles";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "../../styles/register/headcount.styles";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  contestMaxPlayerAtom,
  contestMaxViewerAtom,
} from "@component/atoms/contestAtom";
import { useRouter } from "next/router";
import { HeadCountForm } from "@component/interfaces/headcountInterface";
import Head from "next/head";

const Headcount = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<HeadCountForm>();
  const [maxNumOfPlayers, setMaxNumOfPlayers] =
    useRecoilState(contestMaxPlayerAtom);
  const [maxNumOfAudience, setMaxNumOfAudience] =
    useRecoilState(contestMaxViewerAtom);
  // const setMaxNumOfPlayers = useSetRecoilState(contestMaxPlayerAtom);
  // const setMaxNumOfAudience = useSetRecoilState(contestMaxViewerAtom);
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");
  const [errorMsgTwo, setErrorMsgTwo] = useState<string | undefined>("");

  console.log(maxNumOfPlayers);
  console.log(maxNumOfAudience);

  const onValid = (data: HeadCountForm) => {
    // if (data.numOfPlayers) {
    //   setMaxNumOfPlayers(data.numOfPlayers);
    // }
    // if (data.numOfAudience) {
    //   setMaxNumOfAudience(data.numOfAudience);
    // }
    router.push("/register/contest-info");
  };

  const onInValid = () => {
    if (formState.errors.numOfPlayers) {
      setErrorMsg(formState.errors.numOfPlayers.message);
    } else {
      setErrorMsg("");
    }
    if (formState.errors.numOfAudience?.message) {
      setErrorMsgTwo(formState.errors.numOfAudience?.message);
    } else {
      setErrorMsgTwo("");
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="대회 정원 입력" />
        <GoBackHeader title="대회 등록" />
        <TextArea>
          <Text>대회 정원을</Text>
          <Text>입력해주세요.</Text>
          <S.SubText>정원에 제한이 없을 시 공백으로 남겨주세요.</S.SubText>
        </TextArea>
        <S.Form onSubmit={handleSubmit(onValid, onInValid)}>
          <S.InputWrapper>
            <S.InputArea>
              <S.InputTitle>선수 정원</S.InputTitle>
              <S.Input
                {...register("numOfPlayers", {
                  validate: (value) =>
                    value >= 0
                      ? true
                      : "선수 정원은 0 이상의 수로 입력해주세요.",
                })}
                type="number"
                placeholder="최대 선수 인원을 입력해주세요."
              ></S.Input>
              <S.ErrorMessage>
                {errorMsg === "" ? null : errorMsg}
              </S.ErrorMessage>
            </S.InputArea>
            <S.InputArea>
              <S.InputTitle>관람객 정원</S.InputTitle>
              <S.Input
                {...register("numOfAudience", {
                  validate: (value) =>
                    value >= 0
                      ? true
                      : "관람객 정원은 0 이상의 수로 입력해주세요.",
                })}
                type="number"
                placeholder="최대 관람객 인원을 입력해주세요."
              ></S.Input>
              <S.ErrorMessage>
                {errorMsgTwo === "" ? null : errorMsgTwo}
              </S.ErrorMessage>
            </S.InputArea>
          </S.InputWrapper>
          <NavBar navText="다음" active={true} />
        </S.Form>
      </PageWrapper>
    </>
  );
};

export default Headcount;
