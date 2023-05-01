import { atom } from "recoil";

export const userTokenAtom = atom<null | string>({
  key: "userToken",
  default: null,
});
