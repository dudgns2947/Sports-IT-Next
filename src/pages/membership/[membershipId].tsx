import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Component() {
  const router = useRouter();
  const [someValue, setSomeValue] = useState("SOME VALUE");

  useEffect(() => {
    setSomeValue(globalThis.location.href);
  }, []);

  return (
    <>
      <div className="w-screen  bg-black flex flex-col items-center text-white pb-32">
        <div className="w-full flex pt-5 pb-5 pr-5 pl-5">
          <div className="flex-[1]" onClick={(e) => router.back()}>
            <Image alt="prev_gary" src={"/prev_gray.png"}></Image>
          </div>
          <div className="flex-[9] flex justify-center" style={{ position: "relative", left: "-3vw" }}>
            멤버십 가입
          </div>
        </div>
        <div className="w-full pt-11 pl-5 pr-5">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-medium" style={{ fontFamily: "Pretendard" }}>
              단체 회원으로
            </div>
            <div className="text-3xl font-medium" style={{ fontFamily: "Pretendard" }}>
              가입하시겠습니까?
            </div>
          </div>
          <div className="mt-7 mb-7 text-[#AEAEAE]">다양한 혜택을 확인해보세요!</div>
          <div className="flex flex-col gap-2">
            <div className="w-full py-4 px-4 rounded-lg bg-[#212121] flex justify-between">
              <div className="">
                <div className="mt-1 mb-1">BENEFIT 1</div>
                <div className="text-xs font-light">
                  <div className="">멤버십 전용 카드</div>
                  <div className="">멤버십 전용 티셔츠 제공</div>
                  <div className="">멤버십 전용 뱃지 제공</div>
                </div>
              </div>
              <div className="">
                <Image alt="membership" src={"/join_membership/card.png"}></Image>
              </div>
            </div>
            <div className="w-full py-4 px-4 rounded-lg bg-[#212121] flex justify-between">
              <div className="">
                <div className="mt-1 mb-1">BENEFIT 2</div>
                <div className="text-xs font-light">
                  <div className="">대회 할인 헤택</div>
                  <div className="">프로부분 등록가능</div>
                  <div className="">한국팔씨름랭킹 등재 가능</div>
                </div>
              </div>
              <div className="">
                <Image alt="mebership_sale" src={"/join_membership/sale.png"}></Image>
              </div>
            </div>
            <div className="w-full py-4 px-4 rounded-lg bg-[#212121] flex justify-between">
              <div className="">
                <div className="mt-1 mb-1">BENEFIT 3</div>
                <div className="text-xs font-light">
                  <div className="">멤버 전용 커뮤니티 제공</div>
                  <div className="">맞춤형 혜택 및 공지사항</div>
                </div>
              </div>
              <div className="">
                <Image alt="membership_community" src={"/join_membership/community.png"}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="flex fixed bottom-0 left-0 w-screen h-[6em] z-[100] bg-[#FD3446] text-white place-items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="pb-8 border-b-4 border-solid border-slate-200 font-medium" onClick={(e) => alert("준비중입니다")}>
              멤버십 가입하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
