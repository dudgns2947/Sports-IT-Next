import * as S from "../../styles/participate/apply-success.styles";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import SuccessIcon from "../../../public/images/icon/Icon5.png";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  applyContestIdAtom,
  finalPaymentAtom,
  participateFormAtom,
  paymentCostAtom,
  selectContestIdAtom,
  selectContestNameAtom,
  selectSectorAtom,
  selectSubSectorAtom,
} from "@component/atoms/contestAtom";
import Head from "next/head";
import { useRouter } from "next/router";
import { baseApi } from "@component/api/utils/instance";
import { applyRoleAtom } from "@component/atoms/roleAtom";
import {
  appTermAtom,
  privacyPolicyAtom,
  thirdPartyAtom,
} from "@component/atoms/termAtom";

const ApplySuccess = () => {
  const selectContestId = useRecoilValue(selectContestIdAtom);
  const selectContestName = useRecoilValue(selectContestNameAtom);
  const [appTerm, setAppTerm] = useRecoilState(appTermAtom);
  const [payment, setPayment] = useRecoilState(paymentCostAtom);
  const [privacyPolicy, setPrivacyPolicy] = useRecoilState(privacyPolicyAtom);
  const [thirdParty, setThirdParty] = useRecoilState(thirdPartyAtom);
  const [selectSectors, setSelectSectors] = useRecoilState(selectSectorAtom);
  const [selectSubSectors, setSelectSubSectors] =
    useRecoilState(selectSubSectorAtom);
  const form = useRecoilValue(participateFormAtom);
  const [applyContestId, setApplyContestId] =
    useRecoilState(applyContestIdAtom);
  const [finalPayment, setFinalPayment] = useRecoilState(finalPaymentAtom);
  const applyRole = useRecoilValue(applyRoleAtom);
  const router = useRouter();
  const query = router.query;

  async function postResult() {
    if (query.imp_uid && query.merchant_uid && query.imp_success) {
      setApplyContestId(query.merchant_uid as string);
      if (typeof window !== "undefined") {
        try {
          const response = await baseApi.post(
            `/payment/complete/${window.localStorage.getItem(
              "selectCompetitionId"
            )}`,
            {
              imp_uid: query.imp_uid,
              merchant_uid: query.merchant_uid,
              amount: window.localStorage.getItem("finalPayment"),
              paymentType: "kakaopay",
              status: "paid",
              content: window.localStorage.getItem("selectCompetitionName"),
            },
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
              },
            }
          );
          console.log(response);
          const response2 = await baseApi.post(
            `/competitions/${window.localStorage.getItem(
              "selectCompetitionId"
            )}/join?joinType=${window.localStorage.getItem("applyRole")}`,
            {
              uid: null,
              competitionId: null,
              formId: window.localStorage.getItem("form"),
            },
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
              },
            }
          );
          console.log(response2);
          if (response2.data.success === true) {
            setPayment(0);
            setAppTerm(false);
            setPrivacyPolicy(false);
            setThirdParty(false);
            setSelectSectors([]);
            setSelectSubSectors([]);
          }
        } catch (e) {
          alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
          router.back();
        }
      }
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const query = router.query;
      if (!query) return;
      postResult();
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.SuccessContainer>
        <S.QuestionArea>
          <Image
            src={SuccessIcon}
            alt="Success Image"
            style={{ width: "100px", height: "94.25px", marginBottom: "20px" }}
          />
          <S.QuestionText>대회 신청서가</S.QuestionText>
          <S.QuestionText>등록되었습니다!</S.QuestionText>
        </S.QuestionArea>
        <S.DetailArea>
          <S.DetailContainer>
            <S.DetailTitle>결제금액</S.DetailTitle>
            <S.DetailMoney>
              {finalPayment !== 0
                ? finalPayment
                : typeof window !== "undefined"
                ? window.localStorage.getItem("finalPayment")
                : 0}
              원
            </S.DetailMoney>
          </S.DetailContainer>
          <S.DetailContainer>
            <S.DetailTitle>주문번호</S.DetailTitle>
            <S.DetailContent>{applyContestId}</S.DetailContent>
          </S.DetailContainer>
          <S.DetailContainer>
            <S.DetailTitle>대회명</S.DetailTitle>
            <S.DetailContent>
              {selectContestName !== ""
                ? selectContestName
                : typeof window !== "undefined"
                ? window.localStorage.getItem("selectCompetitionName")
                : ""}
            </S.DetailContent>
          </S.DetailContainer>
        </S.DetailArea>
        <Link onClick={() => setFinalPayment(0)} href="/contest">
          <S.BottomFooter>확인</S.BottomFooter>
        </Link>
      </S.SuccessContainer>
    </>
  );
};

export default ApplySuccess;
