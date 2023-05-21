import styled from "styled-components";
import { GrShareOption } from "react-icons/gr";
import { TbMessageCircle2 } from "react-icons/tb";

export const ContestArea = styled.div``;

export const Contest = styled.div`
  display: flex;
  margin: 20px 0;
  cursor: pointer;
`;

export const ContestImage = styled.img`
  width: 72px;
  height: 96px;
  margin-right: 17px;
`;

export const ContestTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #212121;
  margin-bottom: 4px;
`;

export const ContestHostName = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #747474;
  margin-right: 6px;
  margin-bottom: 16px;
`;

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
  width: 53px;
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
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 400px;
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
  width: 50px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ApplyButton = styled.button`
  width: 223px;
  height: 50px;
  background: #222428;
  border-radius: 6px;
  color: #ffffff;
`;

export const ShareIcon = styled(GrShareOption)`
  width: 28px;
  height: 28px;
  color: #aeaeae;
`;

export const MessageIcon = styled(TbMessageCircle2)`
  height: 28px;
  width: 28px;
`;
