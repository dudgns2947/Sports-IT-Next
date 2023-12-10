import {
  FlexColumnCenter,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import NextButton from "@component/components/web/button/NextButton";
import Header from "@component/components/web/header/Header";
import { WebContainer } from "@component/styles/index.styles";
import Link from "next/link";
import React from "react";
import * as S from "../../styles/participate/check-people.styles";
import { useRecoilState } from "recoil";
import { isGroupAtom } from "@component/atoms/contestAtom";

const CheckPeople = () => {
  const [isGroup, setIsGroup] = useRecoilState(isGroupAtom);
  return (
    <WebContainer>
      <Header />
      <PaddingArea>
        <S.QuestionArea>
          <S.QuestionText>개인 이신가요?</S.QuestionText>
          <S.QuestionText>단체 이신가요?</S.QuestionText>
        </S.QuestionArea>
        <S.SelectArea>
          <S.Button onClick={() => setIsGroup(false)} active={!isGroup}>
            <S.SelectIcon active={!isGroup} />
            <FlexColumnCenter>개인으로 신청</FlexColumnCenter>
          </S.Button>
          <S.Button onClick={() => setIsGroup(true)} active={isGroup}>
            <S.SelectIcon active={isGroup} />
            <FlexColumnCenter>단체로 신청</FlexColumnCenter>
          </S.Button>

          {/* <S.SpoitorButton
              onClick={() => {
                setApplyRole("player");
                window.localStorage.setItem("applyRole", "player");
              }}
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
            </S.SpoitorButton> */}
          {/* <S.SportyButton
              onClick={() => {
                setApplyRole("viewer");
                window.localStorage.setItem("applyRole", "viewer");
              }}
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
            </S.SportyButton> */}
        </S.SelectArea>
      </PaddingArea>
      <FlexColumnRowCenter>
        <Link href="/participate/terms">
          <NextButton />
        </Link>
      </FlexColumnRowCenter>
    </WebContainer>
  );
};

export default CheckPeople;
