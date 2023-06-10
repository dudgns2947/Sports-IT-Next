import { ToggleProps } from "@component/interfaces/contestInterface";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export const SelectArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 17px 0;
  border-bottom: 1px solid #ededed;
`;

export const SelectContent = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #747474;
`;

export const SelectBox = styled.select`
  border: none;
  margin: 0;
  min-width: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fd3446;
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
`;

export const SelectOption = styled.option``;

export const ToggleArea = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

export const ToggleLeft = styled.div<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  border-color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  border-radius: 6px 0px 0px 6px;
  border-right: ${(props) => (props.active ? "" : "none")};
  height: 45px;
  width: 50%;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const ToggleRight = styled.div<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  color: ${(props) => (props.active ? "#AEAEAE" : "#212121")};
  border-color: ${(props) => (props.active ? "#AEAEAE" : "#212121")};
  border-radius: 0px 6px 6px 0px;
  border-left: ${(props) => (props.active ? "none" : "")};
  height: 45px;
  width: 50%;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const RankArea = styled.div`
  padding: 20px 0;
`;

export const Rank = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const RankName = styled.div`
  height: 45px;
  width: 13%;
  background: #212121;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RankForm = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 45px;
  width: 85%;
  background: #f9f9fa;
  border-radius: 12px;
`;

export const RankInput = styled.input`
  background: #f9f9fa;
  padding-left: 15px;
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

export const SearchIcon = styled(BiSearch)`
  position: absolute;
  right: 10px;
  top: 8px;
  width: 27px;
  height: 27px;
  color: #747474;
  cursor: pointer;
`;

export const AwardArea = styled(RankArea)``;

export const AwardTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding-left: 5px;
`;

export const AwardForm = styled(RankForm)`
  margin-top: 10px;
  width: 100%;
`;

export const AwardInput = styled(RankInput)``;

export const Award = styled.div`
  margin-bottom: 24px;
`;

export const RankAndWeight = styled.div`
  border-bottom: 1px solid #ededed;
`;

export const DocumentArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

export const DocumentToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 11px;
`;

export const CheckIcon = styled(AiFillCheckCircle)<ToggleProps>`
  width: 20px;
  height: 20px;
  color: ${(props) => (props.active ? "#212121" : "#EDEDED")};
  margin-right: 5px;
`;

export const CheckText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
`;

export const CheckContent = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 0 2px;
  color: #747474;
`;
