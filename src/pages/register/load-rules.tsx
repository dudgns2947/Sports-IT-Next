import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import React from "react";
import Head from "next/head";

const LoadRules = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="규정 불러오기" />
        <GoBackHeader title="규정 불러오기" />
        <NavBar active={true} navText="다음" />
      </PageWrapper>
    </>
  );
};

export default LoadRules;
