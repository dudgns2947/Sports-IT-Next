import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import React from "react";
import GoBackHeader from "@component/components/header/GoBackHeader";

const AppTerms = () => {
  return (
    <PageWrapper>
      <Seo title="스포츠잇 이용약관" />
      <GoBackHeader title="스포츠잇 이용약관" />
      <div>
        <span></span>
      </div>
    </PageWrapper>
  );
};

export default AppTerms;
