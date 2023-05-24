import React, { SetStateAction, useState } from "react";
import * as S from "./SurveyCard.styles";
import { useRecoilState } from "recoil";
import { ISector, IWeightSector } from "@component/interfaces/contestInterface";
import { BiRadioCircle } from "react-icons/bi";
import styled from "styled-components";

// interface SurveyCardProps {
//   index: number;
//   setSurveyList?: React.Dispatch<SetStateAction<IWeightSector[]>>;
// }

const SectorArea = styled.div`
  display: flex;
  padding: 7px 0;
`;

const RadioIcon = styled(BiRadioCircle)`
  width: 14.9px;
  height: 15px;
  color: #ededed;
  margin-right: 2px;
`;

const SectorName = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-left: 3px;
  color: #212121;
`;

const SectorInput = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 0 2px;
  color: #aeaeae;
`;

const SectorAddArea = styled(SectorArea)`
  justify-content: space-between;
`;

const SectorInputArea = styled.div`
  display: flex;
`;

const SectorAddButton = styled.button`
  color: black;
  width: 60px;
  height: 20px;
  font-size: 12px;
  border-radius: 8px;
  padding: 2px;
`;

const SurveyCard = () => {
  const [title, setTitle] = useState<string>("");
  const [sectors, setSectors] = useState<ISector[]>([]);
  const [multi, setMulti] = useState<Boolean>();
  const [join, setJoin] = useState<Boolean>();
  const [sectorName, setSectorName] = useState<string>("");

  // const [category, setCategory] = useState("");
  // const [options, setOptions] = useState<IOption[]>();
  // const [multi, setMulti] = useState<boolean>();
  // const [duplicate, setDuplicate] = useState(false);
  // const [isChoice, setIsChoice] = useState(true);
  // const [previewImage, setPreviewImage] = useState("");
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
          placeholder="제목 없는 질문"
        />
      </S.SurveyTitleArea>
      <S.SurveyCheckArea>
        {/* <S.SurveyCheckLabel>
          <S.SurveyCheckBox />
        </S.SurveyCheckLabel> */}
        {sectors.map((sector) => (
          <SectorArea>
            <RadioIcon />
            <SectorName>{sector.name}</SectorName>
          </SectorArea>
        ))}
        <SectorAddArea>
          <SectorInputArea>
            <RadioIcon />
            <SectorInput
              value={sectorName}
              onChange={(e) => setSectorName(e.currentTarget.value)}
              placeholder="옵션을 입력해주세요."
            />
          </SectorInputArea>
          <SectorAddButton
            onClick={() => {
              setSectors((current) => {
                const tempSectors = [...current];
                tempSectors.push({ name: sectorName, join: false });
                return tempSectors;
              });
              setSectorName("");
            }}
          >
            옵션 추가
          </SectorAddButton>
        </SectorAddArea>
      </S.SurveyCheckArea>
      <S.SurveyBottomArea>
        <S.ToggleArea>
          <S.ToggleText>중복여부</S.ToggleText>
          <S.ToggleLabel>
            <S.ToggleInput
              active={true}
              role="switch"
              type="checkbox"
              onClick={() => setMulti((current) => !current)}
            />
          </S.ToggleLabel>
          <S.TrashIcon />
        </S.ToggleArea>
      </S.SurveyBottomArea>
      {/* {isChoice ? (
        <S.SurveyCheckArea>
          <S.SurveyCheckLabel>
            <S.SurveyCheckBox
              type={duplicate ? "checkbox" : "radio"}
              name="category"
              value="-70kg"
            />
            질문 1
          </S.SurveyCheckLabel>
          <S.SurveyCheckLabel>
            <S.SurveyCheckBox
              type={duplicate ? "checkbox" : "radio"}
              name="category"
              value="-60kg"
            />
            질문 2
          </S.SurveyCheckLabel>
          <S.AddCheckLabel>
            <S.SurveyCheckBox
              disabled
              type={duplicate ? "checkbox" : "radio"}
              name="category"
              value="옵션 추가"
            />
            옵션 추가
          </S.AddCheckLabel>
        </S.SurveyCheckArea>
      ) : (
        <S.SurveyCheckArea>
          <S.SurveyInput type="text" placeholder="장문형 텍스트" />
        </S.SurveyCheckArea>
      )} */}

      {/* <S.SurveyBottomArea>
        <S.BottomItems>
          <S.SelectBar onChange={() => setIsChoice((current) => !current)}>
            <S.SelectOption>객관식 질문</S.SelectOption>
            <S.SelectOption>장문형</S.SelectOption>
          </S.SelectBar>
          <S.ToggleArea>
            <S.ToggleText>중복체크</S.ToggleText>
            <S.ToggleLabel>
              <S.ToggleInput
                active={duplicate}
                role="switch"
                type="checkbox"
                onClick={() => setDuplicate((current) => !current)}
              />
            </S.ToggleLabel>
            <S.ImageIcon />
            <S.TrashIcon
              onClick={() => {
                if (typeof setSurveyList !== "undefined") {
                  setSurveyList((current) => [
                    ...current.slice(0, index),
                    ...current.slice(index + 1),
                  ]);
                }
              }}
            />
          </S.ToggleArea>
        </S.BottomItems>
      </S.SurveyBottomArea> */}
    </S.SurveyCardWrapper>
  );
};

export default SurveyCard;
