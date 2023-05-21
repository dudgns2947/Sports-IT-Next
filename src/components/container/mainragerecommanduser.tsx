import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {AiOutlineRight} from 'react-icons/ai'; 
import Profile from './Profile';

interface MainPageRecommanduserProps {
  
}

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;  
  margin-top : 20px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;
const SliderWrapper = styled.div`
  width : 25%;
`;

const SliderImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-right: 20px;
`;

const MainPageRecommanduser: React.FC<MainPageRecommanduserProps> = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const info = {
      url : "/images/example/Post1.png",
      name : "김영훈",
      favorite : "팔씨름・씨름",
    }
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = event.currentTarget.scrollLeft;
        setScrollPosition(scrollLeft);
    };
    return(
        <Wrapper>
            <Header>
                <Text>
                    오늘의 추천 체육인
                </Text>
                <AiOutlineRight/>
            </Header>
            <SliderContainer onScroll={handleScroll}>
              <Profile imageUrl={info.url} name={info.name} favorite={info.favorite}/>
              <Profile imageUrl={info.url} name={info.name} favorite={info.favorite}/>
              <Profile imageUrl={info.url} name={info.name} favorite={info.favorite}/>
              <Profile imageUrl={info.url} name={info.name} favorite={info.favorite}/>
              <Profile imageUrl={info.url} name={info.name} favorite={info.favorite}/>
              <Profile imageUrl={info.url} name={info.name} favorite={info.favorite}/>
            </SliderContainer>
        </Wrapper>
    );
};

export default MainPageRecommanduser;