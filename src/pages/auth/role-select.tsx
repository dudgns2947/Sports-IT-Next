import { roleAtom } from "@component/atoms/roleAtom";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { RoleAtomType } from "@component/interfaces/roleInterface";
import React from "react";
import { useRecoilState } from "recoil";
import * as S from "./role-select.styles";
import Link from "next/link";
import NavBar from "@component/components/navbar/NavBar";

const roleSelect = () => {
  const [role, setRole] = useRecoilState<RoleAtomType>(roleAtom);
  console.log(role);
  return (
    <S.RoleSelectContainer>
      <GoBackHeader />
      <S.QuestionArea>
        <S.QuestionText>주최자 이신가요?</S.QuestionText>
        <S.QuestionText>체육인 이신가요?</S.QuestionText>
      </S.QuestionArea>
      <S.SelectArea>
        <S.SpoitorButton onClick={() => setRole("ROLE_INSTITUTION")} role={role}>
          <S.SporitorSelectIcon role={role} />
          <S.RoleArea>
            <S.Role>주최자</S.Role>
            <S.RoleDescription>대회를 개최하고 관리하고 싶어요.</S.RoleDescription>
          </S.RoleArea>
        </S.SpoitorButton>
        <S.SportyButton onClick={() => setRole("ROLE_USER")} role={role}>
          <S.SportySelectIcon role={role} />
          <S.RoleArea>
            <S.Role>체육인</S.Role>
            <S.RoleDescription>대회에 참여하고 정보를 얻고 싶어요.</S.RoleDescription>
          </S.RoleArea>
        </S.SportyButton>
      </S.SelectArea>
      <Link href="/auth/event-select">
        <NavBar active={true} />
      </Link>
    </S.RoleSelectContainer>
  );
};

export default roleSelect;
