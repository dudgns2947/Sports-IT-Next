import React, { useState } from "react";
import ReactModal from "react-modal";
import ImageCropper from "../cropper/ImageCropper";
import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";
import { GlobalGreyText } from "@component/styles/text/text.style";
import { FlexColumnRowCenter } from "@component/components/area/areaComponent";
import { useRecoilState } from "recoil";
import {
  contestPosterAtom,
  contestPosterPreviewAtom,
} from "@component/atoms/contestAtom";

const CropModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [previewImage, setPreviewImage] = useRecoilState(
    contestPosterPreviewAtom
  );

  const handleUploadImage = (image: string) => setPreviewImage(image);
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
      {/* <img src={previewImage as string} alt="" /> */}
      <ImageCropper aspectRatio={1 / 1} onCrop={handleUploadImage}>
        <ImageButton>
          <FlexColumnRowCenter>
            <CameraIcon />
            <GlobalGreyText>758 X 758px 권장</GlobalGreyText>
          </FlexColumnRowCenter>
        </ImageButton>
      </ImageCropper>
      {!previewImage && (
        <CancelButton onClick={() => setModalOpen(false)}>닫기</CancelButton>
      )}
    </ReactModal>
  );
};

export default CropModal;

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
    width: "400px",
    height: "90%",
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

const ImageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
  vertical-align: middle;
  cursor: pointer;
  width: 350px;
  height: 350px;
  border: 1px solid #ededed;
  position: relative;
`;

const CameraIcon = styled(AiFillCamera)`
  color: #d9d9d9;
  width: 75px;
  height: 75px;
`;

const CancelButton = styled.button`
  background-color: #e9ebed;
  color: #212121;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  margin: 20px 5px;
`;
