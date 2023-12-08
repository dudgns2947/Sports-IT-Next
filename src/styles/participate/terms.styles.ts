import styled from "styled-components";
import {
  AiFillCheckCircle,
  AiOutlineCheck,
  AiOutlineRight,
} from "react-icons/ai";

import { BsExclamationCircleFill } from "react-icons/bs";

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  padding-left: 18px;
  padding-top: 20%;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const TermArea = styled.div`
  height: 35%;
  padding-left: 18px;
`;

export const TotalAgree = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  border-bottom: 1px solid #ededed;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

interface AgreeIconProps {
  agree: boolean;
}

export const TotalAgreeIcon = styled(AiFillCheckCircle)<AgreeIconProps>`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  color: ${(props) => (props.agree ? "#212121" : "#EDEDED")};
  cursor: pointer;
`;

export const TotalAgreeText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Term = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 0;
`;

export const TermLeftArea = styled.div`
  display: flex;
`;

export const TermIcon = styled(AiOutlineCheck)<AgreeIconProps>`
  width: 18px;
  height: 18px;
  margin-right: 20px;
  color: ${(props) => (props.agree ? "#212121" : "#EDEDED")};
  cursor: pointer;
`;

export const TermText = styled.span`
  font-size: 18px;
  font-weight: 300;
`;

export const TermPageIcon = styled(AiOutlineRight)`
  width: 18px;
  height: 25px;
  color: #aeaeae;
`;

export const ExclamationIcon = styled(BsExclamationCircleFill)`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  color: #e9ebed;
`;
