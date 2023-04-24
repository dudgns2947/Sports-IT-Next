import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";

const headcount = () => {
  return (
    <PageWrapper>
      <Seo title="대회 정원 설정" />
      <GoBackHeader title="대회 등록" />
    </PageWrapper>
  );
};

export default headcount;
