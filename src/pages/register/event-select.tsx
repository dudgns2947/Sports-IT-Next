import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { SelectArea, Text, TextArea } from "../auth/event-select.styles";
import EventSelectButton from "@component/components/button/EventSelectButton";
import Link from "next/link";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "./contest-info.styles";
import { contestEventAtom, contestEventCountAtom, contestEventSelector } from "@component/atoms/contestAtom";

const EventSelect = () => {
  const [contestEvents, setContestEvents] = useRecoilState(contestEventAtom);
  const [count, setCount] = useRecoilState(contestEventCountAtom);
  return (
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
      <Link href="/register/headcount">
        <NavBar navText="다음" active={count === 1 ? true : false} />
      </Link>
    </PageWrapper>
  );
};

export default EventSelect;
