import React, { useState } from "react";
import ReactModal from "react-modal";
import * as S from "../../../styles/register/rules-and-terms.styles";
import { useRouter } from "next/router";
import { Input, ShortInput } from "@component/components/input/inputComponent";
import { SubmitButton } from "@component/components/button/buttonComponent";
import Swal from "sweetalert2";

const RuleTermModal = ({
  modalOpen,
  setModalOpen,
  setRuleFileNames,
  setRuleFiles,
  setRuleUrlNames,
  setRuleUrls,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRuleFileNames: React.Dispatch<React.SetStateAction<string[]>>;
  setRuleFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setRuleUrlNames: React.Dispatch<React.SetStateAction<string[]>>;
  setRuleUrls: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [inputText, setInputText] = useState("");
  const [fileUpload, setFileUpload] = useState(true);
  const [willAdd, setWillAdd] = useState(false);
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState("");
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
    Swal.fire({
      icon: "success",
      text: "규정 및 약관이 추가되었습니다 !",
      showConfirmButton: false,
      timer: 1500,
    });
    setWillAdd(false);
    setInputText("");
    setFile(undefined);
    setModalOpen(false);
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
      Swal.fire({
        icon: "success",
        text: "규정 및 약관이 추가되었습니다 !",
        showConfirmButton: false,
        timer: 1500,
      });
      setWillAdd(false);
      setInputText("");
      setUrl("");
      setModalOpen(false);
    }
  };
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => {
        setModalOpen(false);
      }}
      style={customModalStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    >
      <S.UploadForm>
        <S.TitleArea>
          <S.Title>규정 혹은 약관 등록</S.Title>
          {/* <S.LoadRulesArea onClick={() => router.push("/register/load-rules")}>
            <S.LoadRulesText>규정 불러오기</S.LoadRulesText>
            <S.LoadRulesIcon />
          </S.LoadRulesArea> */}
        </S.TitleArea>
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
            URL 등록
          </S.UrlSelectButton>
        </S.SelectArea>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.currentTarget.value)}
          placeholder="내용을 입력해주세요."
          required
          style={{ marginBottom: "20px" }}
        />

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
    </ReactModal>
  );
};

export default RuleTermModal;

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "667px",
    height: "50%",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    alignItems: "center",
    // overflow: "auto",
  },
};
