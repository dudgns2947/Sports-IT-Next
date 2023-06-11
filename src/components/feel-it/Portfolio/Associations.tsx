import { sportsmanType } from "@component/libs/mock/users";
import { Title } from "@component/components/feel-it/Portfolio/Title";

export const Associations = ({ pageUserInfo, isUserMyself }: { pageUserInfo: sportsmanType; isUserMyself: boolean }) => {
  return (
    <>
      <div className="pb-6 border-b border-solid border-slate-200">
        <Title title="소속 단체" isUserMyself={isUserMyself} />
        <div className="flex flex-col">
          {pageUserInfo.affiliation.map((v) => {
            return (
              <div key={v.organizationId} className="flex items-center gap-3">
                <img alt="" src={v.iconUrl}></img>
                {/* <div className="">{v.iconUrl}</div> */}
                <div className="text-[.7em]">{v.name}</div>
                <div className="">
                  {v.supervisions.map((supervision) => {
                    return (
                      <button
                        key={supervision}
                        className="text-[.5em] text-[#747474] bg-[#F9F9FA] font-medium bg-transparent px-2 rounded-3xl"
                      >
                        {supervision}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
