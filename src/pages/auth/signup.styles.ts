import NavBar from "@component/components/navbar/NavBar";
import styled from "styled-components";

export const Form = styled.form`
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputArea = styled.div`
  padding: 30px;
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
  padding: 8px 1px;
`;

export const NavBarTwo = styled(NavBar)`
  /* width: 375px;
  height: 64.8px; */
`;
