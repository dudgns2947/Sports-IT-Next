import styled from "styled-components";
import { BiSearch, BiBell, BiUser } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { CiBellOn, CiUser } from "react-icons/ci";
import { FaRegBell, FaRegUser } from "react-icons/fa";

export const TopWrapper = styled.div`
  width: 100%;
  padding: 5px;
  border-bottom: 8px solid #f9f9fa;
`;

export const TopBar = styled.div`
  top: 0%;
  width: 100%;
  display: flex;
  padding: 14px 15px;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  /* width: 375px; */
  width: 85%;
  height: 40px;
  position: relative;
`;

export const FilterButtonArea = styled.div`
  width: 100%;
  height: 45px;
  margin: 0px 20px;
  display: flex;
`;

interface TotalButtonProps {
  active: boolean;
}

export const TotalButton = styled.button<TotalButtonProps>`
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
  display: inline-block;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background: #f9f9fa;
  border-radius: 12px;
  border: none;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
`;

export const SearchButton = styled.button``;

export const SearchIcon = styled(BiSearch)`
  position: absolute;
  right: 2%;
  top: 8px;
  width: 27px;
  height: 27px;
  color: #747474;
  cursor: pointer;
`;

export const AlarmButton = styled(FaRegBell)`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

export const MyPageButton = styled(FaRegUser)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 15%;
`;
