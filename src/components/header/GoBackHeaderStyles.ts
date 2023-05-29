import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 50px;
  padding: 12px 20px;
`;

export const IconArea = styled.div`
  width: 5%;
`;

export const TitleArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLeftIcon = styled(AiOutlineLeft)`
  width: 23px;
  height: 28px;
  cursor: pointer;
`;

export const HeaderLeftIconWhite = styled(HeaderLeftIcon)`
  color: #ffffff;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding-right: 2%;
`;

export const HeaderTitleWhite = styled(HeaderTitle)`
  color: #ffffff;
`;

export const HeaderSettingIcon = styled(IoSettingsOutline)`
  width: 25px;
  height: 25px;
`;
