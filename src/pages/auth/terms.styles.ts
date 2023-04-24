import styled from "styled-components";
import {
  AiFillCheckCircle,
  AiOutlineCheck,
  AiOutlineRight,
} from "react-icons/ai";

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  padding-left: 18px;
  padding-top: 20%;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 30px;
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
  margin-right: 5px;
  color: ${(props) => (props.agree ? "#212121" : "#EDEDED")};
  cursor: pointer;
`;

export const TotalAgreeText = styled.span`
  font-size: 20px;
`;

export const Term = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 0;
`;

export const TermLeftArea = styled.div``;

export const TermIcon = styled(AiOutlineCheck)<AgreeIconProps>`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: ${(props) => (props.agree ? "#212121" : "#EDEDED")};
  cursor: pointer;
`;

export const TermText = styled.span`
  font-size: 18px;
`;

export const TermPageIcon = styled(AiOutlineRight)`
  width: 18px;
  height: 25px;
  color: #aeaeae;
`;
