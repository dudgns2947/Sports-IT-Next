import React from "react";
import SuccessPage from "@component/components/page/SuccessPage";

const signupSuccess = () => {
  return (
    <SuccessPage
      title="회원가입 완료"
      firstText="회원가입이 성공적으로"
      secondText="완료되었습니다 !"
      navText="로그인 화면으로 돌아가기"
      url="/auth/login"
    ></SuccessPage>
  );
};

export default signupSuccess;
