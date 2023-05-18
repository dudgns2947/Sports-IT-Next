import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <PageWrapper>
      <Seo title="대회 폼 등록" />
      <GoBackHeader title="대회 등록" />
      <Link href="/register/register-success">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default Form;
