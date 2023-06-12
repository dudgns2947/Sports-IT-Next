import { get } from "http";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useUser(userId: string) {
  const { data, error } = useSWR(`/api/member/all/${userId}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

//locat storage에서 user 정보를 가져온다.
export const getUser = () => {
  let userRole: string;
  let userName: string;
  let userEmail: string;
  let userID: string;
  if (typeof window !== "undefined") {
    userID = localStorage.getItem("uid") as string;
    userRole = localStorage.getItem("role") as string;
    userName = localStorage.getItem("name") as string;
    userEmail = localStorage.getItem("email") as string;
  } else {
    userID = "123456";
    userRole = "ROLE_INSTITUTION";
    userName = "김영훈";
    userEmail = "dudgns2947@ajou.ac.kr";
  }

  return {
    userID,
    userRole,
    userName,
    userEmail,
  };
};

export const userTypeOrganization = {
  userId: getUser().userID,
  userType: "ROLE_INSTITUTION" as const,
  name: getUser().userName,
  description: getUser().userEmail,
  followers: 11,
  following: 27,
  membership: 0,
  email: getUser().userEmail,
  phone: "010-8802-5105",
  address: "서울특별시 성북구 동소문로26길 17,지하 1층 (동선동 3가)",
  addressName: "동소문로26길 17",
  latitude: 37.5939892,
  longitude: 127.0198465,
  links: [
    {
      type: "homepage",
      url: "https://www.examples.com/",
      imgurl: "../images/links/home.png",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/",
      imgurl: "../images/links/insta.png",
    },
    {
      type: "facebook",
      url: "https://facebook.com/",
      imgurl: "../images/links/facebook.png",
    },
    {
      type: "naver",
      url: "https://blog.naver.com/",
      imgurl: "../images/links/naver.png",
    },
    {
      type: "youtube",
      url: "https://youtube.com/",
      imgurl: "../images/links/youtube.png",
    },
  ],
  supervisions: ["팔씨름", "배구", "농구", "축구", "수영"],
};

export const userTypeSportsman = {
  userId: getUser().userID,
  userType: "ROLE_USER" as const,
  name: getUser().userName,
  description: getUser().userEmail,
  followers: 5,
  following: 8,
  membership: 0,
  physical: {
    height: 180,
    weight: 89,
    skeletalMuscleMass: 46,
    bodyFatPercentage: 9,
  },
  favorites: ["팔씨름", "배구", "농구", "축구", "수영"],
  affiliation: [
    {
      organizationId: "123456",
      name: "(사)대한팔씨름연맹",
      supervisions: ["팔씨름"],
      iconUrl: "../images/icon/group_icon.png",
    },
  ],
  career: [
    {
      title: "용인태권도 사범",
      duration: "2018.06 ~2020.05",
    },
    {
      title: "태권도 3단",
      duration: "2017.03.16",
    },
    {
      title: "11대 백두장사",
      duration: "2016.03.16",
    },
  ],
  competitionCareer: [
    {
      title: "제 11회 팔씨름 국가대표 선발전 1위",
      duration: "2020.03.13",
    },
    {
      title: "제 9회 팔씨름 국가대표 선발전 2위",
      duration: "2018.03.13",
    },
    {
      title: "제 8회 팔씨름 국가대표 선발전 3위",
      duration: "2017.03.13",
    },
  ],
};

export const usersDbMock = [userTypeOrganization, userTypeSportsman];

export type organizationType = typeof userTypeOrganization;
export type sportsmanType = typeof userTypeSportsman;
export type userType = organizationType | sportsmanType;
