import React, { use } from "react";
import styled from "styled-components";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import { MdOutlineNumbers } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userIdAtom } from "@component/atoms/tokenAtom";
import { roleAtom } from "@component/atoms/roleAtom";
import { set } from "react-hook-form";
import { ApplyRoleAtomType, RoleAtomType } from "@component/interfaces/roleInterface";

const BottomBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  /* top: 728px; */
  bottom: 0;
  width: 100%;
  height: 10%;
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
  cursor: pointer;
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

// const UserID = typeof window !== "undefined" && window.localStorage.getItem("userId");

const BottomBar = () => {
  const [UserID, setUserID] = useRecoilState(userIdAtom);
  const [UserRole, setUserRole] = useRecoilState(roleAtom);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserID(localStorage.getItem("uid"));
      setUserRole(localStorage.getItem("role") as RoleAtomType);
    }
  }, []);

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
      <NavCard onClick={() => alert("준비중인 기능입니다 :)")}>
        <SharpIcon />
        <NavText>탐색</NavText>
      </NavCard>
      <NavCard onClick={() => alert("준비중인 기능입니다 :)")}>
        <MessageIcon />
        <NavText>메시지</NavText>
      </NavCard>
      <NavCard
        onClick={() => {
          {
            router.push(`/feelit/${UserID}`);
          }

          {
            UserRole === "ROLE_INSTITUTION" ? router.push(`/feelit/123456`) : router.push(`/feelit/123457`);
          } // 임시로 123456, 123457로 설정
        }}
      >
        <SquaresIcon />
        <NavText>FEEL IT</NavText>
      </NavCard>
    </BottomBarWrapper>
  );
};

export default BottomBar;
