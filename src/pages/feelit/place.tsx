import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import z from "zod";
import Image from "next/image";

const geoCodingSchema = z.object({
  status: z.string(),
  meta: z.object({
    totalCount: z.number(),
    page: z.number(),
    count: z.number(),
  }),
  addresses: z.array(
    z.object({
      roadAddress: z.string(),
      jibunAddress: z.string(),
      englishAddress: z.string(),
      addressElements: z.array(
        z.object({
          types: z.array(z.string()),
          longName: z.string(),
          shortName: z.string(),
          code: z.string(),
        })
      ),
      x: z.string(),
      y: z.string(),
      distance: z.number(),
    })
  ),
  errorMessage: z.string(),
});
type geoCodingSchemaType = z.infer<typeof geoCodingSchema>;

declare global {
  interface Window {
    daum: any;
  }
}

const Component: React.FC = () => {
  const [address, setAddress] = useState("");
  const daumWrapperRef = useRef<HTMLDivElement>(null);
  const [isNaverApiLoading, setIsNaverApiLoading] = useState(false);

  const router = useRouter();
  const userId =
    typeof router.query.userId === "string"
      ? router.query.userId
      : typeof window === "object" && new URLSearchParams(window.location.search).get("userId")
      ? new URLSearchParams(window.location.search).get("userId")
      : null;

  if (typeof window === "object" && !userId) {
    alert("유저 ID를 찾을 수 없습니다");
  }

  const retry = () => {
    alert("다시 시도해주세요");
    window.location.reload();
  };

  const fetchGeoCoding = async () => {
    const res = await fetch(`../../api/naver_api?keyword=${address}`).then((r) => r.json());
    setIsNaverApiLoading(false);

    const dataForMap = geoCodingSchema.parse(res.data);
    if (!(dataForMap.addresses.length >= 1)) {
      retry();
      return;
    }

    const x = dataForMap.addresses.at(0)?.x;
    const y = dataForMap.addresses.at(0)?.y;
    if (!x || !y) {
      retry();
      return;
    }

    router.push({
      pathname: `/feel-it/${userId}`,
      query: {
        longitute: parseFloat(x),
        latitude: parseFloat(y),
        newAddress: address,
      },
    });

    return res.data;
  };

  const { data, refetch, status, isLoading, isError } = useQuery(["geolocation"], fetchGeoCoding, { enabled: false });

  useEffect(() => {
    if (address !== "") {
      refetch();
    }
  }, [address, refetch]);

  useEffect(() => {
    if (daumWrapperRef.current) {
      initializeDaumPostcode();
    }
  }, [daumWrapperRef.current, initializeDaumPostcode]);

  function foldDaumPostcode() {
    if (daumWrapperRef.current) {
      daumWrapperRef.current.style.display = "none";
    }
  }

  function initializeDaumPostcode() {
    new window.daum.Postcode({
      width: "100%",
      oncomplete: async function (data: any) {
        foldDaumPostcode();
        setIsNaverApiLoading(true);
        setAddress(data.roadAddress);
      },
    }).embed(daumWrapperRef.current);

    if (daumWrapperRef.current) {
      daumWrapperRef.current.style.display = "block";
    }
  }

  return (
    <div className="w-[100vw]">
      <div className="w-full flex pt-5 pb-5 pr-5 pl-5">
        <div
          className="flex-[1]"
          onClick={(e) => {
            foldDaumPostcode();
            router.back();
          }}
        >
          <Image alt="" src="@pubilc/images/icon/x_btn.png"></Image>
        </div>
        <div className="flex-[9] text-lg flex justify-center" style={{ position: "relative", left: "-5vw" }}>
          장소 검색
        </div>
      </div>
      {isNaverApiLoading && <Image alt="loading" src="@pubilc/images/icon/loading.gif"></Image>}
      <div
        id="wrap"
        ref={daumWrapperRef}
        style={{
          display: "none",
          border: "1px solid",
          width: "100%",
          height: "",
          margin: "5px 0",
          position: "relative",
          overflowY: "hidden",
        }}
      ></div>
    </div>
  );
};

export default Component;
