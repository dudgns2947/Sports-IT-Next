import React, { SetStateAction } from "react";
import * as S from "./SurveyCard.styles";
import { IWeightSector } from "@component/interfaces/contestInterface";
import styled from "styled-components";

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
    <>
      <SurveyEndCardContainer>
        <SurveyEndLeftArea>
          <Sector>{title}</Sector>
          <Cost>{`${cost}/+${expandCost}원`}</Cost>
          <WeightArea>
            {subSectors.map((subSector, index) => (
              <Weight
                key={subSector.name}
                isLast={index === subSectors.length - 1}
              >
                {subSector.name}
              </Weight>
            ))}
          </WeightArea>
        </SurveyEndLeftArea>
        <SurveyEndRightArea>
          {/* <ModifyText>수정</ModifyText> */}
          <DeleteText
            onClick={() =>
              setWeightSectors((current) =>
                current.slice(0, cardIndex).concat(current.slice(cardIndex + 1))
              )
            }
          >
            삭제
          </DeleteText>
        </SurveyEndRightArea>
      </SurveyEndCardContainer>
      {/* <S.SurveyCardWrapper>
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
                  current
                    .slice(0, cardIndex)
                    .concat(current.slice(cardIndex + 1))
                )
              }
            />
          </S.ToggleArea>
        </S.SurveyBottomArea>
      </S.SurveyCardWrapper> */}
    </>
  );
};

export default SurveyEndCard;

const SurveyEndCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #e9ebed;
`;

const SurveyEndLeftArea = styled.div`
  display: flex;
  align-items: center;
`;

const SurveyEndRightArea = styled.div`
  display: flex;
  align-items: center;
`;

const WeightArea = styled.div`
  display: flex;
`;

const Sector = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
`;

const Cost = styled.span`
  font-size: 14px;
  color: #fd3446;
  margin-right: 20px;
`;

const Weight = styled.span<{ isLast: boolean }>`
  font-size: 14px;
  color: #747474;
  padding: 0 10px;
  border-right: ${(props) => (props.isLast ? null : "1px solid #747474")};
`;

const ModifyText = styled.span`
  font-size: 14px;
  color: #4c8bff;
  padding: 0 7px;
  cursor: pointer;
`;

const DeleteText = styled(ModifyText)`
  color: #fd3446;
`;
