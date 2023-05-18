import SuccessPage from "@component/components/page/SuccessPage";
import React from "react";

const RegisterSuccess = () => {
  return (
    <SuccessPage
      title="대회개최 완료"
      firstText="대회등록이"
      secondText="완료되었습니다."
      navText="내가 올린 대회보기"
      url="/contest"
    ></SuccessPage>
  );
};

export default RegisterSuccess;
