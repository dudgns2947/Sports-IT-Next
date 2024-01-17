import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import z from "zod";
import Image from "next/image";
import GoBackHeader from "@component/components/header/GoBackHeader";

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
  const daumPostcodeRef = useRef<any>(null);
  const [isNaverApiLoading, setIsNaverApiLoading] = useState(false);

  const router = useRouter();
  const userId =
    typeof router.query.userId === "string"
      ? router.query.userId
      : typeof window === "object" &&
        new URLSearchParams(window.location.search).get("userId")
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
    const res = await fetch(`/api/naver_api?keyword=${address}`).then((r) =>
      r.json()
    );
    setIsNaverApiLoading(false);

    const dataForMap = geoCodingSchema.parse(res.data);
    if (!(dataForMap.addresses.length >= 1)) {
      retry();
      return;
    }

    const x = dataForMap.addresses.at(0)?.x;
    const y = dataForMap.addresses.at(0)?.y;
    const addressName = dataForMap.addresses.at(0)?.roadAddress;
    if (!x || !y || !addressName) {
      retry();
      return;
    }

    router.push({
      pathname: `/feelit/${userId}`,
      query: {
        longitute: parseFloat(x),
        latitude: parseFloat(y),
        addressName: addressName,
        newAddress: address,
      },
    });

    return res.data;
  };

  const { data, refetch, status, isLoading, isError } = useQuery(
    ["geolocation"],
    fetchGeoCoding,
    { enabled: false }
  );

  useEffect(() => {
    if (address !== "") {
      refetch();
    }
  }, [address, refetch]);

  useEffect(() => {
    if (daumWrapperRef.current) {
      initializeDaumPostcode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daumWrapperRef.current, initializeDaumPostcode]);

  function foldDaumPostcode() {
    if (daumWrapperRef.current) {
      daumWrapperRef.current.style.display = "none";
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src =
        "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.onload = initializeDaumPostcode;
      document.head.appendChild(script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function initializeDaumPostcode() {
    if (
      typeof window !== "undefined" &&
      window.daum &&
      window.daum.Postcode &&
      daumWrapperRef.current
    ) {
      if (!daumPostcodeRef.current) {
        daumPostcodeRef.current = new window.daum.Postcode({
          width: "100%",
          oncomplete: async function (data: any) {
            foldDaumPostcode();
            setIsNaverApiLoading(true);
            setAddress(data.roadAddress);
          },
        });
      }

      if (daumWrapperRef.current) {
        daumPostcodeRef.current.embed(daumWrapperRef.current);
        daumWrapperRef.current.style.display = "block";
      }
    }
  }

  return (
    <div className="w-[100vw]">
      <GoBackHeader title="장소 검색" />

      {isNaverApiLoading && (
        <Image
          alt="loading"
          priority
          width={300}
          height={300}
          src="/images/icon/loading.gif"
        ></Image>
      )}
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
