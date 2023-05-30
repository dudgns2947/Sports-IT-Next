import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import Profile from "./Profile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 10px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SliderContainer = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  margin-top: 20px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

const MainPageRecommanduser: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const infos = [
    {
      url: "/images/example/Profile1.png",
      name: "김영훈",
      favorite: "팔씨름・씨름",
    },
    {
      url: "/images/example/Profile2.png",
      name: "이준수",
      favorite: "축구・풋살",
    },
    {
      url: "/images/example/Profile3.png",
      name: "신우현",
      favorite: "헬스・피지크",
    },
    {
      url: "/images/example/Profile4.png",
      name: "공명규",
      favorite: "자전거・달리기",
    },
    {
      url: "/images/example/Profile1.png",
      name: "김영훈",
      favorite: "팔씨름・씨름",
    },
    {
      url: "/images/example/Profile2.png",
      name: "이준수",
      favorite: "축구・풋살",
    },
  ];
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    setScrollPosition(scrollLeft);
  };
  return (
    <Wrapper>
      <Header>
        <Text>오늘의 추천 체육인</Text>
        <AiOutlineRight />
      </Header>
      <SliderContainer onScroll={handleScroll}>
        {infos ? infos.map((info, index) => <Profile key={index} imageUrl={info.url} name={info.name} favorite={info.favorite} />) : null}
      </SliderContainer>
    </Wrapper>
  );
};

export default MainPageRecommanduser;
