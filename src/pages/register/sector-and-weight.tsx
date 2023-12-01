import { baseApi } from "@component/api/utils/instance";
import {
  contestContentAtom,
  contestEndDateAtom,
  // contestEventSelector,
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
  genderAtom,
} from "@component/atoms/contestAtom";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
  FlexColumn,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
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
import React, { use, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import Head from "next/head";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import { sectorWeightModalOpenAtom } from "@component/atoms/modalAtom";
import SectorWeightModal from "@component/components/web/modal/SectorWeightModal";
import NextButton from "@component/components/web/button/NextButton";

interface IResponseOne {
  success: boolean;
  templateId: string;
}

const SectorAndWeight = () => {
  const [weightSectors, setWeightSectors] =
    useRecoilState(contestWeightSectors);
  const [contestName, setContestName] = useRecoilState(contestNameAtom);
  const [contestStartDate, setContestStartDate] =
    useRecoilState(contestStartDateAtom);
  const [contestEndDate, setContestEndDate] =
    useRecoilState(contestEndDateAtom);
  const [recruitingStart, setRecruitingStart] = useRecoilState(
    contestRecruitingStartAtom
  );
  const [recruitingEnd, setRecruitingEnd] = useRecoilState(
    contestRecruitingEndAtom
  );
  const [totalPrize, setTotalPrize] = useRecoilState(contestTotalPrizeAtom);
  const [content, setContent] = useRecoilState(contestContentAtom);
  const [location, setLocation] = useRecoilState(contestLocationAtom);
  const [locationDetail, setLocationDetail] = useRecoilState(
    contestLocationDetailAtom
  );
  const [maxPlayer, setMaxPlayer] = useRecoilState(contestMaxPlayerAtom);
  const [maxViewer, setMaxViewer] = useRecoilState(contestMaxViewerAtom);
  // const eventSelector = useRecoilValue(contestEventSelector);

  const [ruleFileNames, setRuleFileNames] =
    useRecoilState(contestRuleFileNames);
  const [ruleFiles, setRuleFiles] = useRecoilState(contestRuleFiles);
  const [ruleUrlNames, setRuleUrlNames] = useRecoilState(contestRuleUrlNames);
  const [ruleUrls, setRuleUrls] = useRecoilState(contestRuleUrls);

  const [posterList, setPosterList] = useRecoilState(contestPosterList);

  const [sectorWeightModalOpen, setSectorWeightModalOpen] = useRecoilState(
    sectorWeightModalOpenAtom
  );

  const [gender, setGender] = useRecoilState(genderAtom);

  let token: string | null = "";

  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("jwt");
  }

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
        sportCategory: eventToEnglish(""),
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
    if (posterList.length !== 0) {
      const response3 = await baseApi.post(
        `/image/poster/${response2.data.result.competitionId}`,
        createFormData(posterList, "posters"),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response3);
    }

    if (ruleFiles.length !== 0) {
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
    }

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
  // console.log(contestName);
  // console.log(eventSelector);
  // console.log(contestStartDate);
  // console.log(contestEndDate);
  // console.log(recruitingStart);
  // console.log(recruitingEnd);
  // console.log(maxPlayer);
  // console.log(maxViewer);
  // console.log(totalPrize);
  // console.log(content);
  // console.log(location);
  // console.log(locationDetail);
  console.log(token);
  // console.log(weightSectors);

  // console.log(ruleFileNames);
  // console.log(ruleFiles);
  // console.log(ruleUrlNames);
  // console.log(ruleUrls);

  // console.log(posterList);

  // createFormData(posterList, "posters");

  return (
    <>
      <WebContainer>
        <Header />
        <PaddingArea style={{ marginBottom: "20px" }}>
          <FlexColumn style={{ marginBottom: "30px" }}>
            <GlobalBoldText>🗂️ 부문 또는 체급을 등록 해주세요.</GlobalBoldText>
            <GlobalGreyText>
              참가자에게 동의를 받기 위한 규정 혹은 약관이 있다면 등록해 주세요.
            </GlobalGreyText>
          </FlexColumn>
          <ContentPaddingArea>
            <RegisterArea onClick={() => setSectorWeightModalOpen(true)}>
              + 부문 및 체급 등록
            </RegisterArea>
            <SectorWeightModal
              modalOpen={sectorWeightModalOpen}
              setModalOpen={setSectorWeightModalOpen}
            />

            <GenderButton active={gender === 0} onClick={() => setGender(0)}>
              남성
            </GenderButton>
            <GenderButton active={gender === 1} onClick={() => setGender(1)}>
              여성
            </GenderButton>

            {weightSectors
              ? weightSectors.map(
                  (weightSector, index) =>
                    weightSector.gender === gender && (
                      <SurveyEndCard
                        key={index}
                        cardIndex={index}
                        title={weightSector.title}
                        cost={weightSector.cost}
                        expandCost={weightSector.expandCost}
                        subSectors={weightSector.subSectors}
                        multi={weightSector.multi}
                        gender={weightSector.gender}
                        setWeightSectors={setWeightSectors}
                      />
                    )
                )
              : null}
          </ContentPaddingArea>
        </PaddingArea>
        <FlexColumnRowCenter>
          <Link href="/register/survey">
            <NextButton />
          </Link>
        </FlexColumnRowCenter>
      </WebContainer>
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
          </SurveyArea> */}
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
      {/* </ContentPaddingArea>
        <Link href="/register/survey">
          <NavBar navText="대회 등록" active={true} />
        </Link>
      </PageWrapper> */}
    </>
  );
};

export default SectorAndWeight;

const RegisterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted #000000;
  width: 100%;
  height: 56px;
  font-size: 16px;
  border-radius: 6px;
  margin: 20px 0;
  cursor: pointer;
`;

const GenderButton = styled.button<{ active: boolean }>`
  width: 68px;
  height: 38px;
  border-radius: 20px;
  color: ${(props) => (props.active ? "#ffffff" : "212121")};
  background-color: ${(props) => (props.active ? "#212121" : "ffffff")};
  margin-right: 7px;
  border: ${(props) => (props.active ? null : "1px solid #E9EBED")};
`;
