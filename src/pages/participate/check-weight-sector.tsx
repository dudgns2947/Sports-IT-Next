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
import * as S from "../../styles/participate/check-weight-sector.styles";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";

import { useState } from "react";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import { SelectBox } from "@component/styles/contest/result-input.styles";
import axios from "axios";
import {
  ContentArea,
  ContentPaddingArea,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import Head from "next/head";
import baseApi from "@component/api/utils/instance";
import { WebContainer } from "@component/styles/index.styles";
import NextButton from "@component/components/web/button/NextButton";
import Header from "@component/components/web/header/Header";
import FilterBox from "@component/components/web/checkbox/FilterBox";
import {
  FilterType,
  ISector,
  ISubSector,
} from "@component/interfaces/contestInterface";
import { SetStateAction } from "jotai";
import EventButton from "@component/components/web/button/EventButton";
import PayWeightNSectorCard from "@component/components/card/PayWeightNSector";
import FilterArea from "@component/components/web/area/FilterArea";

const ChoiceRole = () => {
  const [gender, setGender] = useState<number | undefined>(undefined);
  const [category, setCategory] = useState<number | undefined>(undefined);
  const [sector, setSector] = useState<ISector | undefined>(undefined);
  const [weight, setWeight] = useState<ISubSector | undefined>(undefined);
  const [sectorList, setSectorList] = useState<ISector[]>([]);
  // const [role, setRole] = useRecoilState<RoleAtomType>(roleAtom);
  // const [count, setCount] = useState<number>(0);
  // const [sectorName, setSectorName] = useState<string>("");
  // const [selectSectors, setSelectSectors] = useRecoilState(selectSectorAtom);
  // const [selectSubSectors, setSelectSubSectors] =
  //   useRecoilState(selectSubSectorAtom);
  // const [sectors, setSectors] = useRecoilState(participateSectors);
  // const [filterBy, setFilterBy] = useState<FilterType[]>([]);
  // const [weightCost, setWeightCost] =
  //   useRecoilState<WeightCost>(weightcostAtom);
  // const [paymentCost, setPaymentCost] = useRecoilState(paymentCostAtom);
  // const templateId = useRecoilValue(templateIdAtom);
  // const [isSubject, setIsSubject] = useState(true);
  // console.log(role);
  // console.log(count);

  // function removeFirstOccurrence(arr: string[], value: string) {
  //   const index = arr.findIndex((item) => item === value);
  //   return [...arr.slice(0, index), ...arr.slice(index + 1)];
  // }

  // const onClickCost = (
  //   sectorName: string,
  //   subSector: string,
  //   cost: number,
  //   expandCost: number
  // ) => {
  //   if (selectSectors?.includes(sectorName)) {
  //     // 부문이 존재하는 경우(중복 선택)
  //     if (selectSubSectors?.includes(subSector)) {
  //       // 부문에 이미 체급이 존재하는 경우
  //       if (
  //         selectSectors.filter((selectSector) => selectSector === sectorName)
  //           .length === 1
  //       ) {
  //         // 마지막 부문일 경우
  //         setPaymentCost((current) => current - cost); // 참가 금액 제거
  //         setSelectSectors((current) =>
  //           removeFirstOccurrence(current, sectorName)
  //         );
  //         setSelectSubSectors(
  //           selectSubSectors.filter(
  //             (selectSubSector) => selectSubSector !== subSector
  //           )
  //         );
  //       } else {
  //         setPaymentCost((current) => current - expandCost); // 참가 금액 제거
  //         setSelectSectors((current) =>
  //           removeFirstOccurrence(current, sectorName)
  //         );
  //         setSelectSubSectors(
  //           selectSubSectors.filter(
  //             (selectSubSector) => selectSubSector !== subSector
  //           )
  //         );
  //       }
  //     } else {
  //       setPaymentCost((current) => current + expandCost);
  //       const tempSelectSectors = [...selectSectors];
  //       tempSelectSectors.push(sectorName);
  //       setSelectSectors(tempSelectSectors);

  //       const tempSubSectors = [...selectSubSectors];
  //       tempSubSectors.push(subSector);
  //       setSelectSubSectors(tempSubSectors);
  //     }
  //     // setPaymentCost(current => current + cost);
  //   } else {
  //     // 부문이 존재하지 않는 경우(첫 선택)
  //     setPaymentCost((current) => current + cost);
  //     const tempSelectSectors = [...selectSectors];
  //     tempSelectSectors.push(sectorName);
  //     setSelectSectors(tempSelectSectors);
  //     const tempSelectSubSectors = [...selectSubSectors];
  //     tempSelectSubSectors.push(subSector);
  //     setSelectSubSectors(tempSelectSubSectors);
  //   }
  //   console.log("selectSectors : ", selectSectors);
  //   console.log("selectSubSectors : ", selectSubSectors);
  // };
  // const handleSectorName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setSectorName(value);
  // };
  // const handleWeightCost = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseInt(e.target.value);
  //   console.log(value);
  //   setWeightCost({
  //     cost: value,
  //     extraCost: value,
  //   });
  //   console.log("weigtCost:" + weightCost.cost);
  //   console.log("weigtCost:" + weightCost.extraCost);
  //   setPaymentCost((prev) => prev + value);
  //   console.log("paymentCost:" + paymentCost);
  //   setCount(count + 1);
  // };

  // async function getSector() {
  //   const response = await baseApi.get(`/competitions/template/${templateId}`);
  //   console.log(response.data.result.sectors);
  //   setSectors(response.data.result.sectors);
  // }

  useEffect(() => {
    // getSector();
  }, []);

  const dummy: ISector = {
    sectorCode: 1,
    sectorName: "아마추어",
    sectorGender: 1,
    subSectors: [],
  };

  return (
    <>
      <WebContainer>
        <Header />
        <PaddingArea>
          <FilterArea
            title="참가할 부문을 선택해주세요."
            describe="현장에 참가할 참가자들을 쉽게 관리해보세요!"
            gender={gender}
            category={category}
            sector={sector}
            weight={weight}
            sectorList={sectorList}
            weightList={sector?.subSectors}
            setGender={
              setGender as React.Dispatch<
                React.SetStateAction<number | undefined>
              >
            }
            setCategory={
              setCategory as React.Dispatch<
                React.SetStateAction<number | undefined>
              >
            }
            setSector={
              setSector as React.Dispatch<
                React.SetStateAction<ISector | undefined>
              >
            }
            setWeight={
              setWeight as React.Dispatch<
                React.SetStateAction<ISubSector | undefined>
              >
            }
          />
        </PaddingArea>
        {/* <FlexColumnRowCenter>
          <S.Contents>
          <S.Aside>
            <GlobalBoldText>✏️ 참가할 부문을 선택해주세요.</GlobalBoldText>
              <S.AsideContainer>
                <S.AsideContent>
                  <S.AsideCategory>
                    <S.FilterCategoryTitle>성별</S.FilterCategoryTitle>
                    <S.FilterCategoryContents>
                      <S.Label><input type="radio" name="gender" value="blue"/> 남자</S.Label>
                      <S.Label><input type="radio" name="gender" value="blue"/> 여자</S.Label>
                    </S.FilterCategoryContents> 
                  </S.AsideCategory>
                  <S.AsideCategory>
                    <S.FilterCategoryTitle>분류</S.FilterCategoryTitle>
                      <S.Label><input type="radio" name="subector" value="blue"/> 오른팔</S.Label>
                      <S.Label><input type="radio" name="subector" value="blue"/> 왼팔</S.Label>
                  </S.AsideCategory>
                  <S.AsideCategory>
                    <S.FilterCategoryTitle>부문</S.FilterCategoryTitle>
                    <select>
                      <option>프로</option>
                      <option>세미프로</option>
                      <option>아마추어</option>
                    </select>
                  </S.AsideCategory>
                  <S.AsideCategory>
                    <S.FilterCategoryTitle>체급</S.FilterCategoryTitle>
                    <select>
                      <option>-70kg</option>
                      <option>-80kg</option>
                      <option>-85kg</option>
                    </select>
                  </S.AsideCategory>
                  <S.ButtonArea>
                    <S.Button>추가</S.Button>
                    <S.Button>초기화</S.Button>
                  </S.ButtonArea>
                </S.AsideContent>
              </S.AsideContainer>
          </S.Aside>
          <S.PaymentArea>
            <PayWeightNSectorCard/>
            <PayWeightNSectorCard/>
            <Link href="/participate/payment">
              <NextButton />
            </Link>
          </S.PaymentArea>
          </S.Contents>
        </FlexColumnRowCenter> */}
      </WebContainer>
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.RoleSelectContainer>
        <GoBackHeader title="대회 신청" />
        <ContentPaddingArea>
          <S.QuestionArea>
            <S.QuestionText>부문 혹은 체급을</S.QuestionText>
            <S.QuestionText>선택 해주세요.</S.QuestionText>
          </S.QuestionArea>

          <S.SectorArea>
            {sectors
              ? sectors.map((sector) => (
                  <>
                    <S.SectorContainer key={sector.title}>
                      <S.HeaderText>
                        {sector.title} ({sector.cost}원 / +{sector.expandCost}
                        원)
                      </S.HeaderText>
                    </S.SectorContainer>
                    <S.SurveyArea>
                      {sector.subSectors
                        ? sector.subSectors.map((subSector, index) => (
                            <S.SurveyCheckLabel key={index}>
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
        </ContentPaddingArea>

        <Link href="/participate/payment">
          <NavBar
            navText={`참가비 ${paymentCost} 원 결제하기`}
            active={weightCost ? true : false}
          />
        </Link>
      </S.RoleSelectContainer> */}
    </>
  );
};

export default ChoiceRole;
