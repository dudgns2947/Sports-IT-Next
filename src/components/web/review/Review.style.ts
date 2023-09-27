import styled from "styled-components";

export const ReviewContainer = styled.article`
  width: 460px;
  height: 250px;
  padding: 24px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const ReviewTitle = styled.h3`
  color: #fd3446;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ReviewContent = styled.span`
  color: #747474;
  font-size: 12px;
  line-height: normal;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 5px;
`;

export const SubName = styled.span`
  font-size: 10px;
  color: #747474;
`;
