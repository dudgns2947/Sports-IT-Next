import React from "react";
import styled from "styled-components";

const ContestInfoArea = styled.div`
  padding-bottom: 20px;
`;

const ContestName = styled.h1`
  font-weight: 600;
  font-size: 18px;
  color: #212121;
  margin-bottom: 8px;
`;

const ContestGroup = styled.h2`
  font-weight: 500;
  font-size: 14px;
  color: #aeaeae;
`;

interface ContestInfoProps {
  contestName: string;
  contestGroup: string;
}

const ContestInfo = ({ contestName, contestGroup }: ContestInfoProps) => {
  return (
    <ContestInfoArea>
      <ContestName>{contestName}</ContestName>
      <ContestGroup>{contestGroup}</ContestGroup>
    </ContestInfoArea>
  );
};

export default ContestInfo;
