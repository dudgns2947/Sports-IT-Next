import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { FlexColumn } from "@component/components/area/areaComponent";

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
  padding-top: 112px;
  height: 100vh;
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

export const DividedArea = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RealTimeContest = styled.div`
  margin-bottom: 40px;
  margin-right: 40px;
  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

export const DocumentContainer = styled.div`
  background-color: #1b1b1b;
  height: 460px;
  width: 100%;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
`;

export const WhiteText = styled.span`
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const GrayText = styled.span`
  font-size: 24px;
  color: #aeaeae;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const RedNavButton = styled.button`
  width: 305px;
  height: 55px;
  border-radius: 4px;
  background-color: #fd3446;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteTextWrapper = styled(FlexColumn)`
  margin-bottom: 10px;
`;

export const GrayTextWrapper = styled(FlexColumn)`
  margin-bottom: 50px;
`;

export const ReviewContainer = styled.div`
  width: 100%;

  padding: 10% 0;
  background-color: #f5f6f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReviewSlider = styled(ContestArea)`
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

export const PartnerContainer = styled.div`
  padding: 30px 0;
  background-color: #747474;
  display: flex;
  justify-content: center;
  align-items: center;
`;
