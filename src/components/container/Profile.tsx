import React from 'react';
import styled from 'styled-components';

interface ProfileProps {
  imageUrl : string;
  name : string;
  favorite : string;
}
const Wrapper = styled.span`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Image = styled.img`
    width: 100%;
  border-radius: 50%;
`;

const MainText = styled.div`
  font-weight: bolder;
  color: black;
  margin-top: 10%;
`;

const SubText = styled.div`
    font-size: 10%;
    color : gray;
    margin-top: 5%;
`

const Profile: React.FC<ProfileProps> = ({imageUrl, name, favorite}) => {
    return(
    <Wrapper>
        <Image src={imageUrl}/>
        <MainText>{name}</MainText>
        <SubText>{favorite}</SubText>
    </Wrapper>      
    );
}

export default Profile;