import React from "react";
import * as S from "./GoBackHeaderStyles";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const CloseIcon = styled(AiOutlineClose)`
  width: 27px;
  height: 25px;
  color: #212121;
`;

const CloseHeader = () => {
  const router = useRouter();
  return (
    <S.Header onClick={() => router.back()}>
      <S.IconArea>
        <CloseIcon />
      </S.IconArea>
    </S.Header>
  );
};

export default CloseHeader;
