import { baseApi } from "@component/api/utils/instance";
import Seo from "@component/components/Seo";
import { ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface IPayList {
  amount: number;
  content: string;
  imp_uid: string;
  merchant_uid: string;
  paymentType: string;
  refundReason: string | null;
  status: string;
}

const PayRecord = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #f9f9fa;
`;

const PayContent = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #212121;
`;

const PayImpUid = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
`;

const PayMerChantUid = styled(PayImpUid)``;

const PayType = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
`;

const PayAmount = styled(PayType)``;

const Index = () => {
  const [payList, setPayList] = useState<IPayList[]>();
  const router = useRouter();

  async function getMyPayment() {
    if (typeof window !== "undefined") {
      console.log(window.localStorage.getItem("jwt"));
      try {
        const response = await baseApi.get(`/payment/myTransaction`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        console.log(response);
        setPayList(response.data.result);
        // console.log(response);
        // setPlayer(parseInt(response.data.result.availablePlayer));
        // setViewer(parseInt(response.data.result.availableViewer));
      } catch (e: any) {
        alert(e.response.data.message);
        router.back();
      }
    }
  }

  useEffect(() => {
    getMyPayment();
  }, []);

  return (
    <PageWrapper>
      <Seo title="결제 내역" />
      <GoBackHeader title="결제 내역" />
      <ContentPaddingArea>
        {payList
          ? payList.map((pay) => (
              <PayRecord>
                <PayContent>{pay.content}</PayContent>
                <PayType>결제 방식 : {pay.paymentType}</PayType>
                <PayAmount>결제 금액 : {pay.amount}원</PayAmount>
              </PayRecord>
            ))
          : null}
        <PayRecord>
          <PayContent>Sports-it 대회신청 결제</PayContent>
          <PayType>결제 방식 : 카카오</PayType>
          <PayAmount>52000원</PayAmount>
        </PayRecord>
      </ContentPaddingArea>
    </PageWrapper>
  );
};

export default Index;
