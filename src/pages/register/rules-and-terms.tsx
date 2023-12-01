import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import { Input, ShortInput } from "@component/components/input/inputComponent";
import * as S from "../../styles/register/rules-and-terms.styles";
import { useRouter } from "next/router";
import { SubmitButton } from "@component/components/button/buttonComponent";
import AddButton from "@component/components/button/AddButton";
import { useRecoilState } from "recoil";
import {
  contestRuleFileNames,
  contestRuleFiles,
  contestRuleUrlNames,
  contestRuleUrls,
} from "@component/atoms/contestAtom";
import Head from "next/head";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import {
  ContentPaddingArea,
  FlexColumn,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import { ruleTermModalOpenAtom } from "@component/atoms/modalAtom";
import RuleTermModal from "@component/components/web/modal/RuleTermModal";
import NextButton from "@component/components/web/button/NextButton";

const RulesAndTerms = () => {
  const [inputText, setInputText] = useState("");
  const [fileUpload, setFileUpload] = useState(true);
  const [willAdd, setWillAdd] = useState(false);
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File>();
  const [ruleFileNames, setRuleFileNames] =
    useRecoilState(contestRuleFileNames);
  const [ruleFiles, setRuleFiles] = useRecoilState(contestRuleFiles);
  const [ruleUrlNames, setRuleUrlNames] = useRecoilState(contestRuleUrlNames);
  const [ruleUrls, setRuleUrls] = useRecoilState(contestRuleUrls);
  const [ruleTermModalOpen, setRuleTermModalOpen] = useRecoilState(
    ruleTermModalOpenAtom
  );

  const router = useRouter();

  const onClickFileSubmit = () => {
    setRuleFileNames((current) => {
      const tempFileNames = [...current];
      tempFileNames.push(inputText);
      return tempFileNames;
    });
    setRuleFiles((curr) => {
      const tempFiles = [...curr];
      if (file) {
        tempFiles.push(file);
      }
      return tempFiles;
    });
    alert("규정 및 약관이 추가되었습니다 !");
    setWillAdd(false);
    setInputText("");
    setFile(undefined);
  };

  const onClickUrlSubmit = () => {
    if (url.length !== 0) {
      setRuleUrlNames((current) => {
        const tempUrlNames = [...current];
        tempUrlNames.push(inputText);
        return tempUrlNames;
      });

      setRuleUrls((curr) => {
        const tempUrls = [...curr];
        tempUrls.push(url);
        return tempUrls;
      });
      alert("규정 및 약관이 추가되었습니다 !");
      setWillAdd(false);
      setInputText("");
      setUrl("");
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    // setRuleFiles((current) => {
    //   const tempFiles = [...current];
    //   if (e.currentTarget.files) {
    //     tempFiles.push(e.currentTarget.files[0]);
    //   }
    //   return tempFiles;
    // });
  };

  console.log("ruleFileNames", ruleFileNames);
  console.log("ruleFiles", ruleFiles);

  console.log("ruleUrlNames", ruleUrlNames);
  console.log("ruleUrls", ruleUrls);

  return (
    <>
      <WebContainer>
        <Header />
        <PaddingArea style={{ marginBottom: "20px" }}>
          <FlexColumn>
            <GlobalBoldText>
              🔒 대회 규정 및 약관을 등록해 주세요.
            </GlobalBoldText>
            <GlobalGreyText>
              참가자에게 동의를 받기 위한 규정 혹은 약관이 있다면 등록해 주세요.
            </GlobalGreyText>
          </FlexColumn>
          <ContentPaddingArea>
            <S.RegisterArea onClick={() => setRuleTermModalOpen(true)}>
              + 규정 및 약관 등록
            </S.RegisterArea>
            <RuleTermModal
              modalOpen={ruleTermModalOpen}
              setModalOpen={setRuleTermModalOpen}
              setRuleFileNames={setRuleFileNames}
              setRuleFiles={setRuleFiles}
              setRuleUrlNames={setRuleUrlNames}
              setRuleUrls={setRuleUrls}
            />
            {ruleFiles.length !== 0
              ? ruleFiles.map((ruleFile, index) => (
                  <S.DataArea key={index}>
                    <S.DataWrapper>
                      <S.DataTitle>{ruleFileNames[index]}</S.DataTitle>
                      <S.DataContent>{ruleFile.name}</S.DataContent>
                    </S.DataWrapper>
                    <S.DeleteButton
                      onClick={() => {
                        setRuleFiles((current) =>
                          current
                            .slice(0, index)
                            .concat(current.slice(index + 1))
                        );

                        setRuleFileNames((curr) =>
                          curr.slice(0, index).concat(curr.slice(index + 1))
                        );
                      }}
                    />
                  </S.DataArea>
                ))
              : null}
            {ruleUrls.length !== 0
              ? ruleUrls.map((ruleUrl, index) => (
                  <S.DataArea key={index}>
                    <S.DataWrapper>
                      <S.DataTitle>{ruleUrlNames[index]}</S.DataTitle>
                      <S.DataContent>{ruleUrl}</S.DataContent>
                    </S.DataWrapper>
                    <S.DeleteButton
                      onClick={() => {
                        setRuleUrls((current) =>
                          current
                            .slice(0, index)
                            .concat(current.slice(index + 1))
                        );

                        setRuleUrlNames((curr) =>
                          curr.slice(0, index).concat(curr.slice(index + 1))
                        );
                      }}
                    />
                  </S.DataArea>
                ))
              : null}
            {/* {willAdd ? (
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
                        <S.UploadNotice>
                          참가자에게 동의를 받기 위한
                        </S.UploadNotice>
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
                      <SubmitButton onClick={onClickFileSubmit}>
                        등록
                      </SubmitButton>
                      <S.FileInput
                        type="file"
                        id="file"
                        onChange={onFileChange}
                      />
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
                      <SubmitButton onClick={onClickUrlSubmit}>
                        등록
                      </SubmitButton>
                    </S.UrlInputArea>
                  </S.UrlUploadArea>
                )}
              </S.UploadForm>
            ) : (
              <AddButton
                setValue={setWillAdd}
                text="규정 / 약관 추가하기"
              ></AddButton>
            )} */}
          </ContentPaddingArea>
        </PaddingArea>
        <FlexColumnRowCenter>
          <Link href="/register/sector-and-weight">
            <NextButton />
          </Link>
        </FlexColumnRowCenter>
      </WebContainer>
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapper>
        <Seo title="규정 및 약관등록" />
        <GoBackHeader title="대회 등록" />
        <S.ContentArea>
          {ruleFiles.length !== 0
            ? ruleFiles.map((ruleFile, index) => (
                <S.DataArea key={index}>
                  <S.DataWrapper>
                    <S.DataTitle>{ruleFileNames[index]}</S.DataTitle>
                    <S.DataContent>{ruleFile.name}</S.DataContent>
                  </S.DataWrapper>
                  <S.DeleteButton
                    onClick={() => {
                      setRuleFiles((current) =>
                        current.slice(0, index).concat(current.slice(index + 1))
                      );

                      setRuleFileNames((curr) =>
                        curr.slice(0, index).concat(curr.slice(index + 1))
                      );
                    }}
                  />
                </S.DataArea>
              ))
            : null}
          {ruleUrls.length !== 0
            ? ruleUrls.map((ruleUrl, index) => (
                <S.DataArea key={index}>
                  <S.DataWrapper>
                    <S.DataTitle>{ruleUrlNames[index]}</S.DataTitle>
                    <S.DataContent>{ruleUrl}</S.DataContent>
                  </S.DataWrapper>
                  <S.DeleteButton
                    onClick={() => {
                      setRuleUrls((current) =>
                        current.slice(0, index).concat(current.slice(index + 1))
                      );

                      setRuleUrlNames((curr) =>
                        curr.slice(0, index).concat(curr.slice(index + 1))
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
                      <S.UploadNotice>
                        참가자에게 동의를 받기 위한
                      </S.UploadNotice>
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
                    <SubmitButton onClick={onClickFileSubmit}>
                      등록
                    </SubmitButton>
                    <S.FileInput
                      type="file"
                      id="file"
                      onChange={onFileChange}
                    />
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
      </PageWrapper> */}
    </>
  );
};

export default RulesAndTerms;
