import Seo from "@component/components/Seo";
import { ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import React, { useEffect, useState } from "react";
import * as S from "../../../styles/contest/result-input.styles";
import { useRouter } from "next/router";
import { IWeightSector } from "@component/interfaces/contestInterface";
import baseApi from "@component/api/utils/instance";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {
  resultSectorAtom,
  resultWeightAtom,
} from "@component/atoms/contestAtom";
import styled from "styled-components";

const ResultImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 27px;
  margin-right: 14px;
`;

const ResultArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ResultName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #222428;
  margin-bottom: 2px;
`;

const ResultContent = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #747474;
`;

const ResultContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IResult {
  competitionId: number | null;
  content: string;
  historyDate: string;
  name: string;
  uid: number | null;
}

const Result = () => {
  const [sectors, setSectors] = useState<IWeightSector[]>([]);
  const [sector, setSector] = useRecoilState(resultSectorAtom);
  const [weight, setWeight] = useRecoilState(resultWeightAtom);
  const [results, setResults] = useState<IResult[]>([]);
  const [hostName, setHostName] = useState("");
  const router = useRouter();
  const id = router.query.id;

  async function getResult() {
    if (typeof window !== "undefined") {
      try {
        const response = await baseApi.get(`/competitions/result/${id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        console.log(response);
        setResults(response.data);
      } catch (e) {
        alert("오류가 발생하였습니다. 잠시 후 다시 시도해주세요.");
        router.back();
      }
    }
  }

  async function getSector() {
    if (typeof window !== "undefined") {
      try {
        const response1 = await baseApi.get(`/competitions/${id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        const response2 = await baseApi.get(
          `/competitions/template/${response1.data.result.templateID}`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response1);
        console.log(response2);
        console.log(response2.data.result.sectors);
        setHostName(response1.data.result.host.name);
        setSectors(response2.data.result.sectors);
        // setSector(response2.data.result.sectors[0].title);
      } catch (e) {
        alert(e);
        router.back();
      }
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      getSector();
      getResult();
    }
    // if (!router.isReady) return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  return (
    <PageWrapper>
      <Seo title="대회 결과" />
      <GoBackHeader title="대회 결과" />
      <ContentPaddingArea>
        <S.SelectArea>
          <S.SelectContent>부문</S.SelectContent>
          <S.SelectBox
            value={sector}
            onChange={(e) => setSector(e.currentTarget.value)}
          >
            {sectors
              ? sectors.map((data) => (
                  <S.SelectOption value={data.title} key={data.title}>
                    {data.title}
                  </S.SelectOption>
                ))
              : null}
          </S.SelectBox>
        </S.SelectArea>
        <S.SelectArea>
          <S.SelectContent>체급</S.SelectContent>
          <S.SelectBox
            value={weight}
            onChange={(e) => setWeight(e.currentTarget.value)}
          >
            {sectors && sector === ""
              ? sectors
                  .filter((data) => data.title === sectors[0].title)[0]
                  ?.subSectors.map((subSector) => (
                    <S.SelectOption value={subSector.name} key={subSector.name}>
                      {subSector.name}
                    </S.SelectOption>
                  ))
              : sectors
                  .filter((data) => data.title === sector)[0]
                  ?.subSectors.map((subSector) => (
                    <S.SelectOption value={subSector.name} key={subSector.name}>
                      {subSector.name}
                    </S.SelectOption>
                  ))}
          </S.SelectBox>
        </S.SelectArea>
        <ResultArea>
          {results.map((result, index) => (
            <ResultCard key={index}>
              <ResultImage src="/images/logo/gold.webp" />
              <ResultContentWrapper>
                <ResultName>{result.name}</ResultName>
                <ResultContent>{result.content}</ResultContent>
              </ResultContentWrapper>
            </ResultCard>
          ))}
        </ResultArea>
      </ContentPaddingArea>
      {typeof window !== "undefined" &&
      window.localStorage.getItem("role") === "ROLE_INSTITUTION" &&
      window.localStorage.getItem("name") === hostName ? (
        <Link href={`/contest/result-input/${id}`}>
          <NavBar navText="대회 결과입력" active={true} />
        </Link>
      ) : null}
    </PageWrapper>
  );
};

export default Result;
