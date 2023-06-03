import Seo from "@component/components/Seo";
import AddButton from "@component/components/button/AddButton";
import SurveyCard from "@component/components/card/SurveyCard";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "../../styles/register/form.styles";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { RegisterForm } from "@component/interfaces/contestInterface";
import { useMutation } from "react-query";
import { registerContest } from "@component/api/contest/contestApi";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import axios from "axios";
import { baseApi } from "@component/api/utils/instance";

const AddButtonArea = styled.div`
  padding-bottom: 40px;
`;

const Form = () => {
  const [surveyList, setSurveyList] = useState<string[]>([""]);
  const token = useRecoilValue(userTokenAtom);
  const router = useRouter();

  const dumyData = {
    name: "22-23 탁구 세계 선수권 대회",
    sportCategory: "TABLE_TENNIS",
    startDate: "2023-05-26T12:00:00",
    endDate: "2023-05-28T12:00:00",
    recruitingStart: "2023-05-22T12:00:00",
    recruitingEnd: "2023-05-25T12:00:00",
    totalPrize: 100000,
    content: "탁구 세계 선수권 대회입니다.",
    location: "일본",
    locationDetail: "사이타마",
    CompetitionState: "PLANNING",
    CompetitionType: "FREE",
    maxPlayer: 90,
    maxViewer: 90,
    templateId: 3,
  };

  async function onRegister() {
    try {
      console.log(token);
      const response1 = await baseApi.post("/competitions/template", dumyData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await baseApi.post("/competitions", dumyData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <PageWrapper>
      <Seo title="대회 폼 등록" />
      <GoBackHeader title="대회 등록" />
      <S.ContentAreaWrapper>
        <S.ContestInform contestName="대한팔씨름연맹 제 26회 국가대표 선발전" contestGroup="(사)대한팔씨름연맹"></S.ContestInform>
        <S.Divider />

        {/* {surveyList.map((survey, index) => (
          <SurveyCard key={index} index={index} setSurveyList={setSurveyList} />
        ))}
        <AddButtonArea
          onClick={() => setSurveyList((current) => [...current, ""])}
        >
          <AddButton text="질문 추가하기" />
        </AddButtonArea> */}
      </S.ContentAreaWrapper>
      <Link onClick={onRegister} href="/register/register-success">
        <NavBar navText="등록" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default Form;
