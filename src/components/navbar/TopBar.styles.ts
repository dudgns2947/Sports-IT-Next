import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { CiBellOn, CiUser } from "react-icons/ci";

export const TopBar = styled.div`
  display: flex;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  width: 375px;
  height: 40px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 262px;
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

export const AlarmButton = styled(CiBellOn)`
  width: 45px;
  height: 45px;
`;

export const MyPageButton = styled(CiUser)`
  width: 40px;
  height: 40px;
`;
