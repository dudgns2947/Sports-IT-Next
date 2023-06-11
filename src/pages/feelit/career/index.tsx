import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import z from "zod";
import GoBackHeader from "@component/components/header/GoBackHeader";
import useSWR from "swr";
import { baseApi } from "@component/api/utils/instance";

export const carrerType = z.array(z.object({ title: z.string(), duration: z.string() }));
export type careerType = z.infer<typeof carrerType>;

export default function Component() {
  const [careerArr, setcareerArr] = useState<careerType>([]);

  const router = useRouter();
  const userId = router.query.userId;

  useEffect(() => {
    const careerArr = typeof router.query.career === "string" ? JSON.parse(router.query.career) : null;
    const careerArrConfirmed = router.isReady && carrerType.parse(careerArr);
    careerArrConfirmed && setcareerArr(careerArrConfirmed);
  }, [router.query.career, router.isReady]);

  const deleteCareer: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const duration = e.currentTarget.dataset.duration;
    setcareerArr((prev) => prev.filter((v) => v.duration !== duration));
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-5 mb-32">
        <GoBackHeader title="나의 경력" />

        <button
          className="py-4 px-8 flex mx-5 mb-5 items-center gap-2 font-medium rounded-3xl border border-black"
          onClick={() => router.push({ pathname: "/feelit/career/add", query: { userId: userId, career: JSON.stringify(careerArr) } })}
        >
          <img src={"../images/icon/add.png"} alt="경력 추가" />
          <span className="">경력 추가</span>
        </button>
        {careerArr && (
          <div className="flex flex-col gap-13 mx-7 gap-5">
            {careerArr.map((career) => {
              return (
                <div className="flex justify-between items-center" key={career.duration}>
                  <div key={career.title} className="flex flex-col gap-2">
                    <div className="text-[1em]  leading-none">{career.title}</div>
                    <div className="text-[.9em] text-[#AEAEAE]">{career.duration}</div>
                  </div>
                  <div className="" data-duration={career.duration} onClick={deleteCareer}>
                    <img src={"../images/icon/x_btn_gray.png"} alt="삭제 버튼"></img>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="flex fixed bottom-0 left-0 w-screen h-[6em] z-[100] bg-black text-white place-items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="pb-8  font-semibold text-[1.1em]" onClick={(e) => alert("준비중입니다")}>
              저장하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
