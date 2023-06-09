import { applyRoleAtom, roleAtom } from "../../atoms/roleAtom";
import GoBackHeader from "../../components/header/GoBackHeader";
import { RoleAtomType } from "../../interfaces/roleInterface";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "../../styles/participate/choice-roles.styles";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";
import Head from "next/head";
import { selectContestIdAtom } from "@component/atoms/contestAtom";
import { baseApi } from "@component/api/utils/instance";

const ChoiceRole = () => {
  const [role, setRole] = useRecoilState<RoleAtomType>(roleAtom);
  const selectContestId = useRecoilValue(selectContestIdAtom);
  const [applyRole, setApplyRole] = useRecoilState(applyRoleAtom);
  const [player, setPlayer] = useState(0);
  const [viewer, setViewer] = useState(0);
  const token =
    typeof window !== "undefined" ? window.localStorage.getItem("jwt") : "";
  console.log(applyRole);

  async function getAvailabe() {
    if (typeof window !== "undefined") {
      console.log(window.localStorage.getItem("jwt"));
      try {
        const response = await baseApi.get(
          `competitions/${selectContestId}/join/init`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          }
        );
        console.log(response);
        setPlayer(parseInt(response.data.result.availablePlayer));
        setViewer(parseInt(response.data.result.availableViewer));
      } catch (e: any) {
        alert(e.response.data.message);
      }
    }
  }

  useEffect(() => {
    getAvailabe();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.RoleSelectContainer>
        <GoBackHeader title="대회 신청" />
        <S.QuestionArea>
          <S.QuestionText>선수로 참여하시나요?</S.QuestionText>
          <S.QuestionText>관람객으로 참여하시나요?</S.QuestionText>
        </S.QuestionArea>
        <S.SelectArea>
          <S.SpoitorButton
            onClick={() => setApplyRole("PLAYER")}
            role={applyRole}
          >
            <S.SporitorSelectIcon role={applyRole} />
            <S.RoleArea>
              <S.RoleTextArea>
                <S.Role>선수</S.Role>
                <S.participateAvailable>{player}석</S.participateAvailable>
              </S.RoleTextArea>
              <S.RoleDescription>
                대회에 선수로 참여하고 싶어요
              </S.RoleDescription>
            </S.RoleArea>
          </S.SpoitorButton>
          <S.SportyButton
            onClick={() => setApplyRole("VIEWER")}
            role={applyRole}
          >
            <S.SportySelectIcon role={applyRole} />
            <S.RoleArea>
              <S.RoleTextArea>
                <S.Role>관람객</S.Role>
                <S.participateAvailable>{viewer}석</S.participateAvailable>
              </S.RoleTextArea>
              <S.RoleDescription>대회를 관람하고 싶어요</S.RoleDescription>
            </S.RoleArea>
          </S.SportyButton>
        </S.SelectArea>
        <Link href="/participate/terms">
          <NavBar
            navText="다음"
            active={
              (applyRole === "PLAYER" && player > 0) ||
              (applyRole === "VIEWER" && viewer > 0)
            }
          />
        </Link>
      </S.RoleSelectContainer>
    </>
  );
};

export default ChoiceRole;
