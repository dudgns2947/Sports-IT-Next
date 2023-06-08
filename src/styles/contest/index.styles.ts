import styled from "styled-components";
import { BiSearch, BiBell, BiUser } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { CiBellOn, CiUser } from "react-icons/ci";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  padding: 5px;
  border-bottom: 8px solid #f9f9fa;
`;

export const TopBar = styled.div`
  width: 100%;
  top: 0%;
  display: flex;
  padding: 14px 15px;
  justify-content: space-evenly;
  align-items: center;
`;

export const SearchForm = styled.form`
  /* width: 375px; */
  width: 75%;
  /* background-color: blue; */
  height: 40px;
  position: relative;
`;

export const FilterButtonArea = styled.div`
  width: 100%;
  height: 45px;
  /* margin: 0px 20px; */
  display: flex;
`;

interface TotalButtonProps {
  active: boolean;
}

export const TotalButton = styled.button<TotalButtonProps>`
  height: 34px;
  width: 53px;
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
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const MyPageButton = styled(FaRegUser)`
  width: 27px;
  height: 27px;
  cursor: pointer;
`;

export const ContentArea = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 20px;
`;

export const OrderArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0 10px 0;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Order = styled(Filter)``;

export const OrderSelect = styled.select`
  border: none;
`;

export const OrderOption = styled.option`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const OrderText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

export const ContestArea = styled.div`
  /* position: fixed; */
  overflow: auto;
  height: 100%;
  width: 100%;
  /* padding-bottom: 50px; */
`;

export const Contest = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const ContestImage = styled.img`
  width: 72px;
  height: 96px;
  margin-right: 17px;
`;

export const ContestTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #212121;
`;

export const ContestHostName = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  margin-right: 6px;
`;

export const ContestDday = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
`;

export const ContestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContestTagArea = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49px;
  height: 22px;
  background-color: #f9f9f9;
  color: #747474;
  border-radius: 20px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  margin-right: 4px;
  padding: 2px 7px;
`;

export const PremiumTag = styled(Tag)`
  background-color: rgba(253, 52, 70, 0.1);
  color: #fd3446;
`;

export const ContestHostArea = styled.div`
  display: flex;
`;

export const PremiumLogo = styled.img`
  width: 17px;
  height: 17px;
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 140px;
  height: 44px;
  left: calc(50% - 140px / 2 + 0.5px);

  top: 82%;
  background: #212121;

  border-radius: 50px;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const PlusIcons = styled(AiOutlinePlus)`
  width: 16px;
  height: 16px;
  margin-right: 8.64px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
`;

export const SeeMoreArea = styled.div`
  height: 50px;
  margin: 20px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeeMoreButton = styled.button`
  border-radius: 8px;
  width: 100%;
  font-size: 14px;
  height: 70%;
  background-color: #ffffff;
  color: #212121;
  border: #212121 1px solid;
`;

export const FilterIcon = styled(FiFilter)`
  margin-right: 5px;
`;

export const ArrowIcon = styled(AiOutlineDown)`
  margin-left: 5px;
`;

export const ContestNullArea = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContestNullText = styled.span``;
