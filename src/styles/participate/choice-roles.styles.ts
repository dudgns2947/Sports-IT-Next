import { IApplyRole, IRole } from "@component/interfaces/roleInterface";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";

export const RoleSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  /* justify-content: center;
  align-items: center; */
`;

export const QuestionArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  padding: 15% 20px 10% 20px;
`;

export const QuestionText = styled.span`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 45%;
`;

export const SpoitorButton = styled.button<IApplyRole>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid;
  border-color: ${(props) => (props.role === "PLAYER" ? "#212121" : "#EDEDED")};
  border-radius: 12px;
  width: 100%;
  height: 100px;
  margin-bottom: 5px;
  padding-left: 20px;
  cursor: pointer;
  background-color: #ffffff;
`;

export const SportyButton = styled(SpoitorButton)`
  border-color: ${(props) => (props.role === "VIEWER" ? "#212121" : "#EDEDED")};
`;

export const SporitorSelectIcon = styled(AiFillCheckCircle)<IApplyRole>`
  color: ${(props) => (props.role === "PLAYER" ? "#212121" : "#EDEDED")};
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const SportySelectIcon = styled(SporitorSelectIcon)`
  color: ${(props) => (props.role === "VIEWER" ? "#212121" : "#EDEDED")};
`;

export const RoleArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const RoleTextArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Role = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const participateAvailable = styled.span`
  font-size: 10px;
  font-weight: bold;
  margin-left: 11px;
  color: #fd3446;
`;

export const RoleDescription = styled.span`
  font-size: 14px;
`;

export const NavArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: #212121;
`;

export const NavText = styled.span`
  color: #ffffff;
`;
