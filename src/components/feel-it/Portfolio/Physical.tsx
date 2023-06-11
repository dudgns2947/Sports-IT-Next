import { sportsmanType } from "@component/libs/mock/users";
import { Title } from "@component/components/feel-it/Portfolio/Title";

export const Physical = ({ pageUserInfo, isUserMyself }: { pageUserInfo: sportsmanType; isUserMyself: boolean }) => {
  return (
    <>
      <div className="pb-6 border-b border-solid border-slate-200">
        <Title title="피지컬" isUserMyself={isUserMyself} />
        <div className="flex justify-between">
          <div className="">
            <div className="text-[.6em] text-slate-500">키</div>
            <div className="text-[.8em]">{`${pageUserInfo.physical.height}cm`}</div>
          </div>
          <div className="">
            <div className="text-[.6em] text-slate-500">체중</div>
            <div className="text-[.8em]">{`${pageUserInfo.physical.weight}kg`}</div>
          </div>
          <div className="">
            <div className="text-[.6em] text-slate-500">골격근량</div>
            <div className="text-[.8em]">{`${pageUserInfo.physical.skeletalMuscleMass}kg`}</div>
          </div>
          <div className="">
            <div className="text-[.6em] text-slate-500">체지방률</div>
            <div className="text-[.8em]">{`${pageUserInfo.physical.bodyFatPercentage}%`}</div>
          </div>
        </div>
      </div>
    </>
  );
};
