import { atom } from "recoil";

export const contestCategoryAtom = atom<string>({
  key: "contestCategory",
  default: "",
});
