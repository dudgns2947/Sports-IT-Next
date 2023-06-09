import Seo from "@component/components/Seo";
import { ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import React, { useEffect, useState } from "react";
import * as S from "../../../styles/contest/result-input.styles";
import { useRouter } from "next/router";
import { IWeightSector } from "@component/interfaces/contestInterface";
import { baseApi } from "@component/api/utils/instance";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {
  resultSectorAtom,
  resultWeightAtom,
} from "@component/atoms/contestAtom";

const Result = () => {
  const [sectors, setSectors] = useState<IWeightSector[]>([]);
  const [sector, setSector] = useRecoilState(resultSectorAtom);
  const [weight, setWeight] = useRecoilState(resultWeightAtom);
  const [hostName, setHostName] = useState("");
  const router = useRouter();
  const id = router.query.id;

  async function getSector() {
    const response1 = await baseApi.get(`/competitions/${id}`);
    const response2 = await baseApi.get(
      `/competitions/template/${response1.data.templateID}`
    );
    console.log(response1);
    console.log(response2);
    console.log(response2.data.result.sectors);
    setHostName(response1.data.host.name);
    setSectors(response2.data.result.sectors);
    // setSector(response2.data.result.sectors[0].title);
  }

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      getSector();
    }
    // if (!router.isReady) return;
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
      </ContentPaddingArea>
      {typeof window !== "undefined" &&
      window.localStorage.getItem("role") === "ROLE_INSTITUTION" &&
      window.localStorage.getItem("name") === hostName ? (
        <Link href={`/contest/result-input/${id}`}>
          <NavBar navText="입력 완료" active={true} />
        </Link>
      ) : null}
    </PageWrapper>
  );
};

export default Result;
