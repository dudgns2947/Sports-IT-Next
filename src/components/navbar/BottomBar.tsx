import React from "react";
import styled from "styled-components";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import { MdOutlineNumbers } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useRouter } from "next/router";

const BottomBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  /* top: 750px; */
  bottom: 0;
  width: 375px;
  height: 60px;
  border-top: 1px solid #ededed;
`;

const NavCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`;

const NavText = styled.span`
  font-weight: 500;
  font-size: 10px;
  color: #212121;
`;

const HomeIcon = styled(RiHomeLine)`
  width: 25px;
  height: 26px;
`;

const TrophyIcon = styled(AiOutlineTrophy)`
  width: 25px;
  height: 26px;
`;

const SharpIcon = styled(MdOutlineNumbers)`
  width: 25px;
  height: 26px;
`;

const MessageIcon = styled(TbMessageCircle2)`
  width: 25px;
  height: 26px;
`;

const SquaresIcon = styled(HiOutlineSquares2X2)`
  width: 25px;
  height: 26px;
`;

const BottomBar = () => {
  const router = useRouter();
  return (
    <BottomBarWrapper>
      <NavCard
        onClick={() => {
          router.push("/");
        }}
      >
        <HomeIcon />
        <NavText>홈</NavText>
      </NavCard>
      <NavCard
        onClick={() => {
          router.push("/contest");
        }}
      >
        <TrophyIcon />
        <NavText>대회</NavText>
      </NavCard>
      <NavCard
        onClick={() => {
          router.push("/");
        }}
      >
        <SharpIcon />
        <NavText>탐색</NavText>
      </NavCard>
      <NavCard
        onClick={() => {
          router.push("/");
        }}
      >
        <MessageIcon />
        <NavText>메시지</NavText>
      </NavCard>
      <NavCard
        onClick={() => {
          router.push("/");
        }}
      >
        <SquaresIcon />
        <NavText>FEEL IT</NavText>
      </NavCard>
    </BottomBarWrapper>
  );
};

export default BottomBar;
