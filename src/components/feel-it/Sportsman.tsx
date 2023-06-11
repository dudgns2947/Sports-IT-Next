import { everyTabType } from "@component/pages/feelit/[userId]";
import { Associations } from "./Portfolio/Associations";
import { Career } from "./Portfolio/Career";
import { Favorites } from "./Portfolio/Favorites";
import { HistoryOfCompetition } from "./Portfolio/HistoryOfCompetition";
import { Physical } from "./Portfolio/Physical";
import { Posts } from "./Tab/Posts";
import { TabItself } from "./TabItself";
import { UserHeader } from "./UserHeader";
import { sportsmanType } from "@component/libs/mock/users";
import { useEffect, useState } from "react";
import { tabForSportsman } from "@component/libs/static_data";

type argsType = { currentTab: everyTabType; pageUserInfo: sportsmanType; changeDefaultTab: (tabname: everyTabType) => void };

export const Sportsman = ({ currentTab, pageUserInfo, changeDefaultTab }: argsType) => {
  const [isUserMyself, setIsUserMyself] = useState(false);

  useEffect(() => {
    pageUserInfo.userId === "123457" && setIsUserMyself(true);
  }, [pageUserInfo]);

  return (
    <div className="">
      <UserHeader userInfo={pageUserInfo} />
      <TabItself tabs={tabForSportsman} currentTab={currentTab} changeDefaultTab={changeDefaultTab}></TabItself>
      {currentTab === "게시글" && <Posts />}
      {currentTab === "포트폴리오" && (
        <div className="flex flex-col text-xl mr-5 ml-5">
          <Physical pageUserInfo={pageUserInfo} isUserMyself={isUserMyself} />
          <Favorites pageUserInfo={pageUserInfo} isUserMyself={isUserMyself} />
          <Associations pageUserInfo={pageUserInfo} isUserMyself={isUserMyself} />
          <Career pageUserInfo={pageUserInfo} isUserMyself={isUserMyself} />
          <HistoryOfCompetition pageUserInfo={pageUserInfo} isUserMyself={isUserMyself} />
        </div>
      )}
    </div>
  );
};
