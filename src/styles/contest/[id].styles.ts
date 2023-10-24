import styled from "styled-components";
import { GrShareOption } from "react-icons/gr";
import { TbMessageCircle2 } from "react-icons/tb";
import Image from "next/image";
import { MenuProps } from "@component/interfaces/contest/contestInterface";
import { AiOutlineHeart } from "react-icons/ai";
import { VscCopy } from "react-icons/vsc";

export const ContestArea = styled.div`
  padding-bottom: 20%;
`;

export const Contest = styled.div`
  display: flex;
  margin: 20px 0;
  cursor: pointer;
`;

// export const ContestImage = styled.img`
//   width: 72px;
//   height: 96px;
//   margin-right: 17px;
// `;

// export const ContestTitle = styled.h2`
//   font-weight: 600;
//   font-size: 20px;
//   line-height: 30px;
//   color: #212121;
//   margin-bottom: 4px;
// `;

// export const ContestHostName = styled.h3`
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 16px;
//   color: #747474;
//   margin-right: 6px;
//   margin-bottom: 16px;
// `;

export const ContestDday = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #747474;
`;

export const ContestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const ContestTagArea = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14%;
  height: 22px;
  background-color: #f9f9f9;
  color: #747474;
  border-radius: 20px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  margin-right: 4px;
  padding: 2px 7px;
`;

export const PremiumTag = styled(Tag)`
  background-color: rgba(253, 52, 70, 0.1);
  color: #fd3446;
`;

export const ContestHostArea = styled.div`
  display: flex;
`;

export const PremiumLogo = styled.img`
  width: 17px;
  height: 17px;
  display: inline-block;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const DetailTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #222428;
  margin-bottom: 10px;
`;

export const DetailContent = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4d4d4d;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const ApplyWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  border-top: 2px solid #ededed;
`;

export const ApplyBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
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

export const ContestDetailContainer = styled.div`
  padding: 0 10%;
  display: grid;
  grid-template-columns: 1fr 350px;
`;

export const ContestInfoLeft = styled.div``;

export const ContestInfoRight = styled.div``;

export const ContestCard = styled.div`
  border: 1px solid #e9ebed;
  padding: 20px 24px;
  border-radius: 10px;
  margin-left: 10px;
  position: sticky;
  top: 0;
`;

export const ContestImage = styled(Image)`
  margin-bottom: 20px;
`;

export const MenuBar = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 1fr;
`;

export const Menu = styled.span<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-bottom: 2px solid black;
  color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  border-color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  cursor: pointer;
`;

export const MenuRemain = styled.div`
  border-bottom: 2px solid #aeaeae;
  height: 40px;
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

// export const ApplyButton = styled.button`
//   background-color: #212121;
//   border-radius: 6px;
//   width: 200px;
//   height: 40px;
//   color: #ffffff;
// `;
