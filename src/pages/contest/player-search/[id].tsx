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

const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 27px;
  margin-right: 14px;
`;

const SectorAndWeight = styled.div`
  display: flex;
`;

const PlayerName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #222428;
`;

const PlaySector = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #747474;
  margin-right: 4px;
`;

const PlayerWeight = styled(PlaySector)``;

const SearchArea = styled.div`
  display: flex;
  width: 100%;
`;

const SearchInput = styled.input``;

const PlayerSearch = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <PageWrapper>
      <Seo title="선수 검색" />
      <GoBackHeader title="선수 검색" />
      <ContentPaddingArea>
        {dumyData
          ? dumyData.map((data, index) => (
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
