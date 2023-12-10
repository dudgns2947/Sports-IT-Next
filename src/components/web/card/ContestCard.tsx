import React from "react";
import { Tag, TagArea } from "../contest/Contest.style";
import { getDday } from "@component/utils/utils";
import { IContestInfo } from "@component/interfaces/contestInterface";
import * as S from "./ContestCard.style";

const ContestCard = ({ contest }: { contest: IContestInfo }) => {
  return (
    <S.ContestCardContainer>
      <TagArea>
        {getDday(Date.parse(contest?.endDate as string) / 1000) < 8 ? (
          <Tag is_premium={true}>마감임박</Tag>
        ) : null}
        {contest?.categories.map((category) => (
          <Tag key={category.category} is_premium={false}>
            {category.name}
          </Tag>
        ))}
      </TagArea>
      <S.ContestName>{contest?.name}</S.ContestName>
      <S.ContestHostName>{contest?.host.name}</S.ContestHostName>
      <S.SpaceBetweenAreaWithMargin>
        <S.TotalPrice>
          🏆 {(contest?.totalPrize as number) / 10000}만원
        </S.TotalPrice>
        <S.Dday>
          {`D-${getDday(Date.parse(contest?.endDate as string) / 1000)}`}
        </S.Dday>
      </S.SpaceBetweenAreaWithMargin>
      <S.SpaceBetweenArea>
        <S.ApplyButton>대회 신청하기</S.ApplyButton>
        <S.IconArea>
          <S.ShareIcon></S.ShareIcon>
        </S.IconArea>
        <S.IconArea>
          <S.HeartIcon></S.HeartIcon>
        </S.IconArea>
      </S.SpaceBetweenArea>
    </S.ContestCardContainer>
  );
};

export default ContestCard;
