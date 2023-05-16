import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import { Form, InputArea, InputTitle } from "./headcount.styles";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as S from "./contest-detail.styles";
import { IContestDetailForm } from "@component/interfaces/contestInterface";

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
        <S.InputWrapper>
          <InputArea>
            <InputTitle>대회 포스터</InputTitle>
            <S.ImageInputArea>
              <S.ImageInputLabel htmlFor="image">
                <S.CameraIcon />
              </S.ImageInputLabel>
              <S.ImageInput
                {...register("imageList")}
                id="image"
                type="file"
                accept="image/*"
                multiple
              />
              {previewImages.map((image, id) => (
                <S.ImageInputLabel as="div" key={id}>
                  <S.PreviewImage src={image} alt={`${image}-${id}`} />
                  <S.DeleteIcon onClick={() => handleDeleteImage(id)} />
                </S.ImageInputLabel>
              ))}
            </S.ImageInputArea>
          </InputArea>
          <InputArea>
            <InputTitle>상세 정보</InputTitle>
            <S.LargeInput type="text" />
          </InputArea>
        </S.InputWrapper>
      </Form>
      <Link href="/register-success">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default ContestDetail;
