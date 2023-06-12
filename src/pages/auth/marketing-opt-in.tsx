import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import React from "react";
import Head from "next/head";
import GoBackHeader from "@component/components/header/GoBackHeader";

const MarketingOptIn = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PageWrapper>
        <Seo title="마케팅 수신동의" />
        <GoBackHeader title="마케팅 수신동의" />
      </PageWrapper>
    </>
  );
};

export default MarketingOptIn;
