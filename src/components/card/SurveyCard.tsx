import React, { SetStateAction, useState } from "react";
import * as S from "./SurveyCard.styles";
import { useRecoilState } from "recoil";
import { ISector, IWeightSector } from "@component/interfaces/contestInterface";
import styled from "styled-components";

interface SurveyCardProps {
  setWeightSectors: React.Dispatch<SetStateAction<IWeightSector[]>>;
}

const SurveyCard = ({ setWeightSectors }: SurveyCardProps) => {
  const [title, setTitle] = useState<string>("");
  const [sectors, setSectors] = useState<ISector[]>([]);
  const [multi, setMulti] = useState<boolean>(false);
  const [join, setJoin] = useState<boolean>();
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
        {sectors.map((sector, index) => (
          <S.SectorArea key={index}>
            <S.RadioIcon />
            <S.SectorName>{sector.name}</S.SectorName>
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
                tempSectors.push({ name: sectorName, join: false });
                return tempSectors;
              });
              setSectorName("");
            }}
          >
            옵션 추가
          </S.SectorAddButton>
        </S.SectorAddArea>
      </S.SurveyCheckArea>
      <S.SurveyBottomArea>
        <S.ToggleArea>
          <S.ToggleText>중복여부</S.ToggleText>
          <S.ToggleLabel>
            <S.ToggleInput
              active={multi}
              checked={multi}
              role="switch"
              type="checkbox"
              onChange={() => setMulti((current) => !current)}
            />
          </S.ToggleLabel>
          <S.TrashIcon />
        </S.ToggleArea>
        <button
          onClick={() => {
            setWeightSectors((current) => {
              const tempWeightSectors = [...current];
              tempWeightSectors.push({
                title: title,
                cost: 0,
                expandCost: 0,
                sectors: sectors,
                multi: multi,
              });
              console.log(tempWeightSectors);
              return tempWeightSectors;
            });
            setTitle("");
            setSectors([]);
            setMulti(false);
            setSectorName("");
          }}
        >
          등록
        </button>
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
