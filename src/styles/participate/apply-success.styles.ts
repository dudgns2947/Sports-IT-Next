import { Container } from "@component/components/container/container";
import styled from "styled-components";
import Image from "next/image";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

export const QuestionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const QuestionText = styled.span`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const DetailArea = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  bottom: 18%;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
`;

export const DetailTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #aeaeae;
  margin-bottom: 10px;
`;
export const DetailContent = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;

export const DetailMoney = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #fd3446;
`;

export const BottomFooter = styled.button`
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 5%;
  left: 5%;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: 90%;
`;
