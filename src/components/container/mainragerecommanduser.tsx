import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {AiOutlineRight} from 'react-icons/ai'; 

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
`

const SliderImage = styled.img`
  width: 20%;
  height: auto;
  border-radius: 50%;
  margin-right: 20px;
`;

const MainPageRecommanduser: React.FC<MainPageRecommanduserProps> = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

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
                <SliderImage src="/images/example/Post1.png"/>
                <SliderImage src="/images/example/Post2.png"/>
                <SliderImage src="/images/example/Post1.png"/>
                <SliderImage src="/images/example/Post2.png"/>
            </SliderContainer>
        </Wrapper>
    );
};

export default MainPageRecommanduser;