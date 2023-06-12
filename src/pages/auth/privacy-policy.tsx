import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import React from "react";
import GoBackHeader from "@component/components/header/GoBackHeader";
const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <Seo title="개인정보 처리방침" />
      <GoBackHeader title="개인정보 처리방침" />
    </PageWrapper>
  );
};

export default PrivacyPolicy;
