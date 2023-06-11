import Image from "next/image";
import { formattingNumber } from "@component/libs/lib";
import { userType } from "@component/libs/mock/users";
import { useState } from "react";

export const UserHeader = ({ userInfo }: { userInfo: userType }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollowing = () => setIsFollowing((prev) => !prev);
  const cancelFollowing = () => {
    if (confirm("팔로우를 해제 하시겠습니까?")) toggleFollowing();
  };

  return (
    <>
      <div className="pr-4 pl-4 pt-1 pb-1 mt-5 mb-5 flex justify-center place-items-center">
        <div className="w-full flex flex-col ">
          <div className="w-full flex justify-between mb-5 gap-5">
            <img alt="" className="flex-[1] w-auto h-fit" src={"../images/icon/user_icon.png"}></img>
            <div className="flex-[4] flex flex-col gap-1">
              <div className="font-medium">{userInfo.name}</div>
              <div className="text-[.8em] font-light">{userInfo.description}</div>
              <div className="w-full flex gap-2">
                {!isFollowing && (
                  <button
                    className="flex-[1] flex justify-center items-center bg-red-500  text-white text-[.8em] leading-3 py-2 px-4 rounded"
                    onClick={toggleFollowing}
                  >
                    팔로우
                  </button>
                )}
                {isFollowing && (
                  <button
                    className="flex-[1] flex justify-center items-center bg-transparent  text-red-500 text-[.8em] leading-3 py-2 px-4 rounded border border-red-500"
                    onClick={cancelFollowing}
                  >
                    팔로잉
                  </button>
                )}
                <button className="flex-[1] bg-black  text-white text-[.8em] leading-3 py-2 px-4 rounded">메시지</button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-evenly ">
            <div className="flex flex-col justify-center items-center">
              <div className="font-light text-sm">팔로워</div>
              <div className="text-xl">{formattingNumber(userInfo.followers)}</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-light text-sm">팔로잉</div>
              <div className="text-xl">{formattingNumber(userInfo.following)}</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-light text-sm">멤버십</div>
              <div className="text-xl">{formattingNumber(userInfo.membership)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
