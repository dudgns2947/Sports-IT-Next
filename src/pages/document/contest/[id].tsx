import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import ContestCard from "@component/components/contest/ContestCard";
import Document from "@component/components/document/Document";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import baseApi from "@component/api/utils/instance";
import { useRouter } from "next/router";
import { IContestInfo } from "@component/interfaces/contestInterface";

const DocumentArea = styled.div`
  display: flex;
  padding: 24px 0;
  flex-wrap: wrap;
`;

function getFormattedDate(inputString: string) {
  const date = new Date(inputString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
}

const ContestDocument = () => {
  const router = useRouter();
  const [contest, setContest] = useState<IContestInfo>();

  async function getContestInfo(id: number) {
    if (typeof window !== "undefined") {
      try {
        const response = await baseApi.get(`/competitions/${id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        console.log(response.data.result);
        setContest(response.data.result);
      } catch (e) {
        alert("오류가 발생하였습니다.");
      }
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      getContestInfo(parseInt(id as string));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="공문서 발급" />
        <GoBackHeader title="공문서 발급" />
        <ContentPaddingArea>
          <ContestCard
            tags={["스포츠", "대회"]}
            scrap={false}
            title={contest?.name as string}
            host={contest?.host.name as string}
            date={getFormattedDate(contest?.startDate as string)}
            contestId={contest?.competitionId as number}
            imageUrl={
              contest?.posters
                ? contest?.posters[0].posterUrl
                : "/images/logo/replace_poster.png"
            }
          />
          <DocumentArea>
            <Document name="대회 참여 확인증" documentId={6} />
            <Document name="대회 입상 확인증" documentId={6} />
            <Document name="선수 등록 확인증" documentId={6} />
            <Document name="대회 입상 확인증" documentId={6} />
            <Document name="선수 참여 확인증" documentId={6} />
            <Document name="대회 참여 확인증" documentId={6} />
            <Document name="대회 입상 확인증" documentId={6} />
            <Document name="선수 참가 확인증" documentId={6} />
          </DocumentArea>
        </ContentPaddingArea>
        <NavBar navText="선택" active={true} />
      </PageWrapper>
    </>
  );
};

export default ContestDocument;
