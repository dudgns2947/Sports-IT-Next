import styled, { css } from "styled-components";
import ContestInfo from "@component/components/contest/ContestInfo";
import { ContentArea } from "@component/components/area/areaComponent";

export const ContentAreaWrapper = styled(ContentArea)`
  height: 100%;
  padding: 25px 20px 0 20px;
  overflow: auto;
`;

export const ContestInform = styled(ContestInfo)`
  position: relative;
  margin-bottom: 15px;
  margin-top: 20px;
  z-index: -5px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ebebeb;
  margin: 20px 0;
`;
