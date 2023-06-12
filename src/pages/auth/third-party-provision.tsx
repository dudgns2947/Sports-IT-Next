import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import React from "react";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { ContentArea } from "@component/components/area/areaComponent";
import * as S from "../../styles/auth/find-info.styles";

const ThirdPartyProvision = () => {
  return (
    <PageWrapper>
      <Seo title="개인정보 제3자 제공 동의" />
      <GoBackHeader title="개인정보 제3자 제공동의" />
      <ContentArea>
        <S.QuestionArea>
          <S.QuestionText>다음과 같이 개인정보를</S.QuestionText>
          <S.QuestionText>제3자에게 제공합니다.</S.QuestionText>
        </S.QuestionArea>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          1. 개인정보를 제공받는 자 : 광고사, 후원사, 금융기관, 배송대행 업체 등{" "}
        </h3>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          2. 제공받는 자의 개인정보 이용목적 : 상품 배송, 통계자료 활용
        </h3>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          3. 제공하는 개인정보 항목 : 성명, 주소, 휴대폰번호, 이메일
        </h3>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          4. 제공받는 자의 보유 및 이용기간 : 회원탈퇴 시 또는 개인정보 제3자 제공 철회 시까지
        </h3>
      </ContentArea>
    </PageWrapper>
  );
};

export default ThirdPartyProvision;
