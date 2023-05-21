import React, { useState } from "react";
import * as S from "./terms.styles";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Seo from "@component/components/Seo";
import Link from "next/link";
import { PageWrapper } from "@component/components/container/container";
import { useRecoilState } from "recoil";
import { appTermAtom, marketingOptInAtom, privacyPolicyAtom, thirdPartyAtom } from "@component/atoms/termAtom";

const Terms = () => {
  const [appTerm, setAppTerm] = useRecoilState(appTermAtom);
  const [privacyPolicy, setPrivacyPolicy] = useRecoilState(privacyPolicyAtom);
  const [thirdParty, setThirdParty] = useRecoilState(thirdPartyAtom);
  const [marketingOpt, setMarketingOpt] = useRecoilState(marketingOptInAtom);
  return (
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
            agree={appTerm && privacyPolicy && thirdParty && marketingOpt}
            onClick={() => {
              if (appTerm && privacyPolicy && thirdParty && marketingOpt) {
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
            <S.TermIcon agree={appTerm} onClick={() => setAppTerm((current) => !current)} />
            <S.TermText>심판규정 (필수)</S.TermText>
          </S.TermLeftArea>
          <S.TermPageIcon />
        </S.Term>
        <S.Term>
          <S.TermLeftArea>
            <S.TermIcon agree={privacyPolicy} onClick={() => setPrivacyPolicy((current) => !current)} />
            <S.TermText>복장규정 (필수)</S.TermText>
          </S.TermLeftArea>
          <S.TermPageIcon />
        </S.Term>
        <S.Term>
          <S.TermLeftArea>
            <S.TermIcon agree={thirdParty} onClick={() => setThirdParty((current) => !current)} />
            <S.TermText>시상식규정 (필수)</S.TermText>
          </S.TermLeftArea>
          <S.TermPageIcon />
        </S.Term>
      </S.TermArea>
      <Link href="/auth/signup-success">
        <NavBar navText="동의하고 다음" active={appTerm && privacyPolicy && thirdParty && marketingOpt} />
      </Link>
    </PageWrapper>
  );
};

export default Terms;
