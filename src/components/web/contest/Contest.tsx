import { IContest } from "@component/interfaces/contest/contestInterface";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import * as S from "./Contest.style";

const ContestCard = ({
  posterImageUrl,
  competitionId,
  competitionType,
  name,
  host,
  recruitingEnd,
  showImage,
}: IContest) => {
  const getDday = (timestamp: number) => {
    // 주어진 타임스탬프 값을 Date 객체로 변환
    const date = new Date(timestamp * 1000);
    // 현재 날짜와 시간을 나타내는 Date 객체 생성
    const today = new Date();
    // 두 날짜 간의 차이 계산
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return `D-${diffDays}`;
  };

  const router = useRouter();

  return (
    <S.ContestContainer
      onClick={() => router.push(`/contest/${competitionId}`)}
    >
      {showImage === false ? null : (
        <Image
          src={"/images/contest/example2.png"}
          width={300}
          height={300}
          alt="poster-image"
          style={{
            borderRadius: "10px",
            width: "300px",
            height: "300px",
            marginBottom: "15px",
          }}
          priority
        />
      )}

      <S.TagArea>
        {competitionType === "FREE" ? null : (
          <S.Tag is_premium={true}>프리미엄</S.Tag>
        )}
        <S.Tag is_premium={false}>팔씨름</S.Tag>
        <S.Tag is_premium={false}>씨름</S.Tag>
      </S.TagArea>
      <S.ContestName>{name}</S.ContestName>
      <S.ContestHost>{host ? host.name : ""}</S.ContestHost>
      <S.ContestDday>{getDday(Date.parse(recruitingEnd) / 1000)}</S.ContestDday>
    </S.ContestContainer>
  );
};

export default ContestCard;
