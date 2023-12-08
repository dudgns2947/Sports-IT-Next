import {
  ISector,
  ISubSector,
  ITeam,
} from "@component/interfaces/contestInterface";
import React, { useState } from "react";
import styled from "styled-components";

const SelectBox = ({
  sectors,
  weights,
  sector,
  weight,
  setSector,
  setWeight,
  teamList,
  team,
  setTeam,
}: {
  sectors?: ISector[];
  weights?: ISubSector[];
  sector?: ISector;
  weight?: ISubSector;
  setSector?: React.Dispatch<React.SetStateAction<ISector | undefined>>;
  setWeight?: React.Dispatch<React.SetStateAction<ISubSector | undefined>>;
  teamList?: ITeam[];
  team?: ITeam;
  setTeam?: React.Dispatch<React.SetStateAction<ITeam>>;
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <SelectBoxContainer onClick={() => setShowOptions((prev) => !prev)}>
      {sector && sector.sectorName !== "" && <Label>{sector.sectorName}</Label>}
      {weight && weight.subSectorName !== "" && (
        <Label>{weight.subSectorName}</Label>
      )}
      {team && team.teamName !== "" && <Label>{team.teamName}</Label>}
      <SelectOptions show={showOptions}>
        {sectors &&
          setSector &&
          sectors.map((sector) => (
            <Option key={sector.sectorCode} onClick={() => setSector(sector)}>
              {sector.sectorName}
            </Option>
          ))}
        {weights &&
          setWeight &&
          weights.map((weight) => (
            <Option
              key={weight.subSectorCode}
              onClick={() => setWeight(weight)}
            >
              {weight.subSectorName}
            </Option>
          ))}
        {teamList &&
          setTeam &&
          teamList.map((team) => (
            <Option key={team.teamIdx} onClick={() => setTeam(team)}>
              {team.teamName}
            </Option>
          ))}
      </SelectOptions>
    </SelectBoxContainer>
  );
};

export default SelectBox;

const SelectBoxContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  height: 30px;
  border: 1px solid #e9ebed;
  border-radius: 4px;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #e9ebed;
    font-size: 20px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  color: #747474;
`;

interface ISelectOptions {
  show: boolean;
}

const SelectOptions = styled.ul<ISelectOptions>`
  position: absolute;
  list-style: none;
  top: 35px;
  left: 0;
  width: 100%;
  overflow: hidden;
  /* height: 90px; */
  z-index: 1;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  border-left: 1px solid #e9ebed;
  border-right: 1px solid #e9ebed;
  border-bottom: ${(props) => (props.show ? "1px solid #e9ebed" : "none")};
  background-color: #ffffff;
  color: #aeaeae;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 10px 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #e9ebed;
  }
`;
