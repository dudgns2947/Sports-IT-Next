import baseApi from "@component/api/utils/instance";
import ContestDetailLayout from "@component/components/layout/ContestDetailLayout";
import Footer from "@component/components/web/footer/Footer";
import Header from "@component/components/web/header/Header";
import { IContestInfo } from "@component/interfaces/contestInterface";
import { WebContainer } from "@component/styles/index.styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Notice = () => {
  const [contest, setContest] = useState<IContestInfo>();

  const router = useRouter();

  async function getContestDetail(id: number) {
    try {
      if (typeof window !== "undefined") {
        const response = await baseApi.get(`/competitions/${id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        console.log(response.data);
        setContest(response.data.result);
        // setHostName(response.data.result.host.name);
        // setTemplateID(response.data.result.templateID);
        // setSelectContestID(response.data.result.competitionId);
        window.localStorage.setItem(
          "selectCompetitionId",
          response.data.result.competitionId
        );
        // setSelectContestName(response.data.result.name);
        window.localStorage.setItem(
          "selectCompetitionName",
          response.data.result.name
        );
        // setJoined(response.data.joined);
        return response.data.result;
      }
    } catch (e) {
      alert(e);
      router.back();
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      getContestDetail(parseInt(id as string));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  return (
    <WebContainer>
      <Header />
      <ContestDetailLayout contest={contest}>
        <>공지사항 페이지</>
      </ContestDetailLayout>
      <Footer />
    </WebContainer>
  );
};

export default Notice;
