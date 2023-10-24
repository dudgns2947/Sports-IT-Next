import styled from "styled-components";

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
  z-index: 1;
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

export const BlackText = styled(BlackNavText)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

interface HeaderBottomAreaProps {
  isHidden: boolean;
}

export const HeaderBottomArea = styled(HeaderTopArea)<HeaderBottomAreaProps>`
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
`;

export const RegisterNavButton = styled.button`
  width: 123px;
  height: 35px;
  border-radius: 80px;
  background-color: #fd3446;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
`;
