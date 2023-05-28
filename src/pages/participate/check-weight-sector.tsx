import { roleAtom } from "../../atoms/roleAtom";
import { weightcostAtom } from "../../atoms/contestAtom";
import GoBackHeader from "../../components/header/GoBackHeader";
import { RoleAtomType } from "../../interfaces/roleInterface";
import { WeightCost } from "../../interfaces/weightCostInterface";
import React from "react";
import { useRecoilState, SetRecoilState } from "recoil";
import * as S from "./check-weight-sector.styles";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";
import { useState } from "react";

const ChoiceRole = () => {
  const [role, setRole] = useRecoilState<RoleAtomType>(roleAtom);
  const [count, setCount] = useState<number>(0);
  const [sectorName, setSectorName] = useState<string>("");
  const [weightCost, setWeightCost] =
    useRecoilState<WeightCost>(weightcostAtom);
  const [paymentCost, setPaymentCost] = useState<number>(0);
  console.log(role);
  console.log(count);
  const handleSectorName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setSectorName(value);
  };
  const handleWeightCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    console.log(value);
    setWeightCost({
      cost: value,
      extraCost: value,
    });
    console.log("weigtCost:" + weightCost.cost);
    console.log("weigtCost:" + weightCost.extraCost);
    setPaymentCost((prev) => prev + value);
    console.log("paymentCost:" + paymentCost);
    setCount(count + 1);
  };

  const costJson = {
    프로: {
      cost: 100000,
      extraCost: 20000,
    },
    세미프로: {
      cost: 90000,
      extraCost: 20000,
    },
    아마추어: {
      cost: 80000,
      extraCost: 20000,
    },
    노비스: {
      cost: 70000,
      extraCost: 20000,
    },
    하비: {
      cost: 60000,
      extraCost: 20000,
    },
  };
  return (
    <S.RoleSelectContainer>
      <GoBackHeader title="대회 신청" />
      <S.QuestionArea>
        <S.QuestionText>부문 혹은 체급을</S.QuestionText>
        <S.QuestionText>선택 해주세요.</S.QuestionText>
      </S.QuestionArea>
      <S.ChoiceContainer>
        <S.SectorArea>
          <S.SectorContainer>
            <S.HeaderText>부문</S.HeaderText>
            <S.LowerIcon></S.LowerIcon>
          </S.SectorContainer>
          <S.SurveyArea>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="radio"
                name="category"
                value="프로"
                onChange={handleSectorName}
              />
              프로
            </S.SurveyCheckLabel>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="radio"
                name="category"
                value="세미프로"
                onChange={handleSectorName}
              />
              세미프로
            </S.SurveyCheckLabel>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="radio"
                name="category"
                value="아마추어"
                onChange={handleSectorName}
              />
              아마추어
            </S.SurveyCheckLabel>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="radio"
                name="category"
                value="노비스"
                onChange={handleSectorName}
              />
              노비스
            </S.SurveyCheckLabel>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="radio"
                name="category"
                value="하비"
                onChange={handleSectorName}
              />
              하비
            </S.SurveyCheckLabel>
          </S.SurveyArea>
        </S.SectorArea>
        <S.weightArea>
          <S.SectorContainer>
            <S.HeaderText>체급</S.HeaderText>
            <S.LowerIcon></S.LowerIcon>
          </S.SectorContainer>
          {/* <S.SurveyArea>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="checkbox"
                name="category"
                value={
                  count === 0
                    ? costJson.프로.cost
                    : costJson[`${sectorName}`].extraCost
                }
                onChange={handleWeightCost}
              />
              -70kg
            </S.SurveyCheckLabel>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="checkbox"
                name="category"
                value={
                  count === 0
                    ? costJson.프로.cost
                    : costJson[`${sectorName}`].extraCost
                }
                onChange={handleWeightCost}
              />
              -78kg
            </S.SurveyCheckLabel>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="checkbox"
                name="category"
                value={
                  count === 0
                    ? costJson.프로.cost
                    : costJson[`${sectorName}`].extraCost
                }
                onChange={handleWeightCost}
              />
              -86kg
            </S.SurveyCheckLabel>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="checkbox"
                name="category"
                value={
                  count === 0
                    ? costJson.프로.cost
                    : costJson[`${sectorName}`].extraCost
                }
                onChange={handleWeightCost}
              />
              -95kg
            </S.SurveyCheckLabel>
            <S.SurveyCheckLabel>
              <S.SurveyCheckBox
                type="checkbox"
                name="category"
                value={
                  count === 0
                    ? costJson.프로.cost
                    : costJson[`${sectorName}`].extraCost
                }
                onChange={handleWeightCost}
              />
              +95kg
            </S.SurveyCheckLabel>
          </S.SurveyArea> */}
        </S.weightArea>
      </S.ChoiceContainer>
      <Link href="/participate/payment">
        <NavBar
          navText={`참가비 ${paymentCost} 원 결제하기`}
          active={weightCost ? true : false}
        />
      </Link>
    </S.RoleSelectContainer>
  );
};

export default ChoiceRole;
