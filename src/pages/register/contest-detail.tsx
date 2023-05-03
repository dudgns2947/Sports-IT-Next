import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { use, useState } from "react";
import { Form, Input, InputArea, InputTitle } from "./headcount.styles";
import styled from "styled-components";
import { AiFillCamera, AiFillCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const LargeInput = styled(Input)`
  height: 400px;
`;

const InputWrapper = styled.div`
  padding: 10px 20px;
`;

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
  width: 72px;
  height: 72px;
  border: 1px solid #ededed;
  margin-right: 10px;
  position: relative;
`;

const ImageInput = styled.input``;

const PreviewImage = styled.img`
  width: 72px;
  height: 72px;
`;

const CameraIcon = styled(AiFillCamera)`
  color: #d9d9d9;
  width: 25px;
  height: 20px;
`;

const DeleteIcon = styled(AiFillCloseCircle)`
  height: 14px;
  width: 14px;
  color: gba(34, 36, 40, 0.5);
  position: absolute;
  right: 4px;
  top: 4px;
`;

interface IContestDetailForm {
  imageList: FileList;
  detail: string;
}

const ContestDetail = () => {
  const { register, handleSubmit, formState, watch, setValue } =
    useForm<IContestDetailForm>();

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const imageList = watch("imageList");

  useEffect(() => {
    if (imageList && imageList.length > 0) {
      let imageUrlList = [...previewImages];

      for (let i = 0; i < imageList.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageList[i]);
        imageUrlList.push(currentImageUrl);
      }

      if (imageUrlList.length > 3) {
        imageUrlList = imageUrlList.slice(0, 3);
      }

      setPreviewImages(imageUrlList);
    }
  }, [imageList]);

  const handleDeleteImage = (id: number) => {
    setPreviewImages(previewImages.filter((_, index) => index !== id));
  };

  return (
    <PageWrapper>
      <Seo title="대회 상세정보 입력" />
      <GoBackHeader title="대회 등록" />
      <Form>
        <InputWrapper>
          <InputArea>
            <InputTitle>대회 포스터</InputTitle>
            <ImageInputArea>
              <ImageInputLabel htmlFor="image">
                <CameraIcon />
              </ImageInputLabel>
              <ImageInput
                {...register("imageList")}
                id="image"
                type="file"
                accept="image/*"
                multiple
              />
              {previewImages.map((image, id) => (
                <ImageInputLabel as="div" key={id}>
                  <PreviewImage src={image} alt={`${image}-${id}`} />
                  <DeleteIcon onClick={() => handleDeleteImage(id)} />
                </ImageInputLabel>
              ))}
            </ImageInputArea>
          </InputArea>
          <InputArea>
            <InputTitle>상세 정보</InputTitle>
            <LargeInput type="text" />
          </InputArea>
        </InputWrapper>
      </Form>
      <Link href="/">
        <NavBar active={true} />
      </Link>
    </PageWrapper>
  );
};

export default ContestDetail;
