import { baseApi } from "@component/api/utils/instance";
import {
  contestContentAtom,
  contestEndDateAtom,
  contestEventSelector,
  contestLocationAtom,
  contestLocationDetailAtom,
  contestMaxPlayerAtom,
  contestMaxViewerAtom,
  contestNameAtom,
  contestPosterList,
  contestRecruitingEndAtom,
  contestRecruitingStartAtom,
  contestRuleFileNames,
  contestRuleFiles,
  contestRuleUrlNames,
  contestRuleUrls,
  contestStartDateAtom,
  contestTotalPrizeAtom,
  contestWeightSectors,
} from "@component/atoms/contestAtom";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import Seo from "@component/components/Seo";
import { ContentArea, ContentPaddingArea } from "@component/components/area/areaComponent";
import AddButton from "@component/components/button/AddButton";
import SurveyCard from "@component/components/card/SurveyCard";
import SurveyEndCard from "@component/components/card/SurveyEndCard";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import { BoldText, BoldTextArea } from "@component/components/text/boldText";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { use, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const SurveyArea = styled.div``;

const AddButtonArea = styled.div`
  padding-bottom: 40px;
`;

interface IResponseOne {
  success: boolean;
  templateId: string;
}

const SectorAndWeight = () => {
  const [weightSectors, setWeightSectors] = useRecoilState(contestWeightSectors);
  const [contestName, setContestName] = useRecoilState(contestNameAtom);
  const [contestStartDate, setContestStartDate] = useRecoilState(contestStartDateAtom);
  const [contestEndDate, setContestEndDate] = useRecoilState(contestEndDateAtom);
  const [recruitingStart, setRecruitingStart] = useRecoilState(contestRecruitingStartAtom);
  const [recruitingEnd, setRecruitingEnd] = useRecoilState(contestRecruitingEndAtom);
  const [totalPrize, setTotalPrize] = useRecoilState(contestTotalPrizeAtom);
  const [content, setContent] = useRecoilState(contestContentAtom);
  const [location, setLocation] = useRecoilState(contestLocationAtom);
  const [locationDetail, setLocationDetail] = useRecoilState(contestLocationDetailAtom);
  const [maxPlayer, setMaxPlayer] = useRecoilState(contestMaxPlayerAtom);
  const [maxViewer, setMaxViewer] = useRecoilState(contestMaxViewerAtom);
  const eventSelector = useRecoilValue(contestEventSelector);

  const [ruleFileNames, setRuleFileNames] = useRecoilState(contestRuleFileNames);
  const [ruleFiles, setRuleFiles] = useRecoilState(contestRuleFiles);
  const [ruleUrlNames, setRuleUrlNames] = useRecoilState(contestRuleUrlNames);
  const [ruleUrls, setRuleUrls] = useRecoilState(contestRuleUrls);

  const [posterList, setPosterList] = useRecoilState(contestPosterList);

  const token = useRecoilValue(userTokenAtom);

  function eventToEnglish(event: string | undefined) {
    if (event === "축구") return "SOCCER";
    else if (event === "테니스") return "TENNIS";
    else if (event === "배드민턴") return "BADMINTON";
    else if (event === "골프") return "GOLF";
    else if (event === "탁구") return "TABLE_TENNIS";
    else if (event === "팔씨름") return "ARM_WRESTLING";
    else return "VALLEYBALL";
  }

  function createRuleUrlForm(urlNames: string[], urlList: string[]) {
    let ruleUrlForm = [];

    for (let i = 0; i < urlNames.length; i++) {
      let obj = {
        agreementName: urlNames[i],
        agreementUrl: urlList[i],
      };
      ruleUrlForm.push(obj);
    }

    // console.log(ruleUrlForm);
    return ruleUrlForm;
  }

  function createFormData(fileList: File[], formName: string) {
    const formData = new FormData();

    for (let i = 0; i < fileList.length; i++) {
      let file = fileList[i];
      formData.append(formName, file);
    }

    for (let key of formData.keys()) {
      console.log(key);
    }
    // FormData의 value 확인
    for (let value of formData.values()) {
      console.log(value);
    }

    return formData;
  }

  // function createFileFormData(fileList: File[], formName: string) {
  //   const formData = new FormData();

  //   for (let i = 0; i < fileList.length; i++) {
  //     let file = fileList[i];
  //     formData.append(formName, file);
  //   }

  //   for (let key of formData.keys()) {
  //     console.log(key);
  //   }
  //   // FormData의 value 확인
  //   for (let value of formData.values()) {
  //     console.log(value);
  //   }
  // }

  async function registerContest() {
    createRuleUrlForm(ruleUrlNames, ruleUrls);
    const response1 = await baseApi.post<IResponseOne>(
      "/competitions/template",
      { sectors: weightSectors, questionnaires: null },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response1);
    const response2 = await baseApi.post(
      "/competitions",
      {
        name: contestName,
        sportCategory: eventToEnglish(eventSelector),
        startDate: contestStartDate,
        endDate: contestEndDate,
        recruitingStart: recruitingStart,
        recruitingEnd: recruitingEnd,
        maxPlayer: maxPlayer,
        maxViewer: maxViewer,
        totalPrize: totalPrize,
        content: content,
        location: location,
        locationDetail: locationDetail,
        CompetitionType: "FREE",
        templateId: response1.data.templateId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response2);
    const response3 = await baseApi.post(`/image/poster/${response2.data.result.competitionId}`, createFormData(posterList, "posters"), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response3);
    const response4 = await baseApi.post(
      `/agreement/upload/${response2.data.result.competitionId}`,
      createFormData(ruleFiles, "agreements"),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response4);
    const response5 = await baseApi.post(
      `/agreement/save/${response2.data.result.competitionId}`,
      createRuleUrlForm(ruleUrlNames, ruleUrls),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response5);
  }
  // const contestStartDate
  console.log(contestName);
  console.log(eventSelector);
  console.log(contestStartDate);
  console.log(contestEndDate);
  console.log(recruitingStart);
  console.log(recruitingEnd);
  console.log(maxPlayer);
  console.log(maxViewer);
  console.log(totalPrize);
  console.log(content);
  console.log(location);
  console.log(locationDetail);
  console.log(token);
  console.log(weightSectors);

  console.log(ruleFileNames);
  console.log(ruleFiles);
  console.log(ruleUrlNames);
  console.log(ruleUrls);

  console.log(posterList);

  // createFormData(posterList, "posters");

  return (
    <PageWrapper>
      <Seo title="부문 및 체급등록" />
      <GoBackHeader title="대회 등록" />
      <ContentPaddingArea>
        <BoldTextArea>
          <BoldText>부문 또는 체급을</BoldText>
          <BoldText>등록해주세요.</BoldText>
        </BoldTextArea>
        <SurveyArea>
          {weightSectors
            ? weightSectors.map((weightSector, index) => (
                <SurveyEndCard
                  key={index}
                  cardIndex={index}
                  title={weightSector.title}
                  cost={weightSector.cost}
                  expandCost={weightSector.expandCost}
                  subSectors={weightSector.subSectors}
                  multi={weightSector.multi}
                  setWeightSectors={setWeightSectors}
                />
              ))
            : null}
          <SurveyCard setWeightSectors={setWeightSectors} />
        </SurveyArea>
        {/* <SurveyArea>
          {surveyList.map((survey, index) => (
            <SurveyCard index={index} setSurveyList={setSurveyList} />
          ))}
        </SurveyArea> */}
        {/* <AddButtonArea
          onClick={() => setSurveyList((current) => [...current, ""])}
        >
          <AddButton text="부문 / 체급 추가하기"></AddButton>
        </AddButtonArea> */}
      </ContentPaddingArea>
      <Link onClick={registerContest} href="/register/register-success">
        <NavBar navText="대회 등록" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default SectorAndWeight;
