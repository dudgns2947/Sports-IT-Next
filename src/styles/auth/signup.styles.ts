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
  width: 335px;
  height: 45px;
  left: 20px;
  top: 147px;

  &:focus {
    border: 1px solid #000000;
  }
`;

export const NavBarTwo = styled(NavBar)`
  /* width: 375px;
  height: 64.8px; */
`;
