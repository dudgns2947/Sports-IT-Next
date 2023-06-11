type tabs = {
  name: string;
}[];
type userlinksType = {
  type: string;
  url: string;
  imgurl: string;
}[];

type tabForOrganizationType = "정보" | "게시글" | "프리미엄";
type tabForSportsmanType = "게시글" | "포트폴리오";
type everyTabType = tabForOrganizationType | tabForSportsmanType;
type args = {
  tabs: tabs;
  currentTab: everyTabType;
  changeDefaultTab: (tabname: everyTabType) => void;
};

export const TabItself = ({ tabs, currentTab, changeDefaultTab }: args) => {
  return (
    <>
      <div className="flex place-items-center">
        {tabs.map((tab) => {
          return (
            <div
              className={`flex-1 text-center text-sm ${currentTab === tab.name ? "font-medium" : "font-light"} pb-2 pt-2`}
              key={tab.name}
              style={{ borderBottom: currentTab === tab.name ? "2px solid black" : "2px solid #D6D6D6" }}
              data-tabname={tab.name}
              onClick={(e) => {
                changeDefaultTab(tab.name as everyTabType);
              }}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
    </>
  );
};
