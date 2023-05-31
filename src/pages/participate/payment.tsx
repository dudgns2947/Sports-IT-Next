import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import Contest from "@component/components/contest/Contest";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as S from "./payment.styles";
import { useRecoilValue } from "recoil";
import {
  selectContestIdAtom,
  selectSectorAtom,
  selectSubSectorAtom,
} from "@component/atoms/contestAtom";
import { IContestInfo, IHost } from "@component/interfaces/contestInterface";
import { baseApi } from "@component/api/utils/instance";
import { userTokenAtom } from "@component/atoms/tokenAtom";

const Payment = () => {
  const [insuranceCheck, setInsuranceCheck] = useState(true);
  const token = useRecoilValue(userTokenAtom);
  const [contest, setContest] = useState<IContestInfo>();
  const selectSectors = useRecoilValue(selectSectorAtom);
  const selectSubSectors = useRecoilValue(selectSubSectorAtom);
  const selectContestId = useRecoilValue(selectContestIdAtom);

  async function getContestDetail(id: number) {
    const response = await baseApi.get(`/competitions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    setContest(response.data);
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
      <ContentArea>
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
            <S.RadioArea>
              <S.RadioIcon />
              <S.LightText>프로</S.LightText>
            </S.RadioArea>
            <S.RadioSubArea>
              <S.RadioArea>
                <S.RadioIcon />
                <S.LightText>-70kg</S.LightText>
              </S.RadioArea>
              <S.CostText>90000원</S.CostText>
            </S.RadioSubArea>
            <S.RadioSubArea>
              <S.RadioArea>
                <S.RadioIcon />
                <S.LightText>-80kg</S.LightText>
              </S.RadioArea>
              <S.CostText>20000원</S.CostText>
            </S.RadioSubArea>
            <S.SubArea>
              <S.LightText>VAT (10%)</S.LightText>
              <S.CostText>11000원</S.CostText>
            </S.SubArea>
            <S.SubArea>
              <S.LightText>수수료 (3%)</S.LightText>
              <S.CostText>3000원</S.CostText>
            </S.SubArea>
          </S.HistoryContent>
          <S.HistoryBottomArea>
            <S.BoldSmallText>신청 금액</S.BoldSmallText>
            <S.BoldCostText>124000원</S.BoldCostText>
          </S.HistoryBottomArea>
        </S.HistoryArea>
        <S.InsuranceArea>
          <S.BoldText>안전 대회참가 보증보험</S.BoldText>
          <S.ManualText>
            주최자의 부재로 인한 대회 폐지 시 참가신청 금액을 돌려주며, 고객님의
            계좌로 안전하게 자동환불이 이루어집니다.
          </S.ManualText>
          <S.InsuranceRadioArea
            onClick={() => setInsuranceCheck((current) => !current)}
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
          <S.TotalCostText>129000원</S.TotalCostText>
        </S.TotalCostArea>
      </ContentArea>
      <Link href="/participate/apply-success">
        <NavBar navText="결제하기" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default Payment;
