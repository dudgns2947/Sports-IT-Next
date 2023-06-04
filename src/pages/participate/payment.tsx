import Seo from "@component/components/Seo";
import { ContentArea, ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import Contest from "@component/components/contest/Contest";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as S from "../../styles/participate/payment.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  applyContestIdAtom,
  finalPaymentAtom,
  participateSectors,
  paymentCostAtom,
  selectContestIdAtom,
  selectSectorAtom,
  selectSubSectorAtom,
  templateIdAtom,
  totalPaymentAtom,
} from "@component/atoms/contestAtom";
import { IContestInfo, IHost } from "@component/interfaces/contestInterface";
import { baseApi } from "@component/api/utils/instance";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import Index from "../contest";
import { RequestPayParams, RequestPayResponse } from "@component/interfaces/imp";
import { useRouter } from "next/router";

const Payment = () => {
  const [insuranceCheck, setInsuranceCheck] = useState(false);
  const token = useRecoilValue(userTokenAtom);
  const [contest, setContest] = useState<IContestInfo>();
  const selectSectors = useRecoilValue(selectSectorAtom);
  const selectSubSectors = useRecoilValue(selectSubSectorAtom);
  const selectContestId = useRecoilValue(selectContestIdAtom);
  const [payment, setPayment] = useRecoilState(paymentCostAtom);
  const [sectors, setSectors] = useRecoilState(participateSectors);
  const templateId = useRecoilValue(templateIdAtom);
  const totalPayment = useRecoilValue(totalPaymentAtom);
  const [finalPayment, setFinalPayment] = useRecoilState(finalPaymentAtom);
  const [applyContestId, setApplyContestId] = useRecoilState(applyContestIdAtom);
  const router = useRouter();

  function callback(response: RequestPayResponse) {
    const { success, error_msg } = response;

    if (success) {
      setApplyContestId(response.merchant_uid);
      setFinalPayment(response.paid_amount as number);
      router.push("/participate/apply-success");
      console.log(response);
      console.log(success);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  function onClickPayment() {
    const { IMP } = window;
    IMP?.init("imp22742363");

    const data: RequestPayParams = {
      pg: "kakaopay", // PG사 : https://portone.gitbook.io/docs/sdk/javascript-sdk/payrq#undefined-1 참고
      pay_method: "trans", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: finalPayment === 0 ? totalPayment : finalPayment, // 결제금액
      name: "Sports-it 대회신청 결제", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
      m_redirect_url: "/participate/apply-success",
    };

    IMP?.request_pay(data, callback);
  }

  async function getContestDetail(id: number) {
    const response = await baseApi.get(`/competitions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    setContest(response.data);
    const response2 = await baseApi.get(`/competitions/template/${response.data.templateID}`);
    console.log(response2.data.result.sectors);
    setSectors(response2.data.result.sectors);
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
    <PageWrapper>
      <Seo title="참가비 결제" />
      <GoBackHeader title="대회 신청" />
      <ContentPaddingArea>
        <Contest
          posterImageUrl={contest?.posters[0].posterUrl as string}
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
                          ? sectors.filter((sector) => sector.title === selectSector)[0].cost
                          : sectors.filter((sector) => sector.title === selectSector)[0].expandCost}
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
            <S.BoldCostText>{payment + payment * 0.1 + payment * 0.03}원</S.BoldCostText>
          </S.HistoryBottomArea>
        </S.HistoryArea>
        <S.InsuranceArea>
          <S.BoldText>안전 대회참가 보증보험</S.BoldText>
          <S.ManualText>
            주최자의 부재로 인한 대회 폐지 시 참가신청 금액을 돌려주며, 고객님의 계좌로 안전하게 자동환불이 이루어집니다.
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
          <S.TotalCostText>{finalPayment === 0 ? totalPayment : finalPayment}원</S.TotalCostText>
        </S.TotalCostArea>
        {/* <S.PayArea>
          <S.BoldText>결제 수단</S.BoldText>
          <div>
            <S.PayImage src="/images/logo/kakaopay.jpeg" />
            <S.PayImage src="/images/logo/kg.png" />
          </div>
        </S.PayArea> */}
      </ContentPaddingArea>

      <div onClick={onClickPayment}>
        <NavBar navText="결제하기" active={true} />
      </div>
    </PageWrapper>
  );
};

export default Payment;
