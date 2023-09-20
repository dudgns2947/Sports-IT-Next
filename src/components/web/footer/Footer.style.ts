import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 355px;
  width: 100%;
  padding: 23px 10%;

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
