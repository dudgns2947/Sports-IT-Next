import React from "react";
import * as S from "./eventSelectStyles";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { useRecoilState } from "recoil";
import { eventAtom, eventCountAtom } from "@component/atoms/eventAtom";
import { IEvent } from "@component/interfaces/eventInterface";
import Link from "next/link";
import EventSelectButton from "@component/components/button/EventSelectButton";
import NavBar from "@component/components/navbar/NavBar";
import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";

const eventSelect = () => {
  const [events, setEvents] = useRecoilState<IEvent>(eventAtom);
  const [count, setCount] = useRecoilState<number>(eventCountAtom);
  console.log(events);
  return (
    <PageWrapper>
      <GoBackHeader />
      <Seo title="관심 종목 선택" />
      <S.TextArea>
        <S.Text>관심있는 종목을</S.Text>
        <S.Text>선택해주세요.</S.Text>
      </S.TextArea>
      <S.SelectArea>
        {Object.keys(events).map((event, index) => (
          <EventSelectButton
            key={index}
            text={event}
            active={events[event]}
            setCount={setCount}
          ></EventSelectButton>
        ))}
      </S.SelectArea>
      <S.BottomArea>
        <S.BottomText count={count}>
          5개까지 선택 가능합니다.({count}/5)
        </S.BottomText>
      </S.BottomArea>
      <Link href="/auth/signup">
        <NavBar active={count <= 5 ? true : false} />
      </Link>
    </PageWrapper>
  );
};

export default eventSelect;
