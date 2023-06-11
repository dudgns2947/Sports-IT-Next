import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import PlayerProfile from "@component/components/profile/PlayerProfile";
import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { participantsAtom } from "@component/atoms/contestAtom";
import index from "@component/pages/register";

const SearchArea = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const SearchInput = styled.input`
  background: #f9f9fa;
  border-radius: 12px;
  width: 100%;
  height: 40px;
  padding-left: 15px;
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  right: 10px;
  top: 8px;
  width: 27px;
  height: 27px;
  color: #747474;
  cursor: pointer;
`;

const PlayerSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [participants, setParticipants] = useRecoilState(participantsAtom);
  return (
    <PageWrapper>
      <Seo title="선수 검색" />
      <GoBackHeader title="선수 검색" />
      <ContentPaddingArea>
        <SearchArea>
          <SearchInput
            value={keyword}
            onChange={(e) => setKeyword(e.currentTarget.value)}
            placeholder="검색어를 입력해주세요."
          />
          <SearchIcon />
        </SearchArea>
        {participants
          ? participants
              .filter((dataList) => dataList.userName.includes(keyword))
              .map((data, index) => (
                <PlayerProfile
                  key={index}
                  profileImageUrl={data.profileImg}
                  playerName={data.userName}
                  uid={data.uid}
                  sector={data.sectorTitle}
                  weight={data.subSectorName}
                  phone={data.phone}
                />
              ))
          : null}
      </ContentPaddingArea>
    </PageWrapper>
  );
};

export default PlayerSearch;
