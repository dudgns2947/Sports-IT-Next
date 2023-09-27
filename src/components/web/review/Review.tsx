import Image from "next/image";
import React from "react";
import * as S from "./Review.style";
import {
  FlexColumn,
  FlexColumnCenter,
} from "@component/components/area/areaComponent";

const Review = ({
  title,
  content,
  profileImgUrl,
  name,
  subName,
}: {
  title: string;
  content: string;
  profileImgUrl?: string;
  name: string;
  subName: string;
}) => {
  return (
    <S.ReviewContainer>
      <FlexColumn>
        <S.ReviewTitle>{title}</S.ReviewTitle>
        <S.ReviewContent>{content}</S.ReviewContent>
      </FlexColumn>
      <S.ProfileContainer>
        <Image
          src="/images/example/sample_org.png"
          height={50}
          width={50}
          style={{
            borderRadius: "50%",
            marginRight: "20px",
          }}
          alt="profile-img"
        />
        <FlexColumnCenter>
          <S.Name>{name}</S.Name>
          <S.SubName>{subName}</S.SubName>
        </FlexColumnCenter>
      </S.ProfileContainer>
    </S.ReviewContainer>
  );
};

export default Review;
