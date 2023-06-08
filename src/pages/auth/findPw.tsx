import React from "react";
import styled from "styled-components";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { baseApi } from "@component/api/utils/instance";
import { useState } from "react";

const FindIdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const FindIdForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30%;
`;

const FindIdInput = styled.input`
  width: 90%;
  height: 44px;
  border-radius: 14px;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 20px;
  color: #212121;
  &::placeholder {
    color: #bdbdbd;
  }
`;

const FindIdButton = styled.button`
  width: 90%;
  height: 44px;
  border-radius: 14px;
  background-color: #fd3446;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
  cursor: pointer;
`;

// 비밀번호 찾기 post요청
const PostFindPW = async (email: string, number: string) => {
  const response = await baseApi.post(
    `member/find/password`,
    {
      email: email,
      phone: number,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
  const isSuccess = response.data.success;
  if (isSuccess) {
    alert(response.data.message);
  } else {
    alert("잘못 입력하였습니다.");
  }
};

const FindId = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Add this line to prevent default form submission
    PostFindPW(email, number);
  };

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const handleNumberChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <FindIdContainer>
      <GoBackHeader title="비밀번호 찾기" />

      <FindIdForm onSubmit={handleSubmit}>
        <FindIdInput type="text" placeholder="이메일을 입력해주세요" onChange={handleEmailChanged}></FindIdInput>
        <FindIdInput type="text" placeholder="전화번호를 입력해주세요" onChange={handleNumberChanged}></FindIdInput>
        <FindIdButton type="submit">비밀번호 찾기</FindIdButton>
      </FindIdForm>
    </FindIdContainer>
  );
};

export default FindId;
