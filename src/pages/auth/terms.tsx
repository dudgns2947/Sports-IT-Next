import React, { useState } from "react";
import * as S from "./termsStyles";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Seo from "@component/components/Seo";

const terms = () => {
  const [firstTerm, setFirstTerm] = useState(false);
  const [secondTerm, setSecondTerm] = useState(false);
  const [thirdTerm, setThirdTerm] = useState(false);
  return (
    <>
      <GoBackHeader />
      <Seo title="서비스 약관동의" />
      <S.TextArea>
        <S.Text>서비스 이용약관에</S.Text>
        <S.Text>동의해주세요.</S.Text>
      </S.TextArea>
      <S.TermArea>
        <S.TotalAgree>
          <S.TotalAgreeIcon
            agree={firstTerm && secondTerm && thirdTerm}
            onClick={() => {
              if (firstTerm && secondTerm && thirdTerm) {
                setFirstTerm(false);
                setSecondTerm(false);
                setThirdTerm(false);
              } else {
                setFirstTerm(true);
                setSecondTerm(true);
                setThirdTerm(true);
              }
            }}
          />
          <S.TotalAgreeText>전체 약관에 동의합니다.</S.TotalAgreeText>
        </S.TotalAgree>
        <S.Term>
          <S.TermLeftArea>
            <S.TermIcon
              agree={firstTerm}
              onClick={() => setFirstTerm((current) => !current)}
            />
            <S.TermText>스포츠잇 이용약관(필수)</S.TermText>
          </S.TermLeftArea>
          <S.TermPageIcon />
        </S.Term>
        <S.Term>
          <S.TermLeftArea>
            <S.TermIcon
              agree={secondTerm}
              onClick={() => setSecondTerm((current) => !current)}
            />
            <S.TermText>개인정보 처리방침(필수)</S.TermText>
          </S.TermLeftArea>
          <S.TermPageIcon />
        </S.Term>
        <S.Term>
          <S.TermLeftArea>
            <S.TermIcon
              agree={thirdTerm}
              onClick={() => setThirdTerm((current) => !current)}
            />
            <S.TermText>마케팅 수신 동의(선택)</S.TermText>
          </S.TermLeftArea>
          <S.TermPageIcon />
        </S.Term>
      </S.TermArea>
      <NavBar active={firstTerm && secondTerm} />
    </>
  );
};

export default terms;
