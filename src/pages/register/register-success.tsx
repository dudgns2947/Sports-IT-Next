import SuccessPage from "@component/components/page/SuccessPage";
import React from "react";
import Head from "next/head";
const RegisterSuccess = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SuccessPage
        title="대회개최 완료"
        firstText="대회등록이"
        secondText="완료되었습니다."
        navText="내가 올린 대회보기"
        url="/contest"
      ></SuccessPage>
    </>
  );
};

export default RegisterSuccess;
