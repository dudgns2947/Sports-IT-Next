import {
  IParticipant,
  IWeightSector,
  IWeightSectorList,
  PlayerInfo,
} from "@component/interfaces/contestInterface";
import { IEvent } from "@component/interfaces/eventInterface";
import { WeightCost } from "@component/interfaces/weightCostInterface";

import { atom, selector } from "recoil";

// export const contestEventAtom = atom<IEvent>({
//   key: "contestEvent",
//   default: {
//     팔씨름: false,
//     배구: false,
//     농구: false,
//     축구: false,
//     수영: false,
//     배드민턴: false,
//     태권도: false,
//     체조: false,
//     탁구: false,
//     테니스: false,
//     육상: false,
//     검도: false,
//     볼링: false,
//     야구: false,
//     족구: false,
//     합기도: false,
//     풋살: false,
//     골프: false,
//     요가: false,
//     다이빙: false,
//     수구: false,
//     철봉: false,
//     역도: false,
//     택견: false,
//     쿵푸: false,
//     씨름: false,
//     가라데: false,
//     유도: false,
//     복싱: false,
//     킥복싱: false,
//     레슬링: false,
//     주짓수: false,
//     펜싱: false,
//     양궁: false,
//     승마: false,
//     피겨: false,
//     쇼트트랙: false,
//     아이스하키: false,
//     사이클: false,
//     스쿼시: false,
//     핸드볼: false,
//     미식축구: false,
//     당구: false,
//     럭비: false,
//     마라톤: false,
//   },
// });

export const contestEventAtom = atom<IEvent[]>({
  key: "contestEvent",
  default: [
    { name: "배구", code: 1, category: "" },
    { name: "농구", code: 2, category: "" },
    { name: "팔씨름", code: 3, category: "" },
    { name: "필라테스", code: 4, category: "" },
    { name: "E-Sports", code: 5, category: "" },
    { name: "배드민턴", code: 6, category: "" },
    { name: "수영", code: 7, category: "" },
    { name: "테니스", code: 8, category: "" },
    { name: "태권도", code: 9, category: "" },
    { name: "축구", code: 10, category: "" },
    { name: "럭비", code: 11, category: "" },
    { name: "마라톤", code: 12, category: "" },
    { name: "아이스하키", code: 13, category: "" },
    { name: "볼링", code: 14, category: "" },
    { name: "합기도", code: 15, category: "" },
  ],
});

export const contestEventCountAtom = atom<number>({
  key: "contestEventCount",
  default: 0,
});

export const weightcostAtom = atom<WeightCost>({
  key: "weightcostAtom",
  default: {
    cost: 0,
    extraCost: 0,
  },
});

// export const contestEventSelector = selector({
//   key: "contestEventSelector",
//   get: ({ get }) =>
//     Object.keys(get(contestEventAtom)).find(
//       (key) => get(contestEventAtom)[key] === true
//     ),
// });

export const contestNameAtom = atom<string | null>({
  key: "contestName",
  default: "",
});

export const contestStartDateAtom = atom<string | null>({
  key: "contestStartDate",
  default: "",
});

export const contestEndDateAtom = atom<string | null>({
  key: "contestEndDate",
  default: "",
});

export const contestRecruitingStartAtom = atom<string | null>({
  key: "contestRecruitingStart",
  default: "",
});

export const contestRecruitingEndAtom = atom<string | null>({
  key: "contestRecruitingEnd",
  default: "",
});

export const contestTotalPrizeAtom = atom<number>({
  key: "contestTotalPrize",
  default: 0,
});

export const contestTotalPrizeTextAtom = atom<string>({
  key: "contestTotalPrizeText",
  default: "",
});

export const AwardInfoAtom = atom<string | null>({
  key: "awardInfo",
  default: "",
});

export const contestContentAtom = atom<string | null>({
  key: "contestContent",
  default: "",
});

export const contestLocationAtom = atom<string | null>({
  key: "contestLocation",
  default: "",
});

export const contestLocationDetailAtom = atom<string | null>({
  key: "contestLocationDetail",
  default: "",
});

export const contestLongitudeAtom = atom<string | null>({
  key: "contestLongitude",
  default: "",
});

export const contestLatitudeAtom = atom<string | null>({
  key: "contestLatitude",
  default: "",
});

export const contestMaxPlayerAtom = atom<string>({
  key: "contestMaxPlayer",
  default: "",
});

export const contestMaxViewerAtom = atom<string>({
  key: "contestMaxViewer",
  default: "",
});

export const contestTemplateIdAtom = atom<number | null>({
  key: "contestTemplateId",
  default: 0,
});

export const contestPosterList = atom<File[]>({
  key: "contestPosterList",
  default: [],
});

export const contestPosterAtom = atom<File | null>({
  key: "contestPoster",
  default: null,
});

export const contestPosterPreviewAtom = atom<string | undefined>({
  key: "contestPosterPreview",
  default: undefined,
});

export const contestRuleFileNames = atom<string[]>({
  key: "contestRuleFileNames",
  default: [],
});

export const contestRuleFiles = atom<File[]>({
  key: "contestRuleFiles",
  default: [],
});

export const contestRuleUrlNames = atom<string[]>({
  key: "contestRuleUrlNames",
  default: [],
});

export const contestRuleUrls = atom<string[]>({
  key: "contestRuleUrls",
  default: [],
});

export const contestWeightSectors = atom<IWeightSector[]>({
  key: "contestWeightSectors",
  default: [],
});

export const templateIdAtom = atom<string>({
  key: "templateID",
  default: "",
});

export const participateSectors = atom<IWeightSector[]>({
  key: "participateSectors",
  default: [],
});

export const paymentCostAtom = atom<number>({
  key: "paymentCost",
  default: 0,
});

export const totalPaymentAtom = selector({
  key: "totalPayment",
  get: ({ get }) =>
    get(paymentCostAtom) +
    get(paymentCostAtom) * 0.1 +
    get(paymentCostAtom) * 0.03,
});

export const finalPaymentAtom = atom({
  key: "finalPayment",
  default: 0,
});

export const selectSectorAtom = atom<string[]>({
  key: "selectSector",
  default: [],
});

export const selectSubSectorAtom = atom<string[]>({
  key: "selectSubSector",
  default: [],
});

export const selectContestIdAtom = atom<number>({
  key: "selectContestId",
  default: 0,
});

export const selectContestNameAtom = atom<string>({
  key: "selectContestName",
  default: "",
});

export const applyContestIdAtom = atom<string>({
  key: "applyContestId",
  default: "",
});

export const playerListAtom = atom<PlayerInfo[]>({
  key: "playerList",
  default: [],
});

export const rankIndexAtom = atom({
  key: "rankIndex",
  default: 0,
});

export const awardNameListAtom = atom<string[]>({
  key: "awardNameList",
  default: [],
});

export const awardListAtom = atom<PlayerInfo[]>({
  key: "awardList",
  default: [],
});

export const awardIndexAtom = atom({
  key: "awardIndex",
  default: 0,
});

export const isRankAtom = atom({
  key: "isRank",
  default: true,
});

export const resultSectorAtom = atom({
  key: "resultSector",
  default: "",
});

export const resultWeightAtom = atom({
  key: "resultWeight",
  default: "",
});

export const keywordAtom = atom({
  key: "keyword",
  default: "",
});

export const participantsAtom = atom<IParticipant[]>({
  key: "participants",
  default: [],
});

export const participateFormAtom = atom({
  key: "participateForm",
  default: "",
});

export const genderAtom = atom<number>({
  key: "gender",
  default: 0,
});
