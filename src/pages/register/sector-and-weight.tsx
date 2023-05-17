import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React from "react";

const SectorAndWeight = () => {
  return (
    <PageWrapper>
      <Seo title="부문 및 체급등록" />
      <GoBackHeader title="대회 등록" />
      <Link href="/register/participation-cost">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default SectorAndWeight;
