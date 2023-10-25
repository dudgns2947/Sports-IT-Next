import styled from "styled-components";
import { Input } from "./headcount.styles";

export const SmallInput = styled(Input)`
  width: 90%;
  margin-right: 10px;
`;

export const LargeInput = styled(Input)`
  height: 100%;
  color: black;
  ::placeholder {
    color: #aeaeae;
  }
`;

export const SmallInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  padding: 10px 20px;
  height: 77%;
  overflow-y: auto;
`;

export const Text = styled.span`
  /* margin-right: 10px; */
  font-size: 14px;
  width: 10%;
`;

export const ContentContainer = styled.div``;
