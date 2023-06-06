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

const dumyData = [
  {
    profileImage: "",
    playerName: "김영훈",
    sector: "프로",
    weight: "-70kg",
    uid: 11,
  },
  {
    profileImage: "",
    playerName: "신우현",
    sector: "노비스",
    weight: "-78kg",
    uid: 12,
  },
  {
    profileImage: "",
    playerName: "공명규",
    sector: "노비스",
    weight: "-86kg",
    uid: 14,
  },
  {
    profileImage: "",
    playerName: "이준수",
    sector: "하비",
    weight: "-63kg",
    uid: 15,
  },
];

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
        {dumyData
          ? dumyData
              .filter((dataList) => dataList.playerName.includes(keyword))
              .map((data) => (
                <PlayerProfile
                  key={data.uid}
                  profileImageUrl={data.profileImage}
                  playerName={data.playerName}
                  uid={data.uid}
                  sector={data.sector}
                  weight={data.weight}
                />
              ))
          : null}
      </ContentPaddingArea>
    </PageWrapper>
  );
};

export default PlayerSearch;
