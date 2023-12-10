import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import Contest from "@component/components/contest/Contest";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import * as S from "../../styles/participate/payment.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  applyContestIdAtom,
  finalPaymentAtom,
  participateFormAtom,
  participateSectors,
  paymentCostAtom,
  selectContestIdAtom,
  selectSectorAtom,
  selectSubSectorAtom,
  templateIdAtom,
  totalPaymentAtom,
} from "@component/atoms/contestAtom";
import { IContestInfo, IHost } from "@component/interfaces/contestInterface";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import Index from "../contest";
import {
  RequestPayParams,
  RequestPayResponse,
} from "@component/interfaces/imp";
import { useRouter } from "next/router";
import Head from "next/head";
import { applyRoleAtom } from "@component/atoms/roleAtom";
import {
  appTermAtom,
  privacyPolicyAtom,
  thirdPartyAtom,
} from "@component/atoms/termAtom";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import NextButton from "@component/components/web/button/NextButton";
import baseApi from "@component/api/utils/instance";
import CuponCard from "@component/components/card/CuponCard";
import InsuranceCard from "@component/components/card/InsuranceCard";

const Payment = () => {
  const [insuranceCheck, setInsuranceCheck] = useState(false);
  const token = useRecoilValue(userTokenAtom);
  const [contest, setContest] = useState<IContestInfo>();
  const competitionId = useRecoilValue(selectContestIdAtom);
  const applyRole = useRecoilValue(applyRoleAtom);
  const [selectSectors, setSelectSectors] = useRecoilState(selectSectorAtom);
  const [selectSubSectors, setSelectSubSectors] =
    useRecoilState(selectSubSectorAtom);
  const selectContestId = useRecoilValue(selectContestIdAtom);
  const [payment, setPayment] = useRecoilState(paymentCostAtom);
  const [sectors, setSectors] = useRecoilState(participateSectors);
  const templateId = useRecoilValue(templateIdAtom);
  const totalPayment = useRecoilValue(totalPaymentAtom);
  const [finalPayment, setFinalPayment] = useRecoilState(finalPaymentAtom);
  const [applyContestId, setApplyContestId] =
    useRecoilState(applyContestIdAtom);
  const [appTerm, setAppTerm] = useRecoilState(appTermAtom);
  const [privacyPolicy, setPrivacyPolicy] = useRecoilState(privacyPolicyAtom);
  const [thirdParty, setThirdParty] = useRecoilState(thirdPartyAtom);

  const ref = useRef(null);
  const [form, setForm] = useRecoilState(participateFormAtom);
  const router = useRouter();

  async function callback(response: RequestPayResponse) {
    const { success, error_msg } = response;

    if (success) {
      setApplyContestId(response.merchant_uid);
      setFinalPayment(response.paid_amount as number);
      console.log(response);
      console.log(success);
      console.log(ref.current);
      // router.push("/participate/apply-success");
      console.log(finalPayment);
      if (typeof window !== "undefined") {
        const response3 = await baseApi.post(
          `/payment/complete/${selectContestId}`,
          {
            imp_uid: response.imp_uid,
            merchant_uid: response.merchant_uid,
            amount: response.paid_amount,
            paymentType: response.pg_provider,
            status: response.status,
            content: response.name,
          },
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response3);
        console.log(ref.current);

        const response4 = await baseApi.post(
          `/competitions/${competitionId}/join?joinType=${applyRole}`,
          {
            uid: null,
            competitionId: null,
            formId: ref.current,
          },
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response4);

        if (response4.data.success === true) {
          router.push("/participate/apply-success");
          setPayment(0);
          setFinalPayment(response.paid_amount as number);
          setAppTerm(false);
          setPrivacyPolicy(false);
          setThirdParty(false);
          setSelectSectors([]);
          setSelectSubSectors([]);
        }
      }

      // console.log(response);
      // console.log(success);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  async function onClickPayment() {
    const requestData = {
      sectors: [...new Set(selectSectors)].map((sector) => {
        return {
          title: sector,
          subSectors: selectSubSectors
            .filter((subSector) => subSector.startsWith(sector))
            .map((item) => {
              return {
                name: getPostFix(item),
                checked: true,
              };
            }),
        };
      }),
      vat: payment * 0.1,
      fee: payment * 0.03,
      insurance: insuranceCheck ? 5000 : 0,
      answers: null,
    };
    console.log(requestData);

    if (typeof window !== "undefined") {
      try {
        const response = await baseApi.post(
          `/competitions/${competitionId}/join/format?joinType=${applyRole}`,
          requestData,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response);
        console.log(response.data.form);
        ref.current = response.data.form;
        setForm(response.data.form);
        window.localStorage.setItem("form", response.data.form);

        if (response.data.amount > 0) {
          const response2 = await baseApi.post(
            `/payment/record`,
            {
              imp_uid: "imp22742363",
              amount: response.data.amount,
            },
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
              },
            }
          );
          console.log(response2);

          setFinalPayment(response2.data.response.amount);
          window.localStorage.setItem(
            "finalPayment",
            response2.data.response.amount
          );

          const { IMP } = window;
          IMP?.init("imp22742363");

          const data: RequestPayParams = {
            pg: "kakaopay", // PG사 : https://portone.gitbook.io/docs/sdk/javascript-sdk/payrq#undefined-1 참고
            pay_method: "trans", // 결제수단
            merchant_uid: response2.data.response.merchant_uid, // 주문번호
            amount: response2.data.response.amount, // 결제금액
            name: contest?.name, // 주문명
            buyer_name: "홍길동", // 구매자 이름
            buyer_tel: "01012341234", // 구매자 전화번호
            buyer_email: "example@example", // 구매자 이메일
            buyer_addr: "신사동 661-16", // 구매자 주소
            buyer_postcode: "06018", // 구매자 우편번호
            m_redirect_url:
              "http://sports-it-platform.du.r.appspot.com/participate/apply-success",
          };

          IMP?.request_pay(data, callback);
        } else {
          const response5 = await baseApi.post(
            `/competitions/${competitionId}/join?joinType=${applyRole}`,
            {
              uid: null,
              competitionId: null,
              formId: response.data.form,
            },
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
              },
            }
          );
          console.log(response5);

          if (response5.data.success === true) {
            router.push("/participate/apply-success");
            setPayment(0);
            setFinalPayment(response.data.amount);
            setAppTerm(false);
            setPrivacyPolicy(false);
            setThirdParty(false);
            setSelectSectors([]);
            setSelectSubSectors([]);
          }
        }
      } catch (e: any) {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
        setPayment(0);
        setAppTerm(false);
        setPrivacyPolicy(false);
        setThirdParty(false);
        setSelectSectors([]);
        setSelectSubSectors([]);
        router.replace(`/contest/${selectContestId}`);
      }
    }
  }

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
        const response2 = await baseApi.get(
          `/competitions/template/${response.data.result.templateID}`
        );
        console.log(response2.data.result.sectors);
        setSectors(response2.data.result.sectors);
      }
    } catch (e) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
      setPayment(0);
      setAppTerm(false);
      setPrivacyPolicy(false);
      setThirdParty(false);
      setSelectSectors([]);
      setSelectSubSectors([]);
      router.replace(`/contest/${selectContestId}`);
    }
  }

  function getPostFix(str: string) {
    const index = str.indexOf(":");
    return str.substring(index + 1);
  }

  useEffect(() => {
    getContestDetail(selectContestId);
  }, []);

  console.log(selectSectors);
  console.log(selectSubSectors);
  console.log(selectContestId);
  return (
    <>
      <WebContainer>
        <Header />
        <PaddingArea>
          <S.BoldText>💳 결제하기</S.BoldText>
          <S.Card>우현이 컴포넌트 </S.Card>
          <CuponCard/>
          <InsuranceCard/>
        </PaddingArea>
      </WebContainer>
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="참가비 결제" />
        <GoBackHeader title="대회 신청" />
        <ContentPaddingArea>
          <Contest
            posterImageUrl={
              contest?.posters && contest?.posters.length > 0
                ? contest?.posters[0].posterUrl
                : ""
            }
            competitionId={contest?.competitionId as number}
            competitionType={contest?.competitionType as string}
            name={contest?.name as string}
            host={contest?.host as IHost}
            recruitingEnd={contest?.recruitingEnd as string}
          />
          <S.HistoryArea>
            <S.BoldText>신청 내역</S.BoldText>
            <S.HistoryContent>
              {[...new Set(selectSectors)].map((selectSector) => (
                <>
                  <S.RadioArea>
                    <S.RadioIcon />
                    <S.LightText>{selectSector}</S.LightText>
                  </S.RadioArea>
                  {selectSubSectors
                    .filter((subSector) => subSector.startsWith(selectSector))
                    .map((item, index) => (
                      <S.RadioSubArea key={index}>
                        <S.RadioArea>
                          <S.RadioIcon />
                          <S.LightText>{getPostFix(item)}</S.LightText>
                        </S.RadioArea>
                        <S.CostText>
                          {index === 0
                            ? sectors.filter(
                                (sector) => sector.title === selectSector
                              )[0].cost
                            : sectors.filter(
                                (sector) => sector.title === selectSector
                              )[0].expandCost}
                          원
                        </S.CostText>
                      </S.RadioSubArea>
                    ))}
                </>
              ))}

              <S.SubArea>
                <S.LightText>VAT (10%)</S.LightText>
                <S.CostText>{payment * 0.1}원</S.CostText>
              </S.SubArea>
              <S.SubArea>
                <S.LightText>수수료 (3%)</S.LightText>
                <S.CostText>{payment * 0.03}원</S.CostText>
              </S.SubArea>
            </S.HistoryContent>
            <S.HistoryBottomArea>
              <S.BoldSmallText>신청 금액</S.BoldSmallText>
              <S.BoldCostText>
                {payment + payment * 0.1 + payment * 0.03}원
              </S.BoldCostText>
            </S.HistoryBottomArea>
          </S.HistoryArea>
          <S.InsuranceArea>
            <S.BoldText>안전 대회참가 보증보험</S.BoldText>
            <S.ManualText>
              주최자의 부재로 인한 대회 폐지 시 참가신청 금액을 돌려주며,
              고객님의 계좌로 안전하게 자동환불이 이루어집니다.
            </S.ManualText>
            <S.InsuranceRadioArea
              onClick={() => {
                setInsuranceCheck((current) => !current);
                if (insuranceCheck) {
                  setFinalPayment(totalPayment);
                } else {
                  setFinalPayment(totalPayment + 5000);
                }
              }}
            >
              <S.RadioLeft>
                <S.RadioIconComponent active={insuranceCheck} />
                <S.LightText>보증 보험</S.LightText>
              </S.RadioLeft>
              <S.CostText>5000원</S.CostText>
            </S.InsuranceRadioArea>
          </S.InsuranceArea>
          <S.TotalCostArea>
            <S.BoldText>총 결제금액</S.BoldText>
            <S.TotalCostText>
              {finalPayment === 0 ? totalPayment : finalPayment}원
            </S.TotalCostText>
          </S.TotalCostArea>
        </ContentPaddingArea>

        <div onClick={onClickPayment}>
          <NavBar navText="결제하기" active={true} />
        </div>
      </PageWrapper> */}
    </>
  );
};

export default Payment;
