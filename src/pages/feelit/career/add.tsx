import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import z from "zod";
import { careerType } from ".";
import GoBackHeader from "@component/components/header/GoBackHeader";

const carrerType = z.array(z.object({ title: z.string(), duration: z.string() }));

export default function Component() {
  const router = useRouter();
  const [careerArr, setcareerArr] = useState<careerType>([]);
  const [title, setTitle] = useState("");
  const [startYear, setStartYear] = useState<number | undefined>();
  const [endYear, setendYear] = useState<number | undefined>();
  const [isWorkOnProgress, setisWorkOnProgress] = useState<boolean>(false);

  const userId = router.query.userId;

  useEffect(() => {
    const careerArr = typeof router.query.career === "string" ? JSON.parse(router.query.career) : null;
    const careerArrConfirmed = router.isReady && carrerType.parse(careerArr);
    careerArrConfirmed && setcareerArr(careerArrConfirmed);
  }, [router.query.career, router.isReady]);

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-5 mb-32">
        <GoBackHeader title="나의 경력" />
        <div className="flex flex-col mx-5">
          <div className="text-[1.1em] font-medium">경력</div>
          <input
            className="border-2 border-[#EDEDED] rounded-lg py-4 px-4 my-4 bg-[#EDEDED]"
            placeholder="입력 해주세요."
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <div className="">
                    </div> */}
        </div>
        <div className="w-full flex gap-2">
          <div className="flex-[1] flex flex-col ml-5">
            <div className="text-[1.1em] font-medium">시작연도</div>
            <div className="w-full flex items-center">
              <input
                type="number"
                min={"1900"}
                max={"2100"}
                className="w-[70%] border-2 mr-2 border-[#EDEDED] rounded-lg py-4 px-4 my-4 bg-[#EDEDED]"
                placeholder=""
                onChange={(e) => setStartYear(parseInt(e.target.value))}
              />
              <div className="" style={{ width: "max-content" }}>
                부터
              </div>
            </div>
          </div>
          <div className="flex-[1] flex flex-col mr-5">
            <div className="text-[1.1em] font-medium">종료연도</div>
            <div className="w-full flex items-center">
              <input
                type="number"
                min={"1900"}
                max={"2100"}
                className="w-[70%] border-2 mr-2 border-[#EDEDED] rounded-lg py-4 px-4 my-4 bg-[#EDEDED]"
                placeholder=""
                onChange={(e) => setendYear(parseInt(e.target.value))}
              />
              <div className="" style={{ width: "auto" }}>
                까지
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mx-5">
          <label className="container flex just items-center">
            <div className="text-[.7em] relative top-[0em]">현재 진행중</div>
            <input type="checkbox" checked={isWorkOnProgress} onChange={(e) => setisWorkOnProgress((prev) => !prev)} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="flex fixed bottom-0 left-0 w-screen h-[6em] z-[100] bg-black text-white place-items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="pb-8  font-semibold text-[1.1em]"
              onClick={(e) => {
                if (title.length === 0) {
                  alert("경력을 입력해 주세요");
                  return;
                }
                if (startYear == null) {
                  alert("시작년도를 입력해 주세요");
                  return;
                }
                if (isWorkOnProgress === false && endYear == null) {
                  alert("종료년도를 입력해 주세요");
                  return;
                }
                if (endYear && startYear > endYear) {
                  alert("종료년도는 시작년도 이상의 년도어야 합니다");
                  return;
                }
                careerArr.push({ title, duration: `${startYear} ~ ${isWorkOnProgress ? "" : endYear}`.trim() });
                router.push({ pathname: "/feel-it/career", query: { userId, career: JSON.stringify(careerArr) } });
              }}
            >
              저장하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
