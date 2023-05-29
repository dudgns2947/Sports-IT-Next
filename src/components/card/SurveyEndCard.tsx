import React, { SetStateAction } from "react";
import * as S from "./SurveyCard.styles";
import { IWeightSector } from "@component/interfaces/contestInterface";

interface SurveyEndCardProps extends IWeightSector {
  cardIndex: number;
  setWeightSectors: React.Dispatch<SetStateAction<IWeightSector[]>>;
}

const SurveyEndCard = ({
  cardIndex,
  title,
  cost,
  expandCost,
  subSectors,
  multi,
  setWeightSectors,
}: SurveyEndCardProps) => {
  return (
    <S.SurveyCardWrapper>
      <S.SurveyTopArea>
        <S.TinySqaure />
      </S.SurveyTopArea>
      <S.SurveyTitleArea>
        <S.SurveyTitle>{title}</S.SurveyTitle>
      </S.SurveyTitleArea>
      <S.SurveyCheckArea>
        {subSectors.map((sector, index) => (
          <S.SectorArea key={index}>
            <S.SectorNameWrapper>
              <S.RadioIcon />
              <S.SectorName>
                {sector.name} ( {cost}원 / +{expandCost}원 )
              </S.SectorName>
            </S.SectorNameWrapper>
          </S.SectorArea>
        ))}
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
              readOnly
            />
          </S.ToggleLabel>
          <S.TrashIcon
            onClick={() =>
              setWeightSectors((current) =>
                current.slice(0, cardIndex).concat(current.slice(cardIndex + 1))
              )
            }
          />
        </S.ToggleArea>
      </S.SurveyBottomArea>
    </S.SurveyCardWrapper>
  );
};

export default SurveyEndCard;
