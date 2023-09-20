import styled from "styled-components";

export const RedArea = styled.div`
  height: 100px;
  background-color: #fd3446;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 992px) {
    height: 150px;
  }
`;

export const ContentArea = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    align-items: center;
  }
`;

export const WhiteMediumText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const WhiteSmallText = styled.span`
  font-size: 14px;
  color: #ffffff;
`;

export const SignupButton = styled.button`
  width: 227px;
  height: 55px;
  border-radius: 4px;
  background-color: #ffffff;
  color: black;
  font-size: 16px;
  font-weight: bold;
  @media only screen and (max-width: 992px) {
    margin-top: 10px;
  }
`;
