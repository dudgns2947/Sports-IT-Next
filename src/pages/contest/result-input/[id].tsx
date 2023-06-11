import { baseApi } from "@component/api/utils/instance";
import {
  awardIndexAtom,
  awardListAtom,
  awardNameListAtom,
  isRankAtom,
  participantsAtom,
  playerListAtom,
  rankIndexAtom,
  resultSectorAtom,
  resultWeightAtom,
  templateIdAtom,
} from "@component/atoms/contestAtom";
import { roleAtom } from "@component/atoms/roleAtom";
import Seo from "@component/components/Seo";
import { ContentPaddingArea } from "@component/components/area/areaComponent";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import {
  IWeightSector,
  PlayerInfo,
  ToggleProps,
} from "@component/interfaces/contestInterface";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import AddButton from "@component/components/button/AddButton";
import { useRouter } from "next/router";
import * as S from "../../../styles/contest/result-input.styles";
import { headers } from "next/dist/client/components/headers";

const Result = () => {
  const [sectors, setSectors] = useState<IWeightSector[]>([]);
  const [sector, setSector] = useRecoilState(resultSectorAtom);
  const [weight, setWeight] = useRecoilState(resultWeightAtom);
  const [templateId, setTemplateId] = useRecoilState(templateIdAtom);
  const [isRank, setIsRank] = useRecoilState(isRankAtom);
  const [playerList, setPlayerList] = useRecoilState(playerListAtom);
  const [awardList, setAwardList] = useRecoilState(awardListAtom);
  const [rankIndex, setRankIndex] = useRecoilState(rankIndexAtom);
  const [awardNameList, setAwardNameList] = useRecoilState(awardNameListAtom);
  const [awardInput, setAwardInput] = useState("");
  const [awardIndex, setAwardIndex] = useRecoilState(awardIndexAtom);
  const [participants, setParticipants] = useRecoilState(participantsAtom);

  const [permit, setPermit] = useState(false);

  const router = useRouter();
  const id = router.query.id;

  async function getSector() {
    if (typeof window !== "undefined") {
      try {
        const response1 = await baseApi.get(`/competitions/${id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        const response2 = await baseApi.get(
          `/competitions/template/${response1.data.result.templateID}`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response1);
        const response3 = await baseApi.get(
          `/competitions/${response1.data.result.competitionId}/participants`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response3);
        console.log(response2.data.result.sectors);
        setSectors(response2.data.result.sectors);
        setParticipants(response3.data.result);
        // setSector(response2.data.result.sectors[0].title);
      } catch (e) {
        alert(e);
        router.back();
      }
    }
  }

  async function postResult() {
    if (typeof window !== "undefined") {
      if (isRank) {
        const response = await baseApi.post(
          "https://sports-it-test.store/api/competitionResult",
          {
            info: playerList.map((player, index) => {
              return {
                uid: player.playerId,
                content: `${index + 1}등`,
                competitionId: id,
              };
            }),
          },
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response);
        if (response.data === "Success") {
          router.back();
        }
      } else {
        const response = await baseApi.post(
          "https://sports-it-test.store/api/competitionResult",
          {
            info: awardList.map((award, index) => {
              return {
                uid: award.playerId,
                content: awardNameList[index],
                competitionId: id,
              };
            }),
          },
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response);
        if (response.data === "Success") {
          router.back();
        }
      }
      setAwardList([]);
      setAwardNameList([]);
      setPlayerList([]);
      setRankIndex(0);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      getSector();
    }
    // if (!router.isReady) return;
  }, [router.isReady]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedInputs = [...awardNameList];
    updatedInputs[index] = e.currentTarget.value;
    setAwardNameList(updatedInputs);
  };

  console.log(sectors);
  console.log(playerList);
  console.log(awardList);
  console.log(awardNameList);
  console.log(awardInput);
  return (
    <PageWrapper>
      <Seo title="대회 결과 입력" />
      <GoBackHeader title="대회 결과 입력" />
      <ContentPaddingArea>
        <S.SelectArea>
          <S.SelectContent>부문</S.SelectContent>
          <S.SelectBox
            value={sector}
            onChange={(e) => setSector(e.currentTarget.value)}
          >
            {sectors
              ? sectors.map((data) => (
                  <S.SelectOption value={data.title} key={data.title}>
                    {data.title}
                  </S.SelectOption>
                ))
              : null}
          </S.SelectBox>
        </S.SelectArea>
        <S.SelectArea>
          <S.SelectContent>체급</S.SelectContent>
          <S.SelectBox
            value={weight}
            onChange={(e) => setWeight(e.currentTarget.value)}
          >
            {sectors && sector === ""
              ? sectors
                  .filter((data) => data.title === sectors[0].title)[0]
                  ?.subSectors.map((subSector) => (
                    <S.SelectOption value={subSector.name} key={subSector.name}>
                      {subSector.name}
                    </S.SelectOption>
                  ))
              : sectors
                  .filter((data) => data.title === sector)[0]
                  ?.subSectors.map((subSector) => (
                    <S.SelectOption value={subSector.name} key={subSector.name}>
                      {subSector.name}
                    </S.SelectOption>
                  ))}
          </S.SelectBox>
        </S.SelectArea>
        <S.ToggleArea>
          <S.ToggleLeft onClick={() => setIsRank(true)} active={isRank}>
            등수 입력
          </S.ToggleLeft>
          <S.ToggleRight onClick={() => setIsRank(false)} active={isRank}>
            시상 입력
          </S.ToggleRight>
        </S.ToggleArea>
        <S.RankAndWeight>
          {isRank ? (
            <>
              <S.RankArea>
                {playerList.map((player, index) => (
                  <S.Rank key={index}>
                    <S.RankName>{index + 1}등</S.RankName>
                    <S.RankForm
                      onClick={() => {
                        setRankIndex(index);
                        router.push(`/contest/player-search/${id}`);
                      }}
                    >
                      <S.RankInput value={player.playerName} readOnly />
                      <S.SearchIcon />
                    </S.RankForm>
                  </S.Rank>
                ))}
              </S.RankArea>
              <AddButton setPlayerList={setPlayerList} text="등수 추가하기" />
            </>
          ) : (
            <>
              <S.AwardArea>
                {awardNameList.map((awardName, index) => (
                  <S.Award key={index}>
                    <S.AwardTitle>상 이름</S.AwardTitle>
                    <S.AwardForm>
                      <S.AwardInput
                        value={awardName}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder="수상 이름을 입력해주세요."
                      />
                    </S.AwardForm>
                    <S.AwardForm
                      onClick={() => {
                        setAwardIndex(index);
                        router.push(`/contest/player-search/${id}`);
                      }}
                    >
                      <S.AwardInput
                        value={awardList[index].playerName}
                        placeholder="선수 검색"
                        readOnly
                      />
                      <S.SearchIcon />
                    </S.AwardForm>
                  </S.Award>
                ))}
              </S.AwardArea>
              <AddButton
                setAwardList={setAwardList}
                setAwardNameList={setAwardNameList}
                text="시상 추가하기"
              />
            </>
          )}
        </S.RankAndWeight>
        <S.DocumentArea>
          <S.DocumentToggle onClick={() => setPermit((current) => !current)}>
            <S.CheckIcon active={permit} />
            <S.CheckText>공문서 간편 자동발급 허용</S.CheckText>
          </S.DocumentToggle>
          <S.CheckContent>
            선수가 시상내역에 관한 공문서 발급 요청시 자동으로 공문서가 발급되는
            서비스입니다. 공문서의 내용 및 디자인 변경을 원하시면 마이페이지의
            공문서 탭에서 수정해주세요. [이동]
          </S.CheckContent>
        </S.DocumentArea>
      </ContentPaddingArea>
      <div onClick={postResult}>
        <NavBar navText="입력 완료" active={permit} />
      </div>
    </PageWrapper>
  );
};

export default Result;
