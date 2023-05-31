import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import { Contest } from "../contest/Contest.styles";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
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
  margin-top: 20px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

const SliderImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;
  margin-right: 10px;
`;

const RouteIcon = styled(AiOutlineRight)`
  cursor: pointer;
`;

export default function MainPageCompetition() {
  const router = useRouter();
  return (
    <Wrapper>
      <Header>
        <Text>최근 올라온 대회</Text>
        <RouteIcon onClick={() => router.push("/contest")} />
      </Header>
      {/* <Contest
                    key=1
                    competitionId=1
                    competitionType="FREE"
                    name="이름"
                    host=345
                    endDate="2023-05-21"
                  /> */}
    </Wrapper>
  );
}
