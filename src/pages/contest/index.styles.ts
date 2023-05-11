import styled from "styled-components";
import { BiSearch, BiBell, BiUser } from "react-icons/bi";

export const Container = styled.div``;

export const TopBar = styled.div`
  display: flex;
  padding: 14px 20px;
`;

export const SearchForm = styled.form`
  width: 375px;
  height: 40px;
  position: relative;
`;

export const FilterButtonArea = styled.div`
  width: 352px;
  height: 45px;
  margin: 0px 20px;
  display: flex;
`;

export const FilterButton = styled.button`
  width: 86px;
  height: 34px;
  border: 1px solid #ededed;
  border-radius: 20px;
  background: #ffffff;
  padding: 8px 10px;
  font-weight: 500;
  font-size: 12px;
  margin-right: 6px;
  cursor: pointer;
`;

export const TotalButton = styled(FilterButton)`
  width: 47px;
  height: 34px;
  background-color: #212121;
  color: #ffffff;
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

export const SearchButton = styled(BiSearch)`
  position: absolute;
  right: 20px;
  top: 8px;
  width: 27px;
  height: 27px;
  color: #747474;
  cursor: pointer;
`;

export const AlarmButton = styled(BiBell)`
  width: 40px;
  height: 40px;
`;

export const MyPageButton = styled(BiUser)`
  width: 40px;
  height: 40px;
`;

export const ContentArea = styled.div`
  padding: 0 20px;
`;

export const OrderArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0 24px 0;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Order = styled(Filter)``;

export const OrderText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;

export const ContestArea = styled.div``;

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
