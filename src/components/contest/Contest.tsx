import React from "react";
import * as S from "./Contest.styles";
import { IHost } from "@component/interfaces/contestInterface";
import { useRouter } from "next/router";

interface IContest {
  posterImageUrl: string;
  competitionId: number;
  competitionType: string;
  name: string;
  host: IHost;
  recruitingEnd: string;
  showImage?: boolean;
}

const Contest = ({
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
    <S.Contest onClick={() => router.push(`/contest/${competitionId}`)}>
      {showImage === false ? null : (
        <S.ContestImage
          src={posterImageUrl ? posterImageUrl : "/images/logo/AppLogo.png"}
        />
      )}

      <S.ContestInfo>
        <S.ContestTagArea>
          {competitionType === "FREE" ? null : (
            <S.PremiumTag>프리미엄</S.PremiumTag>
          )}
          <S.Tag>스포츠</S.Tag>
          <S.Tag>대회</S.Tag>
        </S.ContestTagArea>
        <S.ContestTitle>{name}</S.ContestTitle>
        <S.ContestHostArea>
          <S.ContestHostName>{host ? host.name : ""}</S.ContestHostName>
          <S.PremiumLogo src="/images/logo/premiumLogo.png" />
        </S.ContestHostArea>
        <S.ContestDday>
          {getDday(Date.parse(recruitingEnd) / 1000)}
        </S.ContestDday>
      </S.ContestInfo>
    </S.Contest>
  );
};

export default Contest;
