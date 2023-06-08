import { roleAtom } from "@component/atoms/roleAtom";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { RoleAtomType } from "@component/interfaces/roleInterface";
import React from "react";
import { useRecoilState } from "recoil";
import * as S from "../../styles/auth/find-info.styles";
import Link from "next/link";
import NavBar from "@component/components/navbar/NavBar";
import Head from "next/head";
import { ContentArea, ContentColumnArea, ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import { useState } from "react";

const RoleSelect = () => {
  const [role, setRole] = useRecoilState<RoleAtomType>(roleAtom);
  const [findInfo, setFindInfo] = useState<string>("");
  console.log(findInfo);
  return (
    <PageWrapper>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <GoBackHeader title="아이디/비밀번호 찾기" />
      <ContentColumnArea>
        <S.QuestionArea>
          <S.QuestionText>아이디 혹은 비밀번호를</S.QuestionText>
          <S.QuestionText>잃어버리셨나요?</S.QuestionText>
        </S.QuestionArea>
        <S.SelectArea>
          <S.SpoitorButton
            onClick={() => {
              setFindInfo("/auth/findId"), setRole("ROLE_INSTITUTION");
            }}
            role={role}
          >
            <S.SporitorSelectIcon role={role} />
            <S.RoleArea>
              <S.Role>아이디 찾기</S.Role>
              <S.RoleDescription>전화번호로 아이디 찾기</S.RoleDescription>
            </S.RoleArea>
          </S.SpoitorButton>
          <S.SportyButton
            onClick={() => {
              setFindInfo("/auth/findPw"), setRole("ROLE_USER");
            }}
            role={role}
          >
            <S.SportySelectIcon role={role} />
            <S.RoleArea>
              <S.Role>비밀번호 찾기</S.Role>
              <S.RoleDescription>이메일과 전화번호로 비밀번호 재설정</S.RoleDescription>
            </S.RoleArea>
          </S.SportyButton>
        </S.SelectArea>
      </ContentColumnArea>

      <Link href={findInfo}>
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default RoleSelect;
