import { TitleForOrganization } from "./TitleForOrganization";

export const ContestRules = ({ isUserMyself }: { isUserMyself: boolean }) => {
  return (
    <>
      <div className="pb-6 border-b border-solid border-slate-200  mr-3 ml-3">
        <div className="mr-3 ml-3 flex flex-col">
          <TitleForOrganization title="대회 규정" isUserMyself={isUserMyself} />
          <div className="text-xs w-full flex flex-col gap-3">
            <div className="w-full flex" style={{ justifyContent: "space-between" }} onClick={(e) => alert("준비중입니다")}>
              <div className="">심판 규정</div>
              <img alt="" src="../images/icon/right_arrow.png"></img>
              {/* <div className="">이미지</div> */}
            </div>
            <div className="w-full flex" style={{ justifyContent: "space-between" }} onClick={(e) => alert("준비중입니다")}>
              <div className="">선수 규정</div>
              <img alt="" src="../images/icon/right_arrow.png"></img>
            </div>
            <div className="w-full flex" style={{ justifyContent: "space-between" }} onClick={(e) => alert("준비중입니다")}>
              <div className="">선수복 규정</div>
              <img alt="" src="../images/icon/right_arrow.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
