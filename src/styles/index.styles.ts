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
  width: 1920px;
  height: 4276px;

  .slider {
    height: 618px;
    background-color: black;
    padding: 0 240px;
    display: flex;
  }
  .red-area {
    height: 100px;
    background-color: #fd3446;
    padding: 0 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .red-inside-area {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    padding: 0 240px;
  }
  .red-inside-area span {
    color: #ffffff;
  }
  .white-mid-text {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .white-small-text {
    font-size: 14px;
    color: #ffffff;
  }
  .signup-white-btn {
    width: 227px;
    height: 55px;
    border-radius: 4px;
    background-color: #ffffff;
    color: black;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Header = styled.header`
  height: 112px;
  width: 1440px;
  padding: 0 240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  align-items: center;
`;

export const GrayNavText = styled.span`
  color: #747474;
  font-size: 14px;
  height: 21px;
  margin-left: 15px;
`;

export const BlackNavText = styled.span`
  height: 23px;
  font-size: 14px;
  color: black;
  font-weight: bold;
  margin-right: 20px;
`;

export const HeaderBottomArea = styled(HeaderTopArea)``;

export const RegisterNavButton = styled.button`
  width: 123px;
  height: 35px;
  border-radius: 80px;
  background-color: #fd3446;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
`;
