import { SelectProps } from "@component/interfaces/selectInterface";
import styled from "styled-components";

export const SelectButton = styled.button<SelectProps>`
  border-radius: 20px;
  height: 40px;
  margin-right: 7px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? "#212121" : "#ffffff")};
  border: 1px solid #ededed;
`;

export const SelectText = styled.span<SelectProps>`
  color: ${(props) => (props.active ? "#ffffff" : "#212121")};
  margin: 0 10px;
`;
