import * as S from "./apply-success.styles";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import SuccessIcon from "../../../public/images/icon/Icon5.png";

const ApplySuccess = () => {
  return (
    <S.SuccessContainer>
      <S.QuestionArea>
        <Image src={SuccessIcon} alt="Success Image" style={{ width: "100px", height: "94.25px", marginBottom: "20px" }} />
        <S.QuestionText>대회 신청서가</S.QuestionText>
        <S.QuestionText>등록되었습니다!</S.QuestionText>
      </S.QuestionArea>
      <S.DetailArea>
        <S.DetailContainer>
          <S.DetailTitle>결제금액</S.DetailTitle>
          <S.DetailMoney>129,300 원</S.DetailMoney>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.DetailTitle>주문번호</S.DetailTitle>
          <S.DetailContent>20230514-2HG389P</S.DetailContent>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.DetailTitle>대회명</S.DetailTitle>
          <S.DetailContent>제26회 팔씨름 국가대표 선발전</S.DetailContent>
        </S.DetailContainer>
      </S.DetailArea>
      <Link href="/contest">
        <S.BottomFooter>확인</S.BottomFooter>
      </Link>
    </S.SuccessContainer>
  );
};

export default ApplySuccess;
