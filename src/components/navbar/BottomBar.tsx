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
  /* top: 728px; */
  bottom: 0;
  width: 100%;
  height: 8%;
  border-top: 1px solid #c8c7c7;
  background: #ffffff;
`;

const NavCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 65px;
  padding-bottom: 5px;
  left: 10px;
  bottom: 24px;
`;

const NavText = styled.span`
  font-weight: 300;
  font-size: 11px;
  text-align: center;
  line-height: 12px;
  color: #212121;
`;

const HomeIcon = styled(RiHomeLine)`
  width: 28px;
  height: 33px;
  margin-bottom: 3px;
`;

const TrophyIcon = styled(AiOutlineTrophy)`
  width: 28px;
  height: 33px;
  margin-bottom: 3px;
`;

const SharpIcon = styled(MdOutlineNumbers)`
  width: 28px;
  height: 33px;
  margin-bottom: 3px;
`;

const MessageIcon = styled(TbMessageCircle2)`
  width: 28px;
  height: 33px;
  margin-bottom: 3px;
`;

const SquaresIcon = styled(HiOutlineSquares2X2)`
  width: 28px;
  height: 33px;
  margin-bottom: 3px;
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
