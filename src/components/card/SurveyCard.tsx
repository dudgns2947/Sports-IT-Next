import React, { SetStateAction, useState } from "react";
import * as S from "./SurveyCard.styles";

interface IOption {
  optionContent: string;
}

interface ISurvey {
  title: string;
  options: IOption[];
  image?: File;
}

interface SurveyCardProps {
  index: number;
  setSurveyList?: React.Dispatch<SetStateAction<string[]>>;
}

const SurveyCard = ({ index, setSurveyList }: SurveyCardProps) => {
  const [duplicate, setDuplicate] = useState(false);
  const [isChoice, setIsChoice] = useState(true);
  const [previewImage, setPreviewImage] = useState("");
  return (
    <S.SurveyCardWrapper>
      <S.SurveyTopArea>
        <S.TinySqaure />
      </S.SurveyTopArea>
      <S.SurveyTitleArea>
        <S.SurveyTitleInput type="text" placeholder="제목 없는 질문" />
      </S.SurveyTitleArea>

      {isChoice ? (
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
      )}

      <S.SurveyBottomArea>
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
      </S.SurveyBottomArea>
    </S.SurveyCardWrapper>
  );
};

export default SurveyCard;
