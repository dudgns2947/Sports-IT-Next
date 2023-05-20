import React from 'react';
import styled from 'styled-components';

interface CustomButtonProps {
  imageUrl: string;
  buttonName: string;
}

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background-color : transparent;
  justify-content : center;
  flex-direction : column;
  border: none;
  cursor: pointer;
  margin : 10px;
`;

const ImageWrapper = styled.div`
  display : flex;
  margin-bottom : 5px;
  width : 45px;
  height : 45px;
  justify-content:center;
  align-items: center;
  background-color: #F9F9FA;
  border-radius : 3px;
`

const ButtonImage = styled.img`
  width: 25px;
  object-fit : contain;
`;

const ButtonText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const CustomButton: React.FC<CustomButtonProps> = ({ imageUrl, buttonName }) => {
  return (
    <ButtonWrapper>
      <ImageWrapper>
        <ButtonImage src={imageUrl} alt="Button Icon" />
      </ImageWrapper>
      <ButtonText>{buttonName}</ButtonText>
    </ButtonWrapper>
  );
};

export default CustomButton;