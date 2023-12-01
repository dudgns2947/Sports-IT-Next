import React, { SetStateAction, useState } from "react";
import * as S from "./SurveyCard.styles";
import { useRecoilState } from "recoil";
import { ISector, IWeightSector } from "@component/interfaces/contestInterface";
import styled from "styled-components";
import { BoldSubText } from "../text/boldText";
import { Input } from "../input/inputComponent";
import { genderAtom } from "@component/atoms/contestAtom";

interface SurveyCardProps {
  setWeightSectors: React.Dispatch<SetStateAction<IWeightSector[]>>;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const SurveyCard = ({ setWeightSectors, setModalOpen }: SurveyCardProps) => {
  const [title, setTitle] = useState<string>("");
  const [sectors, setSectors] = useState<ISector[]>([]);
  const [multi, setMulti] = useState<boolean>(false);
  const [sectorName, setSectorName] = useState<string>("");
  const [cost, setCost] = useState(0);
  const [expendCost, setExpendCost] = useState(0);
  const [gender, setGender] = useRecoilState(genderAtom);
  return (
    <S.SurveyCardWrapper>
      <S.SurveyTopArea>
        <S.TinySqaure />
      </S.SurveyTopArea>
      <S.SurveyTitleArea>
        <S.SurveyTitleInput
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          placeholder="부문을 입력해주세요."
        />
      </S.SurveyTitleArea>
      <S.SurveyCheckArea>
        {/* <S.SurveyCheckLabel>
          <S.SurveyCheckBox />
        </S.SurveyCheckLabel> */}
        {sectors.map((sector, index) => (
          <S.SectorArea key={index}>
            <S.SectorNameWrapper>
              <S.RadioIcon />
              <S.SectorName>{sector.name}</S.SectorName>
            </S.SectorNameWrapper>

            <S.CloseIcon
              onClick={() =>
                setSectors((current) =>
                  current.slice(0, index).concat(current.slice(index + 1))
                )
              }
            />
          </S.SectorArea>
        ))}
        <S.SectorAddArea>
          <S.SectorInputArea>
            <S.RadioIcon />
            <S.SectorInput
              value={sectorName}
              onChange={(e) => setSectorName(e.currentTarget.value)}
              placeholder="옵션을 입력해주세요."
            />
          </S.SectorInputArea>
          <S.SectorAddButton
            onClick={() => {
              setSectors((current) => {
                const tempSectors = [...current];
                tempSectors.push({ name: sectorName });
                return tempSectors;
              });
              setSectorName("");
            }}
          >
            옵션 추가
          </S.SectorAddButton>
        </S.SectorAddArea>
      </S.SurveyCheckArea>
      {/* <div> */}
      <S.CostInputArea>
        <S.CostInputWrapper>
          <BoldSubText>단일체급 참가비용</BoldSubText>
          <S.ToggleArea>
            <S.ToggleText>중복여부</S.ToggleText>
            <S.ToggleLabel>
              <S.ToggleInput
                style={{ marginLeft: "3px" }}
                active={multi}
                checked={multi}
                role="switch"
                type="checkbox"
                onChange={() => setMulti((current) => !current)}
              />
            </S.ToggleLabel>
          </S.ToggleArea>
        </S.CostInputWrapper>
        <Input
          value={cost}
          onChange={(e) => {
            // if (e.currentTarget.value.length >= 1) {
            //   setCost(parseInt(e.currentTarget.value));
            // } else {
            //   setCost(0);
            // }
            setCost(parseInt(e.currentTarget.value));
          }}
          type="number"
          placeholder="금액을 입력해주세요."
        />
      </S.CostInputArea>
      {multi ? (
        <S.CostInputArea>
          <BoldSubText>복수체급 참가비용</BoldSubText>
          <Input
            value={expendCost}
            onChange={(e) => {
              // if (isNaN(parseInt() e.currentTarget.value)) {
              //   setExpendCost(parseInt(e.currentTarget.value));
              // } else {
              //   setExpendCost(0);
              // }
              setExpendCost(parseInt(e.currentTarget.value));
            }}
            type="number"
            placeholder="금액을 입력해주세요."
          />
        </S.CostInputArea>
      ) : null}
      {/* </div> */}

      <S.RegisterButton
        onClick={() => {
          setWeightSectors((current) => {
            const tempWeightSectors = [...current];
            tempWeightSectors.push({
              title: title,
              cost: cost,
              expandCost: expendCost,
              subSectors: sectors,
              multi: multi,
              gender: gender,
            });
            console.log(tempWeightSectors);
            return tempWeightSectors;
          });
          setTitle("");
          setSectorName("");
          setSectors([]);
          setCost(0);
          setExpendCost(0);
          setMulti(false);
          setModalOpen(false);
        }}
      >
        등록
      </S.RegisterButton>
    </S.SurveyCardWrapper>
  );
};

export default SurveyCard;
