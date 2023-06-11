import { sportsmanType } from "@component/libs/mock/users";
import { Title } from "@component/components/feel-it/Portfolio/Title";

export const Favorites = ({ pageUserInfo, isUserMyself }: { pageUserInfo: sportsmanType; isUserMyself: boolean }) => {
  return (
    <>
      <div className="pb-6 border-b border-solid border-slate-200">
        <Title title="관심 종목" isUserMyself={isUserMyself} />
        <div className="flex gap-2 flex-wrap">
          {pageUserInfo.favorites.map((favorite) => {
            return (
              <button
                key={favorite}
                className="text-xs font-medium bg-transparent text-black  py-2 px-3 border border-slate-300 rounded-3xl"
              >
                {favorite}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
