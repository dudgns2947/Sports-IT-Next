import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import { Input, ShortInput } from "@component/components/input/inputComponent";
import * as S from "./rules-and-terms.styles";
import { useRouter } from "next/router";
import { SubmitButton } from "@component/components/button/buttonComponent";

const RulesAndTerms = () => {
  const [inputText, setInputText] = useState("");
  const [fileUpload, setFileUpload] = useState(true);

  const router = useRouter();
  return (
    <PageWrapper>
      <Seo title="규정 및 약관등록" />
      <GoBackHeader title="대회 등록" />
      <S.ContentArea>
        <S.UploadForm>
          <S.TitleArea>
            <S.Title>규정 혹은 약관 이름</S.Title>
            <S.LoadRulesArea
              onClick={() => router.push("/register/load-rules")}
            >
              <S.LoadRulesText>규정 불러오기</S.LoadRulesText>
              <S.LoadRulesIcon />
            </S.LoadRulesArea>
          </S.TitleArea>
          <Input placeholder="내용을 입력해주세요." />
          <S.SelectArea>
            <S.FileSelectButton
              onClick={() => setFileUpload(true)}
              active={fileUpload}
            >
              파일 업로드
            </S.FileSelectButton>
            <S.UrlSelectButton
              onClick={() => setFileUpload(false)}
              active={!fileUpload}
            >
              URL
            </S.UrlSelectButton>
          </S.SelectArea>
          {fileUpload ? (
            <S.FileUploadArea>
              <S.UploadNotice>참가자에게 동의를 받기 위한</S.UploadNotice>
              <S.UploadNotice>
                규정 혹은 약관이 있다면 등록해주세요.
              </S.UploadNotice>
              <S.FileUploadButton>
                <S.PlusIcon />
                <S.FileUploadText>파일 첨부</S.FileUploadText>
              </S.FileUploadButton>
            </S.FileUploadArea>
          ) : (
            <S.UrlUploadArea>
              <S.UploadNotice>참가자에게 동의를 받기 위한</S.UploadNotice>
              <S.UploadNotice>
                규정 혹은 약관의 링크가 있다면 등록해주세요.
              </S.UploadNotice>
              <S.UrlInputArea>
                <ShortInput />
                <SubmitButton>등록</SubmitButton>
              </S.UrlInputArea>
            </S.UrlUploadArea>
          )}
        </S.UploadForm>
      </S.ContentArea>
      <Link href="/register/sector-and-weight">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default RulesAndTerms;
