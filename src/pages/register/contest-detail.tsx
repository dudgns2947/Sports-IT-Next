import Seo from "@component/components/Seo";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import Link from "next/link";
import React, { useState } from "react";
import { Form, InputArea, InputTitle } from "../../styles/register/headcount.styles";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as S from "../../styles/register/contest-detail.styles";
import { IContestDetailForm } from "@component/interfaces/contestInterface";
import { ContentArea, ContentPaddingArea } from "@component/components/area/areaComponent";
import { useRecoilState } from "recoil";
import { contestContentAtom, contestPosterList } from "@component/atoms/contestAtom";

const ContestDetail = () => {
  const { register, handleSubmit, formState, watch, setValue } = useForm<IContestDetailForm>();

  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [posterList, setPosterList] = useRecoilState(contestPosterList);
  const imageList = watch("imageList");

  const [contestContent, setContestContent] = useRecoilState(contestContentAtom);

  useEffect(() => {
    if (posterList && posterList.length > 0) {
      let imageUrlList = [];

      for (let i = 0; i < posterList.length; i++) {
        const currentImageUrl = URL.createObjectURL(posterList[i]);
        imageUrlList.push(currentImageUrl);
      }

      if (imageUrlList.length > 3) {
        imageUrlList = imageUrlList.slice(0, 3);
      }

      setPreviewImages(imageUrlList);
      console.log(previewImages);
    }
  }, [posterList]);

  const handleDeleteImage = (id: number) => {
    setPreviewImages(previewImages.filter((_, index) => index !== id));
    setPosterList(posterList.filter((_, index) => index !== id));
  };

  console.log(posterList);
  console.log(contestContent);

  return (
    <PageWrapper>
      <Seo title="대회 상세정보 입력" />
      <GoBackHeader title="대회 등록" />
      <ContentPaddingArea>
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
              onChange={(e) => {
                setPosterList((current) => {
                  const tempList = [...current];
                  if (e.currentTarget.files) {
                    tempList.push(e.currentTarget.files[0]);
                  }
                  return tempList;
                });
              }}
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
          <S.LargeInput
            value={contestContent ? contestContent : ""}
            placeholder="대회 정보&#13;&#10;장소&#13;&#10;날짜&#13;&#10;식순&#13;&#10;대회 시간&#13;&#10;상금"
            onChange={(e) => setContestContent(e.currentTarget.value)}
          />
        </InputArea>
      </ContentPaddingArea>
      <Link href="/register/rules-and-terms">
        <NavBar navText="다음" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default ContestDetail;
