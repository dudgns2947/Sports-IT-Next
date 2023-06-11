import { sportsmanType } from "@component/libs/mock/users";
import { Title } from "@component/components/feel-it/Portfolio/Title";

export const HistoryOfCompetition = ({ pageUserInfo, isUserMyself }: { pageUserInfo: sportsmanType; isUserMyself: boolean }) => {
  return (
    <>
      <div className="">
        <Title title="대회 연혁" isUserMyself={isUserMyself} />
        <div className="flex flex-col gap-2 flex-wrap">
          {pageUserInfo.competitionCareer.map((v) => {
            return (
              <div key={v.title} className="flex flex-col">
                <div className="text-[.6em] font-medium leading-none">{v.title}</div>
                <div className="text-[.6em] text-[#AEAEAE]">{v.duration}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
