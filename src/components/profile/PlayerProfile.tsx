import { playerListAtom, rankIndexAtom } from "@component/atoms/contestAtom";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
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

interface PlayerProfileProps {
  profileImageUrl: string;
  playerName: string;
  uid: number;
  sector: string;
  weight: string;
}

const PlayerProfile = ({
  profileImageUrl,
  playerName,
  uid,
  sector,
  weight,
}: PlayerProfileProps) => {
  const [playerList, setPlayerList] = useRecoilState(playerListAtom);
  const [rankIndex, setRankIndex] = useRecoilState(rankIndexAtom);
  const router = useRouter();
  return (
    <PlayerWrapper
      onClick={() => {
        console.log("index", rankIndex);
        setPlayerList((current) => {
          const tempList = [...current];
          tempList[rankIndex] = { playerName: playerName, playerId: uid };
          return tempList;
        });
        router.back();
      }}
    >
      <PlayerImage src={"/images/example/Post1.png"} />
      <PlayerInfo>
        <PlayerName>{playerName}</PlayerName>
        <SectorAndWeight>
          <PlaySector>{sector}</PlaySector>
          <PlayerWeight>{weight}</PlayerWeight>
        </SectorAndWeight>
      </PlayerInfo>
    </PlayerWrapper>
  );
};

export default PlayerProfile;
