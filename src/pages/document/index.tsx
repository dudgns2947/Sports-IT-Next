import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import GoBackHeaderWhite from "@component/components/header/GoBackHeaderWhite";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const PageWrapperBlack = styled(PageWrapper)`
  background-color: #212121;
  height: 100vh;
  width: 100vw;
`;

const TextArea = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 66px;
`;

const BoldTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px 0;
`;

const LightTextArea = styled(BoldTextArea)``;

const BoldTextWhite = styled.span`
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 2px;
`;

const LightTextGray = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: #aeaeae;
  margin-bottom: 2px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 10%;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #212121;
`;

const RedButton = styled.button`
  width: 89.3%;
  height: 50px;
  background: #fd3446;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 18px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

const LogoArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LogoImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 22.3px;
  width: 270.64px;
  height: 370.67px;
`;

const Index = () => {
  const router = useRouter();
  return (
    <PageWrapperBlack>
      <Seo title="공문서 발급" />
      <GoBackHeaderWhite title="공문서 발급" />
      <ContentArea>
        <TextArea>
          <BoldTextArea>
            <BoldTextWhite>쉽고, 간편하게</BoldTextWhite>
            <BoldTextWhite>공문서를 발급 받아보세요!</BoldTextWhite>
          </BoldTextArea>
          <LightTextArea>
            <LightTextGray>1분안에 공문서 발급받고</LightTextGray>
            <LightTextGray>자신만의 포트폴리오를 꾸며보세요.</LightTextGray>
          </LightTextArea>
        </TextArea>
        <LogoArea>
          <LogoImage src="/images/logo/documentLarge.png" />
        </LogoArea>
      </ContentArea>
      <ButtonArea>
        <RedButton onClick={() => router.push("/document/contest-select")}>공문서 발급하기</RedButton>
      </ButtonArea>
    </PageWrapperBlack>
  );
};

export default Index;
