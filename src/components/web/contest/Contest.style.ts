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
  flex-direction: column;
`;

export const Tag = styled.span<ITag>`
  width: 40px;
  height: 22px;
  background-color: ${(props) =>
    props.is_premium === true ? "#feebec" : "#F5F6F7"};
  color: ${(props) => (props.is_premium === true ? "#FD3446" : "#747474")};
`;

export const ContestName = styled.h2``;

export const ContestHost = styled.h3``;

export const ContestDday = styled.h3``;
