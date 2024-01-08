import Link from "next/link";
import React, { useState } from "react";
import { InputArea, InputTitle } from "../../styles/register/headcount.styles";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as S from "../../styles/register/contest-detail.styles";
import { IContestDetailForm } from "@component/interfaces/contestInterface";
import {
  ContentArea,
  ContentPaddingArea,
  FlexColumn,
  FlexColumnRowCenter,
  PaddingArea,
} from "@component/components/area/areaComponent";
import { useRecoilState } from "recoil";
import {
  contestContentAtom,
  contestPosterAtom,
  contestPosterList,
  contestPosterPreviewAtom,
} from "@component/atoms/contestAtom";
import Head from "next/head";
import { WebContainer } from "@component/styles/index.styles";
import Header from "@component/components/web/header/Header";
import {
  GlobalBoldText,
  GlobalGreyText,
} from "@component/styles/text/text.style";
import NextButton from "@component/components/web/button/NextButton";
import { cropModalOpenAtom } from "@component/atoms/modalAtom";
import CropModal from "@component/components/web/modal/CropModal";
import "react-quill/dist/quill.snow.css";

const ContestDetail = () => {
  const { register, handleSubmit, formState, watch, setValue } =
    useForm<IContestDetailForm>();

  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [previewImage, setPreviewImage] = useRecoilState(
    contestPosterPreviewAtom
  );
  const [posterImage, setPosterImage] = useRecoilState(contestPosterAtom);
  const [posterList, setPosterList] = useRecoilState(contestPosterList);
  const [cropModalOpen, setCropModalOpen] = useRecoilState(cropModalOpenAtom);
  const [contestContent, setContestContent] =
    useRecoilState(contestContentAtom);
  const [isOpen, setIsOpen] = useState(false);
  let ReactQuill =
    isOpen && typeof window === "object" ? require("react-quill") : () => {};

  const handleTextValue = (
    content: any,
    delta: any,
    source: any,
    editor: any
  ) => {
    setContestContent(editor.getContents());
  };
  // const imageList = watch("imageList");

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posterList]);

  const handleDeleteImage = (id: number) => {
    setPreviewImages(previewImages.filter((_, index) => index !== id));
    setPosterList(posterList.filter((_, index) => index !== id));
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  console.log(previewImage);
  console.log(posterImage);
  console.log(contestContent);

  return (
    <>
      <WebContainer>
        <Header />
        <PaddingArea>
          <FlexColumn style={{ marginBottom: "30px" }}>
            <GlobalBoldText>🎨 대회 포스터를 등록해주세요.</GlobalBoldText>
            <GlobalGreyText>
              선수들을 불러들일 매력적인 이미지를 업로드 해주세요!
            </GlobalGreyText>
          </FlexColumn>
          <ContentPaddingArea>
            <CropModal
              modalOpen={cropModalOpen}
              setModalOpen={setCropModalOpen}
            />
            <InputArea>
              <InputTitle>대회 포스터</InputTitle>
              <S.ImageInputArea>
                {previewImage ? (
                  <S.PreviewImage
                    src={previewImage}
                    onClick={() => {
                      setCropModalOpen(true);
                    }}
                  />
                ) : (
                  <S.ImageInputLabel
                    onClick={() => {
                      setCropModalOpen(true);
                    }}
                  >
                    <FlexColumnRowCenter>
                      <S.CameraIcon />
                      <GlobalGreyText>758 X 758px 권장</GlobalGreyText>
                    </FlexColumnRowCenter>
                  </S.ImageInputLabel>
                )}

                {/* <S.ImageInputLabel htmlFor="image">
                  <FlexColumnRowCenter>
                    <S.CameraIcon />
                    <GlobalGreyText>758 X 758px 권장</GlobalGreyText>
                  </FlexColumnRowCenter>
                </S.ImageInputLabel> */}
                {/* <S.ImageInput
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
                ))} */}
              </S.ImageInputArea>
            </InputArea>
            {/* <ReactQuill
              theme="snow"
              style={{ height: "400px", marginBottom: "80px" }}
              value={contestContent || ""}
              modules={modules}
              formats={formats}
              onChange={handleTextValue}
            /> */}
            <InputArea>
              <InputTitle>상세 정보</InputTitle>
              <S.LargeInput
                value={contestContent ? contestContent : ""}
                placeholder="대회 정보&#13;&#10;장소&#13;&#10;날짜&#13;&#10;식순&#13;&#10;대회 시간&#13;&#10;상금"
                onChange={(e) => setContestContent(e.currentTarget.value)}
              />
            </InputArea>
          </ContentPaddingArea>
        </PaddingArea>
        <FlexColumnRowCenter>
          <Link href="/register/rules-and-terms">
            <NextButton />
          </Link>
        </FlexColumnRowCenter>
      </WebContainer>
      {/* <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
      </PageWrapper> */}
    </>
  );
};

export default ContestDetail;
