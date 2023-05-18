import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import React from "react";

const Payment = () => {
  return (
    <PageWrapper>
      <Seo title="참가비 결제" />
      <GoBackHeader title="대회 신청" />

      <NavBar navText="결제하기" active={true} />
    </PageWrapper>
  );
};

export default Payment;
