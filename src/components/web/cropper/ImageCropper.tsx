import { read } from "fs";
import React, { useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import styled from "styled-components";
import { AiFillCamera } from "react-icons/ai";
import { FlexColumnRowCenter } from "@component/components/area/areaComponent";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import { useRecoilState } from "recoil";
import {
  contestPosterAtom,
  contestPosterPreviewAtom,
} from "@component/atoms/contestAtom";
import { cropModalOpenAtom } from "@component/atoms/modalAtom";

interface PropsType {
  onCrop: (image: string) => void;
  aspectRatio: number;
  children: React.ReactNode;
}

const ImageCropper = ({ children, aspectRatio, onCrop }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [previewImage, setPreviewImage] = useRecoilState(
    contestPosterPreviewAtom
  );
  const [posterImage, setPosterImage] = useRecoilState(contestPosterAtom);
  const [cropModalOpen, setCropModalOpen] = useRecoilState(cropModalOpenAtom);

  const handleChildrenClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };

  const dataUrlToFile = (url: string, fileName: string) => {
    const [mediaType, data] = url.split(",");

    const mime = mediaType.match(/:(.*?);/)?.[0];

    var n = data.length;

    const arr = new Uint8Array(n);

    while (n--) {
      arr[n] = data.charCodeAt(n);
    }

    return new File([arr], fileName, { type: mime });
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      console.log(cropperRef);
      onCrop(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
      setPosterImage(
        dataUrlToFile(
          cropperRef.current.cropper.getCroppedCanvas().toDataURL(),
          "image"
        )
      );

      setCropModalOpen(false);
    }
  };

  console.log(previewImage);
  console.log(posterImage);

  return (
    <div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          borderBottom: "1px solid #AEAEAE",
          paddingBottom: "10px",
          marginBottom: "10px",
        }}
      >
        이미지 자르기
      </div>
      <ImageInputArea>
        <ImageInput
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
        />
      </ImageInputArea>
      {!previewImage && <div onClick={handleChildrenClick}>{children}</div>}

      {previewImage && (
        <div className="container">
          <div className="backdrop"></div>
          <div className="modal">
            <div className="content-wrapper">
              <div className="content">
                <Cropper
                  ref={cropperRef}
                  aspectRatio={aspectRatio}
                  src={previewImage}
                  viewMode={1}
                  width={800}
                  height={500}
                  background={false}
                  responsive
                  autoCropArea={1}
                  checkOrientation={false}
                  guides
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CancelButton onClick={() => setPreviewImage(undefined)}>
                취소
              </CancelButton>
              <ApplyButton className="crop" onClick={getCropData}>
                적용하기
              </ApplyButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCropper;

const ImageInputArea = styled.div`
  display: flex;
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

const ImageInputLabel = styled.label`
  width: 300px;
  height: 300px;
  border: 1px solid #ededed;
  margin-right: 10px;
  position: relative;
`;

const CameraIcon = styled(AiFillCamera)`
  color: #d9d9d9;
  width: 75px;
  height: 75px;
`;

const ImageInput = styled.input``;

const CancelButton = styled.button`
  background-color: #e9ebed;
  color: #212121;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  margin: 20px 5px;
`;

const ApplyButton = styled(CancelButton)`
  background-color: #fd3446;
  color: #ffffff;
`;
