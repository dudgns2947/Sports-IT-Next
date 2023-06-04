import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

interface CustomButtonProps {
  imageUrl: string;
  buttonName: string;
  routeUrl: string;
}

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: center;
  flex-direction: column;
  border: none;
  cursor: pointer;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: 6px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #f9f9fa;
  border-radius: 14px;
`;

const ButtonImage = styled.img`
  width: 25px;
  object-fit: contain;
`;

const ButtonText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const CustomButton: React.FC<CustomButtonProps> = ({ imageUrl, buttonName, routeUrl }) => {
  const router = useRouter();
  return (
    <ButtonWrapper onClick={() => router.push(routeUrl)}>
      <ImageWrapper>
        <ButtonImage src={imageUrl} alt="Button Icon" />
      </ImageWrapper>
      <ButtonText>{buttonName}</ButtonText>
    </ButtonWrapper>
  );
};

export default CustomButton;
