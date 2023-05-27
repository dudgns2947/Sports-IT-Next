import React from "react";
import styled from "styled-components";

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 20px;
`;

const UserInfoArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #212121;
`;

const UserEmail = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #aeaeae;
`;

interface ProfileTabProps {
  imgUrl: string;
  userName: string;
  userEmail: string;
}

const ProfileTab = ({ imgUrl, userName, userEmail }: ProfileTabProps) => {
  return (
    <ProfileArea>
      <ProfileImage src={imgUrl} />
      <UserInfoArea>
        <UserName>{userName}</UserName>
        <UserEmail>{userEmail}</UserEmail>
      </UserInfoArea>
    </ProfileArea>
  );
};

export default ProfileTab;
