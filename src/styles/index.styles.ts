import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

export const Banner = styled.div`
  text-align: center;
  display: flex;
`;
export const CustomMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
export const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: #f9f9fa;
`;

export const AdvertiseImage = styled.img`
  width: 100%;
  height: 8%;
  cursor: pointer;
`;

export const WebContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  .content {
    padding-top: 112px;
    height: 100vh;
  }
`;

export const CategoryTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #101c33;
  margin-bottom: 10px;
`;

export const ContestArea = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ContestAreaTwo = styled(ContestArea)`
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SeeMoreButton = styled.button`
  width: 300px;
  height: 55px;
  border-radius: 4px;
  border: 1px solid #aeaeae;
  font-size: 16px;
  font-weight: bold;
`;

export const ContestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrganizationSearchContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SeeMoreNav = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const SeeMoreText = styled.span`
  color: #747474;
  font-size: 12px;
`;

export const SeeMoreIcon = styled(BiChevronRight)`
  width: 12px;
  height: 12px;
  color: #747474;
`;
