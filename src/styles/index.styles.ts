import styled from "styled-components";
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
