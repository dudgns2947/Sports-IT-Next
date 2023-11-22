import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React, { ChangeEvent, use, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Input,
  InputArea,
  InputTitle,
} from "../../styles/register/headcount.styles";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "../../styles/register/contest-info.styles";
import Link from "next/link";
import {
  ContentArea,
  ContentPaddingArea,
  FlexColumn,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import {
  contestEndDateAtom,
  contestLocationAtom,
  contestLocationDetailAtom,
  contestNameAtom,
  contestRecruitingEndAtom,
  contestRecruitingStartAtom,
  contestStartDateAtom,
  contestTotalPrizeAtom,
  contestLatitudeAtom,
  contestLongitudeAtom,
  contestTotalPrizeTextAtom,
} from "@component/atoms/contestAtom";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import { Map } from "@component/components/feel-it/Map";
import { set } from "react-hook-form";
import NextButton from "@component/components/web/button/NextButton";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import {
  ContestDetailContainer,
  ContestInfoLeft,
  ContestInfoRight,
} from "@component/styles/layout.style";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";

function transformDate(input: string) {
  const date = new Date(input);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDateString = `${year}-${month}-${day}`;
  return formattedDateString;
}

const ContestInfo = () => {
  const [contestName, setContestName] = useRecoilState(contestNameAtom);
  const [startDate, setStartDate] = useRecoilState(contestStartDateAtom);
  const [endDate, setEndDate] = useRecoilState(contestEndDateAtom);
  const [recruitingStart, setRecruitingStart] = useRecoilState(
    contestRecruitingStartAtom
  );
  const [recruitingEnd, setRecruitingEnd] = useRecoilState(
    contestRecruitingEndAtom
  );
  const [totalPrize, setTotalPrize] = useRecoilState(contestTotalPrizeAtom);
  const [totalPrizeText, setTotalPrizeText] = useRecoilState(
    contestTotalPrizeTextAtom
  );
  const [location, setLocation] = useRecoilState(contestLocationAtom) || "";
  const [locationDetail, setLocationDetail] = useRecoilState(
    contestLocationDetailAtom
  );
  const [CurrentLongitute, setCurrentLongitute] =
    useRecoilState(contestLatitudeAtom) || "";
  const [CurrentLatitude, setCurrentLatitude] =
    useRecoilState(contestLongitudeAtom) || "";

  const router = useRouter();

  const useRouteMappingLocation = () => {
    const longitute = router.query.longitute;
    const latitude = router.query.latitude;
    const newAddress = router.query.newAddress;

    useEffect(() => {
      setLocation(newAddress ? (newAddress as string) : "");
      setCurrentLongitute(longitute ? (longitute as string) : "");
      setCurrentLatitude(latitude ? (latitude as string) : "");
      router.query.longitute &&
        setTimeout(() => {
          window.scrollTo(0, 500);
        }, 100);
    }, [router.query.longitute]);

    return { longitute, latitude, newAddress };
  };

  const { longitute, latitude, newAddress } = useRouteMappingLocation();

  useEffect(() => {
    if (newAddress) {
      console.log("newAddress", newAddress);
      console.log("longitute", longitute);
      console.log("latitude", latitude);
    } else {
      console.log("주소 매핑실패");
    }
  }, [newAddress]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericInput = Number(inputValue.replace(/,/g, ""));

    setTotalPrize(numericInput);
    setTotalPrizeText(numericInput.toLocaleString());
  };

  console.log(contestName);
  console.log(startDate);
  console.log(endDate);
  console.log(recruitingStart);
  console.log(recruitingEnd);
  console.log(totalPrize);
  console.log(location);
  console.log(locationDetail);
  return (
    <>
      <WebContainer>
        <Header />
        <PaddingArea>
          <FlexColumn style={{ marginBottom: "30px" }}>
            <GlobalBoldText>📌 대회 정보를 입력해주세요.</GlobalBoldText>
            <GlobalGreyText>
              메인 페이지에 입력될 정보를 작성해주세요.
            </GlobalGreyText>
          </FlexColumn>
          <ContentPaddingArea>
            <InputArea>
              <InputTitle>대회명</InputTitle>
              <Input
                type="text"
                placeholder="ex) 제 1회 스포츠잇 대표 선발전"
                onChange={(e) => setContestName(e.currentTarget.value)}
                value={contestName!}
              ></Input>
            </InputArea>
            {/* <InputArea>
          <InputTitle>대회 기관(단체)명</InputTitle>
          <Input type="text" placeholder="ex) 스포츠잇"></Input>
        </InputArea> */}
            <InputArea>
              <InputTitle>대회 일정</InputTitle>
              <S.SmallInputWrapper>
                <div style={{ width: "50%" }}>
                  <S.SmallInput
                    onChange={(e) =>
                      setStartDate(
                        new Date(e.currentTarget.value).toISOString()
                      )
                    }
                    type="date"
                    value={transformDate(startDate!)}
                  />
                  <S.Text>부터</S.Text>
                </div>
                <div style={{ width: "50%" }}>
                  <S.SmallInput
                    onChange={(e) =>
                      setEndDate(new Date(e.currentTarget.value).toISOString())
                    }
                    type="date"
                    value={transformDate(endDate!)}
                  />
                  <S.Text>까지</S.Text>
                </div>
              </S.SmallInputWrapper>
            </InputArea>
            <InputArea>
              <InputTitle>모집 기간</InputTitle>
              <S.SmallInputWrapper>
                <div style={{ width: "50%" }}>
                  <S.SmallInput
                    onChange={(e) =>
                      setRecruitingStart(
                        new Date(e.currentTarget.value).toISOString()
                      )
                    }
                    type="date"
                    value={transformDate(recruitingStart!)}
                  />
                  <S.Text>부터</S.Text>
                </div>
                <div style={{ width: "50%" }}>
                  <S.SmallInput
                    onChange={(e) =>
                      setRecruitingEnd(
                        new Date(e.currentTarget.value).toISOString()
                      )
                    }
                    type="date"
                    value={transformDate(recruitingEnd!)}
                  />
                  <S.Text>까지</S.Text>
                </div>
              </S.SmallInputWrapper>
            </InputArea>
            <InputArea>
              <InputTitle>총 상금</InputTitle>
              <S.LargeInput
                type="text"
                placeholder="ex) 10,000,000"
                onChange={handleInputChange}
                value={totalPrizeText}
              />
            </InputArea>
            <InputArea>
              <InputTitle>개최 장소</InputTitle>
              <Input
                type="text"
                placeholder="장소 검색"
                onClick={() => {
                  router.push("/register/contest-location");
                }}
                value={location!}
              />
              <Input
                type="text"
                placeholder="상세 주소 입력"
                onChange={(e) => setLocationDetail(e.currentTarget.value)}
              />
            </InputArea>
          </ContentPaddingArea>
        </PaddingArea>
        <FlexColumnRowCenter>
          <Link href="/register/contest-detail">
            <NextButton />
          </Link>
        </FlexColumnRowCenter>
      </WebContainer>
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper as="form">
        <Seo title="대회 정보 입력" />
        <GoBackHeader title="대회 등록" />
        <ContentPaddingArea>
          {/* <S.InputWrapper> */}
      {/* <InputArea>
            <InputTitle>대회 제목</InputTitle>
            <Input
              type="text"
              placeholder="ex) 제 1회 스포츠잇 대표 선발전"
              onChange={(e) => setContestName(e.currentTarget.value)}
              value={contestName!}
            ></Input>
          </InputArea> */}
      {/* <InputArea>
          <InputTitle>대회 기관(단체)명</InputTitle>
          <Input type="text" placeholder="ex) 스포츠잇"></Input>
        </InputArea> */}
      {/* <InputArea>
            <InputTitle>대회 일정</InputTitle>
            <S.SmallInputWrapper>
              <S.SmallInput
                onChange={(e) =>
                  setStartDate(new Date(e.currentTarget.value).toISOString())
                }
                type="date"
                value={transformDate(startDate!)}
              />
              <S.Text>부터</S.Text>
              <S.SmallInput
                onChange={(e) =>
                  setEndDate(new Date(e.currentTarget.value).toISOString())
                }
                type="date"
                value={transformDate(endDate!)}
              />
              <S.Text>까지</S.Text>
            </S.SmallInputWrapper>
          </InputArea>
          <InputArea>
            <InputTitle>모집 기간</InputTitle>
            <S.SmallInputWrapper>
              <S.SmallInput
                onChange={(e) =>
                  setRecruitingStart(
                    new Date(e.currentTarget.value).toISOString()
                  )
                }
                type="date"
                value={transformDate(recruitingStart!)}
              />
              <S.Text>부터</S.Text>
              <S.SmallInput
                onChange={(e) =>
                  setRecruitingEnd(
                    new Date(e.currentTarget.value).toISOString()
                  )
                }
                type="date"
                value={transformDate(recruitingEnd!)}
              />
              <S.Text>까지</S.Text>
            </S.SmallInputWrapper>
          </InputArea>
          <InputArea>
            <InputTitle>총 상금</InputTitle>
            <S.LargeInput
              type="number"
              placeholder="ex) 10,000,000"
              onChange={(e) =>
                e.currentTarget.value !== ""
                  ? setTotalPrize(parseInt(e.currentTarget.value))
                  : 0
              }
              value={totalPrize!}
            />
          </InputArea>
          <InputArea>
            <InputTitle>개최 장소</InputTitle>
            <Input
              type="text"
              placeholder="장소 검색"
              onClick={() => {
                router.push("/register/contest-location");
              }}
              value={location!}
            />
            <Input
              type="text"
              placeholder="상세 주소 입력"
              onChange={(e) => setLocationDetail(e.currentTarget.value)}
            />
          </InputArea>
          {location ? (
            <Map
              latitude={parseFloat(CurrentLatitude!)}
              longitude={parseFloat(CurrentLongitute!)}
              addressName={location!}
            />
      //     ) : null} */}
    </>
  );
};

export default ContestInfo;
