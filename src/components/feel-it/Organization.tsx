import { useEffect, useState } from "react";
import Link from "next/link";
import { Posts } from "./Tab/Posts";
import { TabItself } from "./TabItself";
import { UserHeader } from "./UserHeader";
import { Supervisions } from "./Supervisions";
import { InfoDetail } from "./InfoDetail";
import { ContestRules } from "./RuleOfContest";
import { LinksAboutUser } from "./LinksAboutUesr";
import { TabPremium } from "./Tab/Premium";
import { JoinMembershipBtn } from "./JoinMembershipBtn";
import { everyTabType } from "@component/pages/feelit/[userId]";
import { organizationType } from "@component/libs/mock/users";
import { Map } from "@component/components/feel-it/Map";
import { tabForOrganization } from "@component/libs/static_data";

// import { Associations } from "./Portfolio/Associations"
// import { Career } from "./Portfolio/Career"
// import { Favorites } from "./Portfolio/Favorites"
// import { HistoryOfCompetition } from "./Portfolio/HistoryOfCompetition"
// import { Physical } from "./Portfolio/Physical"

type argsType = { currentTab: everyTabType; pageUserInfo: organizationType; changeDefaultTab: (tabname: everyTabType) => void };

export const Organization = ({ currentTab, pageUserInfo, changeDefaultTab }: argsType) => {
  const [isUserMyself, setIsUserMyself] = useState(false);

  useEffect(() => {
    pageUserInfo.userId === "123456" && setIsUserMyself(true);
  }, []);

  return (
    <>
      <div className="">
        <UserHeader userInfo={pageUserInfo} />
        <TabItself tabs={tabForOrganization} currentTab={currentTab} changeDefaultTab={changeDefaultTab}></TabItself>
        {currentTab === "정보" && (
          <div className="">
            <Supervisions events={pageUserInfo.supervisions} isUserMyself={isUserMyself} />
            <InfoDetail pageUserInfo={pageUserInfo} isUserMyself={isUserMyself} />
            <ModifyLocation pageUserInfo={pageUserInfo} />
            <Map latitude={pageUserInfo.latitude} longitude={pageUserInfo.longitude} addressName={pageUserInfo.addressName} />
            <ContestRules isUserMyself={isUserMyself} />
            <LinksAboutUser pageUserInfo={pageUserInfo} isUserMyself={isUserMyself} />
          </div>
        )}
        {currentTab === "게시글" && <Posts />}
        {currentTab === "프리미엄" && <TabPremium />}
      </div>
      <JoinMembershipBtn userId={pageUserInfo.userId} />
    </>
  );
};

function ModifyLocation({ pageUserInfo }: { pageUserInfo: organizationType }) {
  return (
    <div className="flex justify-center">
      <Link
        href={{
          pathname: "/feelit/place",
          query: { userId: pageUserInfo.userId },
        }}
      >
        <button className="text-xs font-medium bg-transparent text-black  py-2 px-3 border border-slate-300 rounded-3xl mt-3">
          위치 수정하기
        </button>
      </Link>
    </div>
  );
}
