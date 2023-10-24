import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  SelectArea,
  Text,
  TextArea,
} from "../../styles/auth/event-select.styles";
import EventSelectButton from "@component/components/button/EventSelectButton";
import Link from "next/link";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "../../styles/register/contest-info.styles";
import {
  contestEventAtom,
  contestEventCountAtom,
} from "@component/atoms/contestAtom";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";

const LinkText = styled.span`
  font-size: 14px;
  color: #e05e6d;
  border-bottom: 1px solid #e05e6d;
  cursor: pointer;
`;

export const BottomArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
  margin-bottom: 10%;
`;

interface BottomTextProps {
  count: number;
}

export const BottomText = styled.span<BottomTextProps>`
  /* color: #747474; */
  color: ${(props) => (props.count > 5 ? "#E05E6D" : "#747474")};
  margin-bottom: 7px;
`;

const EventSelect = () => {
  const [contestEvents, setContestEvents] = useRecoilState(contestEventAtom);
  const [count, setCount] = useRecoilState(contestEventCountAtom);
  const router = useRouter();

  console.log(contestEvents);
  console.log(router);
  return (
    <WebContainer>
      <Header />
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="대회 종목 선택" />
        <GoBackHeader title="대회 등록" />
        <TextArea>
          <Text>대회 종목을</Text>
          <Text>선택해주세요.</Text>
        </TextArea>
        <SelectArea>
          {Object.keys(contestEvents).map((event, index) => (
            <EventSelectButton
              key={index}
              text={event}
              active={contestEvents[event]}
              setCount={setCount}
              setEvent={setContestEvents}
            ></EventSelectButton>
          ))}
        </SelectArea>
        <BottomArea>
          <BottomText count={count}>종목을 1개 선택해주세요.</BottomText>
          <LinkText onClick={() => router.push("/event-apply")}>
            찾으시는 종목이 없으신가요?
          </LinkText>
        </BottomArea>
        <Link href="/register/headcount">
          <NavBar navText="다음" active={count === 1 ? true : false} />
        </Link>
      </PageWrapper> */}
    </WebContainer>
  );
};

export default EventSelect;
