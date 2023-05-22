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
import AddButton from "@component/components/button/AddButton";

interface IRuleAndTerm {
  title: string;
  content: string;
}

const RulesAndTerms = () => {
  const [inputText, setInputText] = useState("");
  const [fileUpload, setFileUpload] = useState(true);
  const [willAdd, setWillAdd] = useState(false);
  const [rulesAndTerms, setRulesAndTerms] = useState<IRuleAndTerm[]>([]);
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>();

  const router = useRouter();

  const onClickFileSubmit = () => {
    if (file) {
      setRulesAndTerms((current) => [
        ...current,
        { title: inputText, content: file.name },
      ]);
      alert("규정 및 약관이 추가되었습니다 !");
      setWillAdd(false);
      setInputText("");
    }
  };

  const onClickUrlSubmit = () => {
    if (url.length !== 0) {
      setRulesAndTerms((current) => [
        ...current,
        { title: inputText, content: url },
      ]);
      setInputText("");
      setUrl("");
      alert("규정 및 약관이 추가되었습니다 !");
      setWillAdd(false);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  console.log(file);

  return (
    <PageWrapper>
      <Seo title="규정 및 약관등록" />
      <GoBackHeader title="대회 등록" />
      <S.ContentArea>
        {rulesAndTerms.length !== 0
          ? rulesAndTerms.map((item) => (
              <S.DataArea>
                <S.DataWrapper>
                  <S.DataTitle>{item.title}</S.DataTitle>
                  <S.DataContent>{item.content}</S.DataContent>
                </S.DataWrapper>
                <S.DeleteButton
                  onClick={() => {
                    setRulesAndTerms(
                      rulesAndTerms.filter(
                        (element) => element.title !== item.title
                      )
                    );
                  }}
                />
              </S.DataArea>
            ))
          : null}
        {willAdd ? (
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
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.currentTarget.value)}
              placeholder="내용을 입력해주세요."
              required
            />
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
                {file ? (
                  <S.UploadNoticeWrapper>
                    <S.UploadNotice>{file.name}</S.UploadNotice>
                  </S.UploadNoticeWrapper>
                ) : (
                  <S.UploadNoticeWrapper>
                    <S.UploadNotice>참가자에게 동의를 받기 위한</S.UploadNotice>
                    <S.UploadNotice>
                      규정 혹은 약관이 있다면 등록해주세요.
                    </S.UploadNotice>
                  </S.UploadNoticeWrapper>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <S.FileUploadButton htmlFor="file">
                    <S.PlusIcon />
                    <S.FileUploadText>파일 첨부</S.FileUploadText>
                  </S.FileUploadButton>
                  <SubmitButton onClick={onClickFileSubmit}>등록</SubmitButton>
                  <S.FileInput type="file" id="file" onChange={onFileChange} />
                </div>
              </S.FileUploadArea>
            ) : (
              <S.UrlUploadArea>
                <S.UploadNotice>참가자에게 동의를 받기 위한</S.UploadNotice>
                <S.UploadNotice>
                  규정 혹은 약관의 링크가 있다면 등록해주세요.
                </S.UploadNotice>
                <S.UrlInputArea>
                  <ShortInput
                    value={url}
                    placeholder="ex) www.google.com"
                    onChange={(e) => setUrl(e.currentTarget.value)}
                  />
                  <SubmitButton onClick={onClickUrlSubmit}>등록</SubmitButton>
                </S.UrlInputArea>
              </S.UrlUploadArea>
            )}
          </S.UploadForm>
        ) : (
          <AddButton
            setValue={setWillAdd}
            text="규정 / 약관 추가하기"
          ></AddButton>
        )}
      </S.ContentArea>
      <Link href="/register/sector-and-weight">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default RulesAndTerms;
