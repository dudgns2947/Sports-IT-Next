import { roleAtom } from "../../atoms/roleAtom";
import GoBackHeader from "../../components/header/GoBackHeader";
import { RoleAtomType } from "../../interfaces/roleInterface";
import React from "react";
import { useRecoilState } from "recoil";
import * as S from "./choice-roles.styles";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";

const ChoiceRole = () => {
  const [role, setRole] = useRecoilState<RoleAtomType>(roleAtom);
  console.log(role);
  return (
    <S.RoleSelectContainer>
      <GoBackHeader />
      <S.QuestionArea>
        <S.QuestionText>선수로 참여하시나요?</S.QuestionText>
        <S.QuestionText>관람객으로 참여하시나요?</S.QuestionText>
      </S.QuestionArea>
      <S.SelectArea>
        <S.SpoitorButton onClick={() => setRole("ROLE_INSTITUTION")} role={role}>
          <S.SporitorSelectIcon role={role} />
          <S.RoleArea>
            <S.RoleTextArea>
              <S.Role>선수</S.Role>
              <S.participateAvailable>참석가능</S.participateAvailable>
            </S.RoleTextArea>
            <S.RoleDescription>대회에 선수로 참여하고 싶어요</S.RoleDescription>
          </S.RoleArea>
        </S.SpoitorButton>
        <S.SportyButton onClick={() => setRole("ROLE_USER")} role={role}>
          <S.SportySelectIcon role={role} />
          <S.RoleArea>
            <S.RoleTextArea>
              <S.Role>관람객</S.Role>
              <S.participateAvailable>35석</S.participateAvailable>
            </S.RoleTextArea>
            <S.RoleDescription>대회를 관람하고 싶어요</S.RoleDescription>
          </S.RoleArea>
        </S.SportyButton>
      </S.SelectArea>
      <Link href="/participate/terms">
        <NavBar navText="다음" active={true} />
      </Link>
    </S.RoleSelectContainer>
  );
};

export default ChoiceRole;
