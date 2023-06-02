import { roleAtom } from "../../atoms/roleAtom";
import {
  participateSectors,
  paymentCostAtom,
  selectSectorAtom,
  selectSubSectorAtom,
  templateIdAtom,
  weightcostAtom,
} from "../../atoms/contestAtom";
import GoBackHeader from "../../components/header/GoBackHeader";
import { RoleAtomType } from "../../interfaces/roleInterface";
import { WeightCost } from "../../interfaces/weightCostInterface";
import React, { useEffect } from "react";
import { useRecoilState, SetRecoilState, useRecoilValue } from "recoil";
import * as S from "./check-weight-sector.styles";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";
import { useState } from "react";
import axios from "axios";
import { ContentArea } from "@component/components/area/areaComponent";
import { baseApi } from "@component/api/utils/instance";

const ChoiceRole = () => {
  const [role, setRole] = useRecoilState<RoleAtomType>(roleAtom);
  const [count, setCount] = useState<number>(0);
  const [sectorName, setSectorName] = useState<string>("");
  const [selectSectors, setSelectSectors] = useRecoilState(selectSectorAtom);
  const [selectSubSectors, setSelectSubSectors] =
    useRecoilState(selectSubSectorAtom);
  const [sectors, setSectors] = useRecoilState(participateSectors);
  const [weightCost, setWeightCost] =
    useRecoilState<WeightCost>(weightcostAtom);
  const [paymentCost, setPaymentCost] = useRecoilState(paymentCostAtom);
  const templateId = useRecoilValue(templateIdAtom);
  console.log(role);
  console.log(count);

  function removeFirstOccurrence(arr: string[], value: string) {
    const index = arr.findIndex((item) => item === value);
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  const onClickCost = (
    sectorName: string,
    subSector: string,
    cost: number,
    expandCost: number
  ) => {
    if (selectSectors?.includes(sectorName)) {
      // 부문이 존재하는 경우(중복 선택)
      if (selectSubSectors?.includes(subSector)) {
        // 부문에 이미 체급이 존재하는 경우
        if (
          selectSectors.filter((selectSector) => selectSector === sectorName)
            .length === 1
        ) {
          // 마지막 부문일 경우
          setPaymentCost((current) => current - cost); // 참가 금액 제거
          setSelectSectors((current) =>
            removeFirstOccurrence(current, sectorName)
          );
          setSelectSubSectors(
            selectSubSectors.filter(
              (selectSubSector) => selectSubSector !== subSector
            )
          );
        } else {
          setPaymentCost((current) => current - expandCost); // 참가 금액 제거
          setSelectSectors((current) =>
            removeFirstOccurrence(current, sectorName)
          );
          setSelectSubSectors(
            selectSubSectors.filter(
              (selectSubSector) => selectSubSector !== subSector
            )
          );
        }
      } else {
        setPaymentCost((current) => current + expandCost);
        const tempSelectSectors = [...selectSectors];
        tempSelectSectors.push(sectorName);
        setSelectSectors(tempSelectSectors);

        const tempSubSectors = [...selectSubSectors];
        tempSubSectors.push(subSector);
        setSelectSubSectors(tempSubSectors);
      }
      // setPaymentCost(current => current + cost);
    } else {
      // 부문이 존재하지 않는 경우(첫 선택)
      setPaymentCost((current) => current + cost);
      const tempSelectSectors = [...selectSectors];
      tempSelectSectors.push(sectorName);
      setSelectSectors(tempSelectSectors);
      const tempSelectSubSectors = [...selectSubSectors];
      tempSelectSubSectors.push(subSector);
      setSelectSubSectors(tempSelectSubSectors);
    }
    console.log("selectSectors : ", selectSectors);
    console.log("selectSubSectors : ", selectSubSectors);
  };
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

  async function getSector() {
    const response = await baseApi.get(`/competitions/template/${templateId}`);
    console.log(response.data.result.sectors);
    setSectors(response.data.result.sectors);
  }

  useEffect(() => {
    getSector();
  }, []);
  return (
    <S.RoleSelectContainer>
      <GoBackHeader title="대회 신청" />
      <ContentArea>
        <S.QuestionArea>
          <S.QuestionText>부문 혹은 체급을</S.QuestionText>
          <S.QuestionText>선택 해주세요.</S.QuestionText>
        </S.QuestionArea>

        <S.SectorArea>
          {sectors
            ? sectors.map((sector) => (
                <>
                  <S.SectorContainer>
                    <S.HeaderText>
                      {sector.title} ({sector.cost}원 / +{sector.expandCost}
                      원)
                    </S.HeaderText>
                    <S.LowerIcon></S.LowerIcon>
                  </S.SectorContainer>
                  <S.SurveyArea>
                    {sector.subSectors
                      ? sector.subSectors.map((subSector) => (
                          <S.SurveyCheckLabel>
                            <S.SurveyCheckBox
                              type="checkbox"
                              name={sector.title}
                              value={subSector.name}
                              onChange={() =>
                                onClickCost(
                                  sector.title,
                                  `${sector.title}:${subSector.name}`,
                                  sector.cost,
                                  sector.expandCost
                                )
                              }
                            />
                            {subSector.name}
                          </S.SurveyCheckLabel>
                        ))
                      : null}
                  </S.SurveyArea>
                </>
              ))
            : null}
        </S.SectorArea>
      </ContentArea>

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
