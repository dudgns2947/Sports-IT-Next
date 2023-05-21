import styled from "styled-components";

export const Contest = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const ContestImage = styled.img`
  width: 72px;
  height: 96px;
  margin-right: 17px;
`;

export const ContestTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #212121;
`;

export const ContestHostName = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  margin-right: 6px;
`;

export const ContestDday = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
`;

export const ContestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContestTagArea = styled.div`
  display: flex;
`;
export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
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
