import React from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const SelectBox = styled.div`
  padding: 17px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const SelectTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #747474;
`;

const SelectContentArea = styled.div``;

const SelectContent = styled.label``;

const SelectOptionArea = styled.ul``;

const SelectOption = styled.li``;

const UpIcon = styled(BsChevronUp)`
  color: #212121;
  width: 6px;
  height: 14px;
`;

const DownIcon = styled(BsChevronDown)`
  color: #212121;
  width: 6px;
  height: 14px;
`;

interface ISelectOption {
  value: string;
  name: string;
}

interface CustomSelectProps {
  options: ISelectOption[];
  defaultValue: string;
}

const CustomSelect = ({ options, defaultValue }: CustomSelectProps) => {
  return (
    <select>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          defaultValue={defaultValue}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
