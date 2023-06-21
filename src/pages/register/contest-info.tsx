import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React, { use, useEffect, useState } from "react";
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
} from "@component/atoms/contestAtom";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import { Map } from "@component/components/feel-it/Map";
import { set } from "react-hook-form";

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
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper as="form">
        <Seo title="대회 정보 입력" />
        <GoBackHeader title="대회 등록" />
        <ContentPaddingArea>
          {/* <S.InputWrapper> */}
          <InputArea>
            <InputTitle>대회 제목</InputTitle>
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
              <S.SmallInput
                onChange={(e) =>
                  setStartDate(new Date(e.currentTarget.value).toISOString())
                }
                type="date"
              />
              <S.Text>부터</S.Text>
              <S.SmallInput
                onChange={(e) =>
                  setEndDate(new Date(e.currentTarget.value).toISOString())
                }
                type="date"
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
              />
              <S.Text>부터</S.Text>
              <S.SmallInput
                onChange={(e) =>
                  setRecruitingEnd(
                    new Date(e.currentTarget.value).toISOString()
                  )
                }
                type="date"
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
          ) : null}
          {/* </S.InputWrapper> */}
        </ContentPaddingArea>

        <Link href="/register/contest-detail">
          <NavBar navText="다음" active={true} />
        </Link>
      </PageWrapper>
    </>
  );
};

export default ContestInfo;
