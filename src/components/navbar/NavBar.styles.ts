import { NavProps } from "@component/interfaces/navInterface";
import styled from "styled-components";

export const NavArea = styled.button<NavProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  align-items: center;
  height: 10%;
  width: 100%;
  background-color: ${(props) => (props.active ? "#212121" : "#212121")};
  cursor: pointer;
`;

export const NavText = styled.span<NavProps>`
  font-size: 18px;
  font-weight: bold;
  font-display: center;
  color: ${(props) => (props.active ? "#ffffff" : "#ffffff")};
`;
