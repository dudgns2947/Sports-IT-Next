import { sportsmanType } from "@component/libs/mock/users";
import { Title } from "@component/components/feel-it/Portfolio/Title";
import { useRouter } from "next/router";

export const Career = ({ pageUserInfo, isUserMyself }: { pageUserInfo: sportsmanType; isUserMyself: boolean }) => {
  const router = useRouter();
  const gotoCarrerPage = () =>
    router.push({ pathname: "/feelit/career", query: { userId: pageUserInfo.userId, career: JSON.stringify(pageUserInfo.career) } });

  return (
    <>
      <div className="pb-6 border-b border-solid border-slate-200">
        {/* <Title title="나의 경력" isUserMyself={isUserMyself} /> */}
        <div className="header flex pt-5 pb-2 justify-between">
          <div className="text-[.7em] font-medium">{"나의 경력"}</div>
          {isUserMyself && (
            <div className="text-[.7em] text-[#4C8BFF]" onClick={gotoCarrerPage}>
              수정
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          {pageUserInfo.career.map((v) => {
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
