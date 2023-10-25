import styled from "styled-components";
import { TbMessageCircle2 } from "react-icons/tb";
import { VscCopy } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";

export const ContestCardContainer = styled.div`
  border: 1px solid #e9ebed;
  padding: 20px 24px;
  border-radius: 10px;
  margin-left: 10px;
  position: sticky;
  top: 0;
`;

export const ContestName = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ContestHostName = styled.h2`
  font-size: 14px;
  color: #747474;
  margin-bottom: 10px;
`;

export const SpaceBetweenArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SpaceBetweenAreaWithMargin = styled(SpaceBetweenArea)`
  margin-bottom: 20px;
`;

export const TotalPrice = styled.span`
  font-size: 14px;
`;

export const Dday = styled.span`
  color: #fd3446;
  font-size: 14px;
  font-weight: bold;
`;

export const IconArea = styled.div`
  width: 45px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ApplyButton = styled.button`
  height: 45px;
  width: 190px;
  background: #222428;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
`;

// export const ResultButton = styled(ApplyButton)`
//   background: #fd3446;
//   color: #ffffff;
// `;

export const ShareIcon = styled(VscCopy)`
  width: 50%;
  height: 50%;
  color: #747474;
`;

export const MessageIcon = styled(TbMessageCircle2)`
  height: 50%;
  width: 50%;
`;

export const HeartIcon = styled(AiOutlineHeart)`
  width: 50%;
  height: 50%;
  color: #747474;
`;
