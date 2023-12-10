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
  margin-bottom: 25px;
  width: 100%;
`;

export const InputAreaTwo = styled(InputArea)`
  width: 48%;
`;

export const InputTitle = styled.h3`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  ::placeholder {
    color: #aeaeae;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  font-size: 14px;
  font-weight: 400;
  padding: 14px 15px;
  color: black;
  background-color: #f9f9fa;
  margin-bottom: 8px;
  border-radius: 10px;
  ::placeholder {
    color: #aeaeae;
  }
`;

export const InputTwo = styled(Input)`
  width: 50%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 14px;
  font-weight: 400;
  padding: 14px 15px;
  color: black;
  background-color: #f9f9fa;
  margin-bottom: 8px;
  border-radius: 10px;
  ::placeholder {
    color: #aeaeae;
  }
`;
export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ff002e;
`;
