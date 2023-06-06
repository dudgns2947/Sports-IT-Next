import {
  IWeightSector,
  IWeightSectorList,
  PlayerInfo,
} from "@component/interfaces/contestInterface";
import { IEvent } from "@component/interfaces/eventInterface";
import { WeightCost } from "@component/interfaces/weightCostInterface";

import { atom, selector } from "recoil";

export const contestEventAtom = atom<IEvent>({
  key: "contestEvent",
  default: {
    팔씨름: false,
    배구: false,
    농구: false,
    축구: false,
    수영: false,
    배드민턴: false,
    태권도: false,
    체조: false,
    탁구: false,
    테니스: false,
    육상: false,
    검도: false,
    볼링: false,
    야구: false,
    족구: false,
    합기도: false,
    풋살: false,
    골프: false,
    요가: false,
  },
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

export const contestEventSelector = selector({
  key: "contestEventSelector",
  get: ({ get }) =>
    Object.keys(get(contestEventAtom)).find(
      (key) => get(contestEventAtom)[key] === true
    ),
});

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

export const contestTotalPrizeAtom = atom<number | null>({
  key: "contestTotalPrize",
  default: 0,
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

export const contestMaxPlayerAtom = atom<number | null>({
  key: "contestMaxPlayer",
  default: null,
});

export const contestMaxViewerAtom = atom<number | null>({
  key: "contestMaxViewer",
  default: null,
});

export const contestTemplateIdAtom = atom<number | null>({
  key: "contestTemplateId",
  default: 0,
});

export const contestPosterList = atom<File[]>({
  key: "contestPosterList",
  default: [],
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
