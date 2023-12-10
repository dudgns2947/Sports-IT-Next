import { atom } from "recoil";

export const cropModalOpenAtom = atom<boolean>({
  key: "cropModalOpenAtom",
  default: false,
});

export const ruleTermModalOpenAtom = atom<boolean>({
  key: "ruleTermModalOpenAtom",
  default: false,
});

export const sectorWeightModalOpenAtom = atom<boolean>({
  key: "sectorWeightModalOpenAtom",
  default: false,
});

export const surveyModalOpenAtom = atom<boolean>({
  key: "surveyModalOpenAtom",
  default: false,
});
