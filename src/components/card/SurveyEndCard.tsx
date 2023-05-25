import React, { SetStateAction } from "react";
import * as S from "./SurveyCard.styles";
import { IWeightSector } from "@component/interfaces/contestInterface";

interface SurveyEndCardProps extends IWeightSector {
  index: number;
  setWeightSectors: React.Dispatch<SetStateAction<IWeightSector[]>>;
}

const SurveyEndCard = ({
  index,
  title,
  cost,
  expandCost,
  sectors,
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
        {sectors.map((sector, index) => (
          <S.SectorArea key={index}>
            <S.RadioIcon />
            <S.SectorName>{sector.name}</S.SectorName>
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
                current.slice(0, index).concat(current.slice(index + 1))
              )
            }
          />
        </S.ToggleArea>
      </S.SurveyBottomArea>
    </S.SurveyCardWrapper>
  );
};

export default SurveyEndCard;
