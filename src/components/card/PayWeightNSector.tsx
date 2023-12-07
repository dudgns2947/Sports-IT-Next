import React, { SetStateAction, useState } from "react";
import * as S from "./PayWeightNSector.styles";

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

const PayWeightNSectorCard = () => {
  const [duplicate, setDuplicate] = useState(false);
  const [isChoice, setIsChoice] = useState(true);
  const [previewImage, setPreviewImage] = useState("");
  return (
    <>
      <S.CardWrapper>
        <S.CardTitleArea>
          <S.Sector>남자 | 오른팔 | 프로</S.Sector> 
          <S.LowerIcon/>
        </S.CardTitleArea>
        <S.CardContentsArea>
          <S.CardContent>
            <S.Weight>-70kg</S.Weight>
            <S.RightContents>
              <S.Price>50,000원</S.Price>
              <S.Close/>
            </S.RightContents>
          </S.CardContent>
          <S.CardContent>
            <S.Weight>-86kg</S.Weight>
            <S.RightContents>
              <S.Price>50,000원</S.Price>
              <S.Close/>
            </S.RightContents>
          </S.CardContent>
        </S.CardContentsArea>
      </S.CardWrapper>
      {/* <S.SurveyCardWrapper> 
        <S.SurveyTitleArea>
          <S.SurveyTitleArea>남자 | 오른팔 | 프로</S.SurveyTitle>
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
      </S.SurveyCardWrapper> */}
    </>
  );
};

export default PayWeightNSectorCard;
