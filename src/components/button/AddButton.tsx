import React, { SetStateAction } from "react";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";

interface AddButtonProps {
  text: string;
  setValue?: React.Dispatch<SetStateAction<boolean>>;
}

const AddArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

const AddIconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #f9f9fa;
  border: 1px solid #ededed;
  border-radius: 100px;
  margin-bottom: 15px;
`;

const AddIcon = styled(BsPlusLg)`
  color: #aeaeae;
  width: 25px;
  height: 25px;
`;

const AddText = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #212121;
`;

const AddButton = ({ text, setValue }: AddButtonProps) => {
  return (
    <AddArea
      onClick={() => {
        if (setValue) {
          setValue((current) => !current);
        }
      }}
    >
      <AddIconArea>
        <AddIcon />
      </AddIconArea>
      <AddText>{text}</AddText>
    </AddArea>
  );
};

export default AddButton;
