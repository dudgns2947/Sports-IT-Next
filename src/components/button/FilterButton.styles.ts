import { FilterButtonProps } from "@component/interfaces/contestInterface";
import styled from "styled-components";

export const FilterButton = styled.button<FilterButtonProps>`
  width: 86px;
  height: 34px;
  border: 1px solid #ededed;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? "#212121" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#212121")};
  padding: 8px 10px;
  font-weight: 500;
  font-size: 12px;
  margin-right: 6px;
  cursor: pointer;
`;
