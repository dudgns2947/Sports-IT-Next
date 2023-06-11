import NavBar from "@component/components/navbar/NavBar";
import styled, { keyframes } from "styled-components";

const InputBorderColor = keyframes`
  0% {
    border: #eaeaea;
  }
  100% {
    border: #000000;
  }

`;

export const Form = styled.form`
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputArea = styled.div`
  padding: 20px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

export const InputTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const InputContent = styled.input`
  font-size: 15px;
  padding: 8px 20px;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  margin-top: 5px;
  margin-bottom: -18px;
  width: 100%;
  height: 45px;
  left: 20px;
  top: 147px;

  &:focus {
    border: 1px solid #000000;
  }
`;

export const DoubleCheckWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputContentTwo = styled(InputContent)`
  width: 73%;
  margin: 0;
`;

export const DoubleCheckButton = styled.div`
  background: #212121;
  border-radius: 6px;
  width: 26%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 13px 16px;
  cursor: pointer;
`;

export const NavBarTwo = styled(NavBar)`
  /* width: 375px;
  height: 64.8px; */
`;

export const AvailableText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 5px 7px;
  color: #4c8bff;
`;

export const DisableText = styled(AvailableText)`
  color: #fd3446;
`;
