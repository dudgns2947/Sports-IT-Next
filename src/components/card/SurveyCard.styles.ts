import styled from "styled-components";

import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

import { BsTrash } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";

interface ToggleInputProps {
  active: boolean;
}

export const SurveyCardWrapper = styled.div`
  width: 100%;
  padding: 5px 25px;
  border: 1px solid #ededed;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const SurveyTopArea = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TinySqaure = styled.div`
  width: 50px;
  height: 3px;
  background-color: #aeaeae;
  border-radius: 100px;
`;

export const SurveyTitleArea = styled.div`
  height: 50px;
`;

export const SurveyTitleInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  border-bottom: 1px solid #ededed;
  font-weight: 500;
  font-size: 14px;
`;

export const SurveyInput = styled.input`
  border-bottom: 1px solid #ededed;
  font-weight: 500;
  font-size: 14px;
  padding: 0 5px 5px 5px;
`;

export const SurveyCheckArea = styled.div`
  border-bottom: 1px solid #ededed;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`;

export const SurveyCheckBox = styled.input``;

export const SurveyCheckLabel = styled.label`
  margin-bottom: 12px;
`;

export const AddCheckLabel = styled(SurveyCheckLabel)`
  color: #aeaeae;
`;

export const SurveyBottomArea = styled.div``;

export const UnCheckButton = styled(MdOutlineCheckBoxOutlineBlank)``;

export const CheckButton = styled(MdOutlineCheckBox)``;

export const TrashIcon = styled(BsTrash)`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  color: #747474;
`;

export const ImageIcon = styled(CiImageOn)`
  width: 25px;
  height: 25px;
  margin-left: 5px;
  color: #747474;
`;

export const ToggleInput = styled.input<ToggleInputProps>`
  appearance: none;
  position: relative;
  border: max(2px, 0.1em) solid gray;
  border-radius: 1.25em;
  width: 2.25em;
  height: 1.25em;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: gray;
    transition: left 250ms linear;
    border-color: ${(props) => (props.active ? "#4C8BFF" : "gray")};
  }
  :checked {
    background-color: #4c8bff;
    border-color: #4c8bff;
  }
  :checked::before {
    background-color: white;
    left: 1em;
  }
`;

export const ToggleLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const BottomItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const ToggleArea = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleText = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #aeaeae;
`;

export const SelectBar = styled.select`
  width: 45%; /* 가로 사이즈 */
  padding: 7px; /* 내부여백 */
  padding-left: 12px;
  border: 1px solid #ddd;
  background: url(/images/iconImg/arrow_down_18dp.png) no-repeat right 50%; /* 화살표 위치 */
  background-size: 30px; /* 화살표 크기 */
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 12px;
  color: #000;
  outline: none;
  :hover {
    border: 1px solid #aaa;
  } /* 마우스오버 */
`;

export const SelectOption = styled.option``;
