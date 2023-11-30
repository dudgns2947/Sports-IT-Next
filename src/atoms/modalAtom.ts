import { atom } from "recoil";

export const cropModalOpenAtom = atom<boolean>({
  key: "cropModalOpenAtom",
  default: false,
});
