import React, { SetStateAction } from "react";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";
import { PlayerInfo } from "@component/interfaces/contestInterface";
import { MdTempleBuddhist } from "react-icons/md";

interface AddButtonProps {
  text: string;
  setValue?: React.Dispatch<SetStateAction<boolean>>;
  setPlayerList?: React.Dispatch<SetStateAction<PlayerInfo[]>>;
}

const AddArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  cursor: pointer;
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

const AddButton = ({ text, setValue, setPlayerList }: AddButtonProps) => {
  return (
    <AddArea
      onClick={() => {
        if (setValue) {
          setValue((current) => !current);
        }
        if (setPlayerList) {
          setPlayerList((current) => {
            const tempList = [...current];
            tempList.push({ playerName: "", playerId: 0 });
            return tempList;
          });
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
