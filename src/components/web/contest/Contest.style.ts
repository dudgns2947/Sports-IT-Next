import { ITag } from "@component/interfaces/contest/contestInterface";
import styled from "styled-components";

export const ContestContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 416px;
  width: 300px;
`;

export const TagArea = styled.div`
  display: flex;
`;

export const Tag = styled.span<ITag>`
  width: 40px;
  height: 22px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 5px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.is_premium === true ? "#feebec" : "#F5F6F7"};
  color: ${(props) => (props.is_premium === true ? "#FD3446" : "#747474")};
`;

export const ContestName = styled.h2`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ContestHost = styled.h3`
  color: #747474;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const ContestDday = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: #fd3446;
`;
