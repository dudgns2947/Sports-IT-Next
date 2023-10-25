import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  contestEventAtom,
  contestEventCountAtom,
} from "@component/atoms/contestAtom";
import styled from "styled-components";
import { useRouter } from "next/router";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import * as S from "../../styles/register/event-select.style";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import NextButton from "@component/components/web/button/NextButton";
import Link from "next/link";
import EventButton from "@component/components/web/button/EventButton";
import { selectEventAtom } from "@component/atoms/eventAtom";

// const LinkText = styled.span`
//   font-size: 14px;
//   color: #e05e6d;
//   border-bottom: 1px solid #e05e6d;
//   cursor: pointer;
// `;

// export const BottomArea = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 10%;
//   margin-bottom: 10%;
// `;

// interface BottomTextProps {
//   count: number;
// }

// export const BottomText = styled.span<BottomTextProps>`
//   /* color: #747474; */
//   color: ${(props) => (props.count > 5 ? "#E05E6D" : "#747474")};
//   margin-bottom: 7px;
// `;

const EventSelect = () => {
  const [contestEvents, setContestEvents] = useRecoilState(contestEventAtom);
  const [selectEvent, setSelectEvent] = useRecoilState(selectEventAtom);
  const [count, setCount] = useRecoilState(contestEventCountAtom);
  const router = useRouter();

  console.log(contestEvents);
  console.log(router);
  return (
    <WebContainer>
      <Header />
      <S.EventSelectContainer>
        <GlobalBoldText>개최할 대회 종목을 선택해주세요.</GlobalBoldText>
        <GlobalGreyText>
          카테고리를 선택하여 원하는 종목을 찾아보세요 !
        </GlobalGreyText>
        <S.CategoryArea></S.CategoryArea>
        <S.EventArea>
          {contestEvents.map((event) => (
            <EventButton
              key={event.code}
              active={selectEvent === event.name}
              eventName={event.name}
              setSelectEvent={setSelectEvent}
            />
          ))}
        </S.EventArea>
        <Link href="/register/contest-info">
          <NextButton />
        </Link>
      </S.EventSelectContainer>
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
