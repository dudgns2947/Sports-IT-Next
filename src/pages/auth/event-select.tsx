import React, { useState } from "react";
import * as S from "../../styles/auth/event-select.styles";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { useRecoilState } from "recoil";
import { eventAtom, eventCountAtom } from "@component/atoms/eventAtom";
import { IEvent } from "@component/interfaces/eventInterface";
import Link from "next/link";
import EventSelectButton from "@component/components/button/EventSelectButton";
import NavBar from "@component/components/navbar/NavBar";
import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import Head from "next/head";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { useRouter } from "next/router";

const SearchArea = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const SearchInput = styled.input`
  background: #f9f9fa;
  border-radius: 12px;
  width: 100%;
  height: 40px;
  padding-left: 15px;
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  right: 10px;
  top: 8px;
  width: 27px;
  height: 27px;
  color: #747474;
  cursor: pointer;
`;

const EventSelect = () => {
  const [keyword, setKeyword] = useState("");
  const [events, setEvents] = useRecoilState<IEvent>(eventAtom);
  const [count, setCount] = useRecoilState<number>(eventCountAtom);
  const router = useRouter();
  console.log(events);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <GoBackHeader />
        <Seo title="관심 종목 선택" />
        <ContentPaddingArea>
          <S.TextArea>
            <S.Text>관심있는 종목을</S.Text>
            <S.Text>선택해주세요.</S.Text>
          </S.TextArea>
          <SearchArea>
            <SearchInput
              value={keyword}
              onChange={(e) => setKeyword(e.currentTarget.value)}
              placeholder="검색어를 입력해주세요."
            />
            <SearchIcon />
          </SearchArea>
          <S.SelectArea>
            {Object.keys(events)
              .filter((item) => item.includes(keyword))
              .map((event, index) => (
                <EventSelectButton
                  key={index}
                  text={event}
                  active={events[event]}
                  setCount={setCount}
                  setEvent={setEvents}
                ></EventSelectButton>
              ))}
          </S.SelectArea>
          <S.BottomArea>
            <S.BottomText count={count}>
              5개까지 선택 가능합니다.({count}/5)
            </S.BottomText>
            <S.LinkText onClick={() => router.push("/event-apply")}>
              찾으시는 종목이 없으신가요?
            </S.LinkText>
          </S.BottomArea>
        </ContentPaddingArea>

        <Link href="/auth/signup">
          <NavBar
            navText="다음"
            active={count >= 1 && count <= 5 ? true : false}
          />
        </Link>
      </PageWrapper>
    </>
  );
};

export default EventSelect;
