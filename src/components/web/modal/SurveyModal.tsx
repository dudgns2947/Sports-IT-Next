import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import SelectBox from "../selectbox/SelectBox";
import {
  FlexColumnRowCenter,
  FlexEndRow,
  FlexRow,
  FlexRowSpaceBetween,
} from "@component/components/area/areaComponent";
import { Input, TextArea } from "@component/components/input/inputComponent";
import { BiRadioCircle } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";

const SurveyModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSubject, setIsSubject] = useState(true);
  const [multi, setMulti] = useState<boolean>(false);
  const [surveyTitle, setSurveyTitle] = useState<string>("");
  const [surveyContent, setSurveyContent] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [optionContent, setOptionContent] = useState<string>("");
  const [surveyImagePreview, setSurveyImagePreview] = useState<string>("");
  const [surveyImageFile, setSurveyImageFile] = useState<File>();

  console.log(options);
  console.log(surveyImagePreview);
  console.log(surveyImageFile);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files) return;

    setSurveyImageFile(files[0]);

    const reader = new FileReader();
    reader.onload = () => {
      setSurveyImagePreview(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
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
      <UploadForm>
        <TitleArea>
          <Title>설문 등록</Title>
        </TitleArea>
        <ContentArea>
          <FlexRowSpaceBetween style={{ marginBottom: "10px" }}>
            <SelectBox
              options={["주관식 질문", "객관식 질문"]}
              setValue={setIsSubject}
            />
            <FlexEndRow>
              {!isSubject && (
                <ToggleArea>
                  <ToggleText>중복여부</ToggleText>
                  <ToggleLabel>
                    <ToggleInput
                      active={multi}
                      checked={multi}
                      type="checkbox"
                      role="switch"
                      onChange={() => setMulti((current) => !current)}
                    />
                  </ToggleLabel>
                </ToggleArea>
              )}

              <ImageUploadArea>
                <ImageLabel htmlFor="image">
                  <ImageIcon />
                </ImageLabel>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </ImageUploadArea>
            </FlexEndRow>
          </FlexRowSpaceBetween>
          <Input
            style={{ width: "100%", marginBottom: "5px" }}
            placeholder="ex. 자기소개"
            value={surveyTitle}
            onChange={(e) => setSurveyTitle(e.target.value)}
          />
          {surveyImagePreview && (
            <div style={{ position: "relative" }}>
              <Image src={surveyImagePreview} alt="surveyImage" />
              <DeleteIcon
                onClick={() => {
                  setSurveyImageFile(undefined);
                  setSurveyImagePreview("");
                }}
              />
            </div>
          )}

          {isSubject ? (
            <TextArea
              style={{ width: "100%" }}
              placeholder="ex. 안녕하세요. 저는 대한 팔씨름 연맹 소속 신우현이라고 합니다."
              value={surveyContent}
              onChange={(e) => setSurveyContent(e.target.value)}
            ></TextArea>
          ) : (
            <>
              {options.map((option, index) => (
                <OptionArea key={index}>
                  <OptionNameWrapper>
                    <RadioIcon />
                    <OptionName>{option}</OptionName>
                  </OptionNameWrapper>

                  <CloseIcon
                    onClick={() =>
                      setOptions((current) =>
                        current.slice(0, index).concat(current.slice(index + 1))
                      )
                    }
                  />
                </OptionArea>
              ))}
              <OptionAddArea>
                <OptionInputArea>
                  <RadioIcon />
                  <OptionInput
                    value={optionContent}
                    onChange={(e) => setOptionContent(e.target.value)}
                    placeholder="옵션을 입력해주세요."
                  />
                </OptionInputArea>
                <OptionAddButton
                  onClick={() => {
                    setOptions((current) => {
                      const tempOptions = [...current];
                      tempOptions.push(optionContent);
                      return tempOptions;
                    });
                    setOptionContent("");
                  }}
                >
                  옵션 추가
                </OptionAddButton>
              </OptionAddArea>
            </>
          )}
        </ContentArea>
        <FlexColumnRowCenter style={{ marginTop: "10px" }}>
          <RegisterButton>저장</RegisterButton>
        </FlexColumnRowCenter>
      </UploadForm>
    </ReactModal>
  );
};

export default SurveyModal;

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
    height: "70%",
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

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e9ebed;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #212121;
`;
const UploadForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ToggleArea = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleText = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #aeaeae;
`;

const ToggleLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const ToggleInput = styled.input<{ active: boolean }>`
  appearance: none;
  position: relative;
  border: max(2px, 0.1em) solid gray;
  border-radius: 1.25em;
  margin-left: 3px;
  width: 2.25em;
  height: 1.25em;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: gray;
    transition: left 250ms linear;
    border-color: ${(props) => (props.active ? "#FD3446" : "gray")};
  }
  :checked {
    background-color: #fd3446;
    border-color: #fd3446;
  }
  :checked::before {
    background-color: white;
    left: 1em;
  }
`;

const SurveyTitle = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  background-color: #f5f6f7;
  color: #aeaeae;
  padding: 0 10px;
  font-size: 14px;
`;

const ContentArea = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #e9ebed;
`;

const RegisterButton = styled.button`
  background-color: #fd3446;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
`;

const OptionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  padding-right: 3px;
`;

const OptionAddArea = styled(OptionArea)`
  justify-content: space-between;
`;

const OptionInputArea = styled.div`
  display: flex;
`;

const OptionAddButton = styled.button`
  color: #747474;
  width: 60px;
  height: 20px;
  font-size: 12px;
  border-radius: 8px;
  padding: 2px;
`;

const RadioIcon = styled(BiRadioCircle)`
  width: 20px;
  height: 20px;
  color: #ededed;
  margin-right: 2px;
`;

const OptionInput = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 0 5px;
  color: #aeaeae;
`;

const OptionNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OptionName = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-left: 3px;
  color: #212121;
`;

const CloseIcon = styled(MdOutlineClose)`
  width: 20px;
  height: 20px;
  color: black;
`;

const ImageUploadArea = styled.div`
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const ImageIcon = styled(CiImageOn)`
  width: 30px;
  height: 30px;
  color: #747474;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 5px;
`;

const DeleteIcon = styled(AiFillCloseCircle)`
  height: 30px;
  width: 30px;
  color: #aeaeae;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;

const ImageLabel = styled.label`
  position: relative;
`;
