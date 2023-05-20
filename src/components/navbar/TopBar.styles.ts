import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { FaRegBell, FaRegUser } from "react-icons/fa";

export const TopBar = styled.div`
  display: flex;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  width: 80%;
  height: 40px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 260px;
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
  right: 20px;
  top: 8px;
  width: 27px;
  height: 27px;
  color: #747474;
  cursor: pointer;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;

export const AlarmButton = styled(FaRegBell)`
  width: 23px;
  height: 23px;
`;

export const MyPageButton = styled(FaRegUser)`
  width: 22px;
  height: 22px;
`;
