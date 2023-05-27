import { NavProps } from "@component/interfaces/navInterface";
import styled from "styled-components";

export const NavArea = styled.button<NavProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  align-items: center;
  height: 71.3px;
  width: 375px;
  background-color: ${(props) => (props.active ? "#212121" : "#ffffff")};
  cursor: pointer;
`;

export const NavText = styled.span<NavProps>`
  font-size: 18px;
  font-weight: bold;
  font-display: center;
  color: ${(props) => (props.active ? "#ffffff" : "#212121")};
`;
