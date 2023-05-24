import styled from "styled-components";

export const SubText = styled.span`
  color: #747474;
  font-size: 16px;
  font-weight: 400;
`;

export const Form = styled.form`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  padding: 50px 20px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const InputTitle = styled.h3`
  color: #212121;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 335px;
  height: 45px;
  font-size: 14px;
  font-weight: 400;
  padding: 14px 15px;
  color: #aeaeae;
  background-color: #f9f9fa;
  margin-bottom: 8px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ff002e;
`;
