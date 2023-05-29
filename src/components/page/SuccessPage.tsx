import React from "react";
import * as S from "./SuccessPage.styles";
import GoBackHeader from "../header/GoBackHeader";
import { useRouter } from "next/router";
import Seo from "../Seo";
import { SuccessPageProps } from "@component/interfaces/successPageInterface";
import GoBackHeaderWhite from "../header/GoBackHeaderWhite";

const SuccessPage = ({
  title,
  firstText,
  secondText,
  navText,
  url,
}: SuccessPageProps) => {
  const router = useRouter();
  return (
    <S.SignUpContainer>
      <GoBackHeaderWhite />
      <Seo title={`${title}`} />
      <S.TextArea>
        <S.Text>{`${firstText}`}</S.Text>
        <S.Text>{`${secondText}`}</S.Text>
      </S.TextArea>
      <S.ImageArea>
        <S.LogoImage
          width={244}
          height={211}
          alt="App logo black"
          src="/images/logo/AppLogo_black.png"
        ></S.LogoImage>
      </S.ImageArea>
      <S.ButtonArea>
        <S.NavButton onClick={() => router.push(`${url}`)}>
          {`${navText}`}
        </S.NavButton>
      </S.ButtonArea>
    </S.SignUpContainer>
  );
};

export default SuccessPage;
