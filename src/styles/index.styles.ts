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
  /* height: 4276px; */

  .slider {
    height: 618px;
    width: 100%;
    background-color: black;
    padding: 0 10%;
    display: flex;
  }
  .red-area {
    height: 100px;
    background-color: #fd3446;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .red-inside-area {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
  }

  .red-inside-area span {
    color: #ffffff;
  }
  .white-mid-text {
    font-size: 1.2rem;
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

  @media only screen and (max-width: 992px) {
    .red-inside-area {
      flex-direction: column;
    }
    .red-area {
      height: 150px;
    }
    .signup-white-btn {
      margin-top: 10px;
    }
    .text-area {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Header = styled.header`
  height: 112px;
  width: 100vw;
  padding: 0 10%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #ffffff;
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

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 355px;
  width: 1920px;
  padding: 23px 240px;

  .info-area {
    height: 236px;
    padding-top: 32px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #e9ebed;
  }
`;

export const NavRow = styled.div`
  display: flex;

  p {
    margin: 3px 15px 3px 0;
    font-size: 14px;
    color: "#212121";
  }
  p > span:first-child {
    border-right: 1px solid #e9ebed;
    padding-right: 10px;
  }
  p > span:nth-child(2) {
    padding-left: 10px;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  padding-top: 23px;

  span {
    padding: 0 12px;
    font-size: 15px;
    font-weight: bold;
    border-right: 1px solid #e9ebed;
  }
  span:last-child {
    border-right: 1px solid black;
  }
`;
