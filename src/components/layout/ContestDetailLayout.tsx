import { IContestInfo } from "@component/interfaces/contestInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ContestDetailLayout = ({
  children,
  contest,
}: {
  children: React.ReactNode;
  contest?: IContestInfo;
}) => {
  console.log(contest);
  return (
    <>
      {contest ? (
        <ContestDetailContainer>
          <div>
            <ContestImage
              src={
                contest.posters[0]
                  ? contest?.posters[0].posterUrl
                  : "/images/contest/example3.png"
              }
              alt="posterImage"
              width={758}
              height={758}
            />
            <nav>
              <Link href={`/contest/detail/${contest.competitionId}`}>
                <span>상세정보</span>
              </Link>
              <Link href={`/contest/inquiry/${contest.competitionId}`}>
                <span>문의</span>
              </Link>
              <Link href={`/contest/review/${contest.competitionId}`}>
                <span>리뷰</span>
              </Link>
              <Link href={`/contest/notice/${contest.competitionId}`}>
                <span>대회공지</span>
              </Link>
            </nav>
            <div></div>
          </div>
          <div>{children}</div>
        </ContestDetailContainer>
      ) : null}
    </>
  );
};

export default ContestDetailLayout;

const ContestDetailContainer = styled.div`
  padding: 0 11%;
`;

const ContestImage = styled(Image)``;
