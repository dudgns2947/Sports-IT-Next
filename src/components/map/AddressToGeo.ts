import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Router, useRouter } from "next/router";
import z from "zod";

const geoCodingSchema = z.object({
  status: z.string(),
  meta: z.object({
    totalCount: z.number(),
    page: z.number().optional(),
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
export const fetchGeoCoding = async (addressName: string) => {
  console.log("addressName", addressName);
  const res = await fetch(`/api/naver_api?keyword=${"중부대로223번길 102"}`).then((r) => r.json());
  console.log("res", res);

  const dataForMap = geoCodingSchema.parse(res.data);

  const x = dataForMap.addresses.at(0)?.x;
  const y = dataForMap.addresses.at(0)?.y;

  const coordinate = {
    x: x,
    y: y,
  };

  return coordinate;
};
