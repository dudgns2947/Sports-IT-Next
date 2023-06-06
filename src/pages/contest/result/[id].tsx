import { baseApi } from "@component/api/utils/instance";
import {
  awardIndexAtom,
  awardListAtom,
  awardNameListAtom,
  isRankAtom,
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
import { BiSearch } from "react-icons/bi";
import AddButton from "@component/components/button/AddButton";
import { useRouter } from "next/router";
import { AiFillCheckCircle } from "react-icons/ai";

const dumyData = [
  {
    cost: 1000,
    expandCost: 10000,
    multi: true,
    subSectors: [
      {
        name: "-70kg",
      },
      {
        name: "-80kg",
      },
      {
        name: "-90kg",
      },
    ],
    title: "부문 1",
  },
  {
    cost: 1000,
    expandCost: 10000,
    multi: true,
    subSectors: [
      {
        name: "-70kg",
      },
      {
        name: "-80kg",
      },
      {
        name: "-90kg",
      },
    ],
    title: "부문 2",
  },
];

const SelectArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 17px 0;
  border-bottom: 1px solid #ededed;
`;

const SelectContent = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #747474;
`;

const SelectBox = styled.select`
  border: none;
  margin: 0;
  min-width: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fd3446;
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
`;

const SelectOption = styled.option``;

const ToggleArea = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

const ToggleLeft = styled.div<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  border-color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  border-radius: 6px 0px 0px 6px;
  border-right: ${(props) => (props.active ? "" : "none")};
  height: 45px;
  width: 50%;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

const ToggleRight = styled.div<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  color: ${(props) => (props.active ? "#AEAEAE" : "#212121")};
  border-color: ${(props) => (props.active ? "#AEAEAE" : "#212121")};
  border-radius: 0px 6px 6px 0px;
  border-left: ${(props) => (props.active ? "none" : "")};
  height: 45px;
  width: 50%;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

const RankArea = styled.div`
  padding: 20px 0;
`;

const Rank = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RankName = styled.div`
  height: 45px;
  width: 13%;
  background: #212121;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankForm = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 45px;
  width: 85%;
  background: #f9f9fa;
  border-radius: 12px;
`;

const RankInput = styled.input`
  background: #f9f9fa;
  padding-left: 15px;
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  right: 10px;
  top: 8px;
  width: 27px;
  height: 27px;
  color: #747474;
  cursor: pointer;
`;

const AwardArea = styled(RankArea)``;

const AwardTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding-left: 5px;
`;

const AwardForm = styled(RankForm)`
  margin-top: 10px;
  width: 100%;
`;

const AwardInput = styled(RankInput)``;

const Award = styled.div`
  margin-bottom: 24px;
`;

const RankAndWeight = styled.div`
  border-bottom: 1px solid #ededed;
`;

const DocumentArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

const DocumentToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 11px;
`;

const CheckIcon = styled(AiFillCheckCircle)<ToggleProps>`
  width: 20px;
  height: 20px;
  color: ${(props) => (props.active ? "#212121" : "#EDEDED")};
  margin-right: 5px;
`;

const CheckText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
`;

const CheckContent = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 0 2px;
  color: #747474;
`;

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
  const [permit, setPermit] = useState(false);

  const router = useRouter();
  const id = router.query.id;

  async function getSector() {
    const response1 = await baseApi.get(`/competitions/${id}`);
    const response2 = await baseApi.get(
      `/competitions/template/${response1.data.templateID}`
    );
    console.log(response2.data.result.sectors);
    setSectors(response2.data.result.sectors);
    // setSector(response2.data.result.sectors[0].title);
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
      <Seo title="대회 결과" />
      <GoBackHeader title="대회 결과" />
      <ContentPaddingArea>
        <SelectArea>
          <SelectContent>부문</SelectContent>
          <SelectBox
            value={sector}
            onChange={(e) => setSector(e.currentTarget.value)}
          >
            {sectors
              ? sectors.map((data) => (
                  <SelectOption value={data.title} key={data.title}>
                    {data.title}
                  </SelectOption>
                ))
              : null}
          </SelectBox>
        </SelectArea>
        <SelectArea>
          <SelectContent>체급</SelectContent>
          <SelectBox
            value={weight}
            onChange={(e) => setWeight(e.currentTarget.value)}
          >
            {sectors && sector === ""
              ? sectors
                  .filter((data) => data.title === sectors[0].title)[0]
                  ?.subSectors.map((subSector) => (
                    <SelectOption value={subSector.name} key={subSector.name}>
                      {subSector.name}
                    </SelectOption>
                  ))
              : sectors
                  .filter((data) => data.title === sector)[0]
                  ?.subSectors.map((subSector) => (
                    <SelectOption value={subSector.name} key={subSector.name}>
                      {subSector.name}
                    </SelectOption>
                  ))}
          </SelectBox>
        </SelectArea>
        <ToggleArea>
          <ToggleLeft onClick={() => setIsRank(true)} active={isRank}>
            등수 입력
          </ToggleLeft>
          <ToggleRight onClick={() => setIsRank(false)} active={isRank}>
            시상 입력
          </ToggleRight>
        </ToggleArea>
        <RankAndWeight>
          {isRank ? (
            <>
              <RankArea>
                {playerList.map((player, index) => (
                  <Rank key={index}>
                    <RankName>{index + 1}등</RankName>
                    <RankForm
                      onClick={() => {
                        setRankIndex(index);
                        router.push(`/contest/player-search/${id}`);
                      }}
                    >
                      <RankInput value={player.playerName} readOnly />
                      <SearchIcon />
                    </RankForm>
                  </Rank>
                ))}
              </RankArea>
              <AddButton setPlayerList={setPlayerList} text="등수 추가하기" />
            </>
          ) : (
            <>
              <AwardArea>
                {awardNameList.map((awardName, index) => (
                  <Award key={index}>
                    <AwardTitle>상 이름</AwardTitle>
                    <AwardForm>
                      <AwardInput
                        value={awardName}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder="수상 이름을 입력해주세요."
                      />
                    </AwardForm>
                    <AwardForm
                      onClick={() => {
                        setAwardIndex(index);
                        router.push(`/contest/player-search/${id}`);
                      }}
                    >
                      <AwardInput
                        value={awardList[index].playerName}
                        placeholder="선수 검색"
                        readOnly
                      />
                      <SearchIcon />
                    </AwardForm>
                  </Award>
                ))}
              </AwardArea>
              <AddButton
                setAwardList={setAwardList}
                setAwardNameList={setAwardNameList}
                text="시상 추가하기"
              />
            </>
          )}
        </RankAndWeight>
        <DocumentArea>
          <DocumentToggle onClick={() => setPermit((current) => !current)}>
            <CheckIcon active={permit} />
            <CheckText>공문서 간편 자동발급 허용</CheckText>
          </DocumentToggle>
          <CheckContent>
            선수가 시상내역에 관한 공문서 발급 요청시 자동으로 공문서가 발급되는
            서비스입니다. 공문서의 내용 및 디자인 변경을 원하시면 마이페이지의
            공문서 탭에서 수정해주세요. [이동]
          </CheckContent>
        </DocumentArea>
      </ContentPaddingArea>
      <NavBar navText="입력 완료" active={permit} />
    </PageWrapper>
  );
};

export default Result;
