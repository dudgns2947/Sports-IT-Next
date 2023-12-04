import React, { useEffect, useState } from "react";
import * as S from "../../styles/participate/terms.styles";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Seo from "@component/components/Seo";
import Link from "next/link";
import { PageWrapper } from "@component/components/container/container";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  appTermAtom,
  privacyPolicyAtom,
  thirdPartyAtom,
} from "@component/atoms/termAtom";
import Head from "next/head";
import {
  participateSectors,
  selectContestIdAtom,
} from "@component/atoms/contestAtom";
import { applyRoleAtom } from "@component/atoms/roleAtom";
import { useRouter } from "next/router";
import baseApi from "@component/api/utils/instance";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import {
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import NextButton from "@component/components/web/button/NextButton";

const Terms = () => {
  const [appTerm, setAppTerm] = useRecoilState(appTermAtom);
  const [privacyPolicy, setPrivacyPolicy] = useRecoilState(privacyPolicyAtom);
  const [thirdParty, setThirdParty] = useRecoilState(thirdPartyAtom);
  const [agreements, setAgreements] = useState([]);
  const [sectors, setSectors] = useRecoilState(participateSectors);
  const competitionId = useRecoilValue(selectContestIdAtom);
  const applyRole = useRecoilValue(applyRoleAtom);

  const router = useRouter();

  async function getFormat() {
    if (typeof window !== "undefined") {
      console.log(window.localStorage.getItem("jwt"));
      try {
        const response = await baseApi.get(
          `/competitions/${competitionId}/join/format?joinType=${applyRole}`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response);
        setAgreements(response.data.agreements);
        setSectors(response.data.template.sectors);
      } catch (e: any) {
        console.log(e);
        alert("오류가 발생하였습니다. 나중에 다시 시도해주세요.");
        router.back();
      }
    }
  }

  useEffect(() => {
    getFormat();
  }, []);
  return (
    <>
      <WebContainer>
        <Header />
        <PaddingArea>
          <S.TextArea>
            <S.Text>대회 참여약관 확인 후</S.Text>
            <S.Text>동의 해주세요.</S.Text>
          </S.TextArea>
          <S.TermArea>
            <S.TotalAgree>
              <S.TotalAgreeIcon
                agree={appTerm && privacyPolicy && thirdParty}
                onClick={() => {
                  if (appTerm && privacyPolicy && thirdParty) {
                    setAppTerm(false);
                    setPrivacyPolicy(false);
                    setThirdParty(false);
                  } else {
                    setAppTerm(true);
                    setPrivacyPolicy(true);
                    setThirdParty(true);
                  }
                }}
              />
              <S.TotalAgreeText>전체 약관에 동의합니다.</S.TotalAgreeText>
            </S.TotalAgree>
            <S.Term>
              <S.TermLeftArea>
                <S.TermIcon
                  agree={appTerm}
                  onClick={() => setAppTerm((current) => !current)}
                />
                <S.TermText>심판규정 (필수)</S.TermText>
              </S.TermLeftArea>
              <S.TermPageIcon />
            </S.Term>
            <S.Term>
              <S.TermLeftArea>
                <S.TermIcon
                  agree={privacyPolicy}
                  onClick={() => setPrivacyPolicy((current) => !current)}
                />
                <S.TermText>복장규정 (필수)</S.TermText>
              </S.TermLeftArea>
              <S.TermPageIcon />
            </S.Term>
            <S.Term>
              <S.TermLeftArea>
                <S.TermIcon
                  agree={thirdParty}
                  onClick={() => setThirdParty((current) => !current)}
                />
                <S.TermText>시상식규정 (필수)</S.TermText>
              </S.TermLeftArea>
              <S.TermPageIcon />
            </S.Term>
          </S.TermArea>
        </PaddingArea>
        <FlexColumnRowCenter>
          <Link href="/participate/check-weight-sector">
            <NextButton />
          </Link>
        </FlexColumnRowCenter>
      </WebContainer>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <GoBackHeader title="대회 신청" />
        <Seo title="서비스 약관동의" />
        <S.TextArea>
          <S.Text>대회 참여약관 확인 후</S.Text>
          <S.Text>동의 해주세요.</S.Text>
        </S.TextArea>
        <S.TermArea>
          <S.TotalAgree>
            <S.TotalAgreeIcon
              agree={appTerm && privacyPolicy && thirdParty}
              onClick={() => {
                if (appTerm && privacyPolicy && thirdParty) {
                  setAppTerm(false);
                  setPrivacyPolicy(false);
                  setThirdParty(false);
                } else {
                  setAppTerm(true);
                  setPrivacyPolicy(true);
                  setThirdParty(true);
                }
              }}
            />
            <S.TotalAgreeText>전체 약관에 동의합니다.</S.TotalAgreeText>
          </S.TotalAgree>
          <S.Term>
            <S.TermLeftArea>
              <S.TermIcon
                agree={appTerm}
                onClick={() => setAppTerm((current) => !current)}
              />
              <S.TermText>심판규정 (필수)</S.TermText>
            </S.TermLeftArea>
            <S.TermPageIcon />
          </S.Term>
          <S.Term>
            <S.TermLeftArea>
              <S.TermIcon
                agree={privacyPolicy}
                onClick={() => setPrivacyPolicy((current) => !current)}
              />
              <S.TermText>복장규정 (필수)</S.TermText>
            </S.TermLeftArea>
            <S.TermPageIcon />
          </S.Term>
          <S.Term>
            <S.TermLeftArea>
              <S.TermIcon
                agree={thirdParty}
                onClick={() => setThirdParty((current) => !current)}
              />
              <S.TermText>시상식규정 (필수)</S.TermText>
            </S.TermLeftArea>
            <S.TermPageIcon />
          </S.Term>
        </S.TermArea>
        <Link href="/participate/check-weight-sector">
          <NavBar
            navText="다음"
            active={appTerm && privacyPolicy && thirdParty}
          />
        </Link>
      </PageWrapper>
    </>
  );
};

export default Terms;
