import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React from "react";

const RulesAndTerms = () => {
  return (
    <PageWrapper>
      <Seo title="규정 및 약관등록" />
      <GoBackHeader title="대회 등록" />
      <Link href="/register/sector-and-weight">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default RulesAndTerms;
