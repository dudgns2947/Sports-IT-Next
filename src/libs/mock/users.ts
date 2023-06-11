export const userTypeOrganization = {
  userId: "123456",
  userType: "주최자" as const,
  name: "사단법인 대한팔씨름연맹",
  description: "대한팔씨름연맹",
  followers: 4560001,
  following: 235,
  membership: 1700,
  email: "karmwrestling@gmail.com",
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
  userId: "123457",
  userType: "체육인" as const,
  name: "김영훈",
  description: "함께 운동 소통해요!",
  followers: 1234567,
  following: 12345,
  membership: 3,
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
