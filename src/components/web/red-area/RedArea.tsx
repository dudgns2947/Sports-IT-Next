import Link from "next/link";
import React from "react";
import styled from "styled-components";
import * as S from "./RedArea.style";

const RedArea = () => {
  return (
    <S.RedArea>
      <S.ContentArea>
        <S.TextArea>
          <S.WhiteMediumText>
            지금 바로 새롭고 다양한 대회들을 만나보세요
          </S.WhiteMediumText>
          <S.WhiteSmallText>
            지금 핫한 대회가 당신을 기다립니다!
          </S.WhiteSmallText>
        </S.TextArea>
        <Link href="/signup">
          <S.SignupButton>회원가입 하기</S.SignupButton>
        </Link>
      </S.ContentArea>
    </S.RedArea>
  );
};

export default RedArea;
