import Seo from "@component/components/Seo";
import { Container } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React from "react";

const signup = () => {
  return (
    <>
      <Seo title="회원가입" />
      <GoBackHeader title="회원가입" />
    </>
  );
};

export default signup;
