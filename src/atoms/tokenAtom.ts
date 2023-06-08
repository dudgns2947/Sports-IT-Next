import { atom } from "recoil";

export const userTokenAtom = atom<null | string>({
  key: "userToken",
  default: null,
});

export const userNameAtom = atom({
  key: "userName",
  default: "",
});

export const userEmailAtom = atom({
  key: "userEmail",
  default: "",
});
