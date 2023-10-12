import { IHost } from "../contestInterface";

export interface IContest {
  posterImageUrl: string;
  competitionId: number;
  competitionType: string;
  name: string;
  host: IHost;
  recruitingEnd: string;
  showImage?: boolean;
}

export interface ITag {
  is_premium: boolean;
}

export type InfoMenuType = "detail" | "inquiry" | "notice" | "review";

export interface MenuProps {
  active: boolean;
}
