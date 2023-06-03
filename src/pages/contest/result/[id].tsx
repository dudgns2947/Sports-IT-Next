import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import React from "react";

const Result = () => {
  return (
    <PageWrapper>
      <Seo title="대회 결과" />
      <GoBackHeader title="대회 결과" />
      <ContentArea></ContentArea>
      <NavBar navText="입력 완료" active={true} />
    </PageWrapper>
  );
};

export default Result;
