import { IEvent } from "@component/interfaces/eventInterface";
import { atom, selector } from "recoil";

export const eventAtom = atom<IEvent>({
  key: "event",
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

export const eventCountAtom = atom<number>({
  key: "eventCount",
  default: 0,
});
