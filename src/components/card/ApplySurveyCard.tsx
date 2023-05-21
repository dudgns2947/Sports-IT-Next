import React, { SetStateAction, useState } from "react";
import * as S from "./ApplySurveyCard.styles";

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
    <>
      <S.SurveyCardWrapper>
        <S.SurveyTopArea>
          <S.TinySqaure />
        </S.SurveyTopArea>
        <S.SurveyTitleArea>
          <S.SurveyTitleInput>단체티 사이즈를 입력해주세요</S.SurveyTitleInput>
        </S.SurveyTitleArea>
        <S.SurveyCheckArea>
          <S.SurveyCheckLabel>
            <S.SurveyCheckBox type={duplicate ? "checkbox" : "radio"} name="category" value="-70kg" />M
          </S.SurveyCheckLabel>
          <S.SurveyCheckLabel>
            <S.SurveyCheckBox type={duplicate ? "checkbox" : "radio"} name="category" value="-60kg" />L
          </S.SurveyCheckLabel>
          <S.SurveyCheckLabel>
            <S.SurveyCheckBox type={duplicate ? "checkbox" : "radio"} name="category" value="-60kg" />
            XL
          </S.SurveyCheckLabel>
        </S.SurveyCheckArea>
      </S.SurveyCardWrapper>
      <S.SurveyCardWrapper>
        <S.SurveyTopArea>
          <S.TinySqaure />
        </S.SurveyTopArea>
        <S.SurveyTitleArea>
          <S.SurveyTitleInput>이름</S.SurveyTitleInput>
        </S.SurveyTitleArea>
        <S.SurveyCheckArea>
          <S.SurveyInput placeholder="내용을 입력해주세요." />
        </S.SurveyCheckArea>
      </S.SurveyCardWrapper>
      <S.SurveyCardWrapper>
        <S.SurveyTopArea>
          <S.TinySqaure />
        </S.SurveyTopArea>
        <S.SurveyTitleArea>
          <S.SurveyTitleInput>자기소개를 적어주세요.</S.SurveyTitleInput>
        </S.SurveyTitleArea>
        <S.SurveyCheckArea>
          <S.SurveyInput placeholder="내용을 입력해주세요." />
        </S.SurveyCheckArea>
      </S.SurveyCardWrapper>
    </>
  );
};

export default SurveyCard;
