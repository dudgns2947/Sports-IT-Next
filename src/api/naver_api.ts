import { NextApiRequest, NextApiResponse } from "next";

type geoCodingApiType = {
  errorMessage: string;
  status: string;
  meta: { totalCount: number; page: number; count: number };
  addresses: [
    {
      roadAddress: string;
      jibunAddress: string;
      englishAddress: string;
      addressElements: [];
      x: string;
      y: string;
      distance: string;
    }
  ];
};

const naverAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const keyword = req.query.keyword;

  try {
    const naverRes = await fetch(`https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${keyword}`, {
      method: "GET",
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID!,
        "X-NCP-APIGW-API-KEY": process.env.NAVER_MAP_SECRET_KEY!,
      },
    })
      .then((r) => r.json())
      .catch((error) => {
        throw Error(error);
      });

    res.json({
      status: "success",
      data: naverRes,
    });
  } catch (error) {
    res.json({
      status: "fail",
      data: null,
    });
  }
};

export default naverAPI;
