import { ITerms } from "@component/interfaces/termInterface";
import { atom } from "recoil";

export const appTermAtom = atom<boolean>({
  key: "appTerm",
  default: false,
});

export const privacyPolicyAtom = atom<boolean>({
  key: "privacyPolicy",
  default: false,
});

export const thirdPartyAtom = atom<boolean>({
  key: "thirdParty",
  default: false,
});

export const marketingOptInAtom = atom<boolean>({
  key: "marketingOptIn",
  default: false,
});
