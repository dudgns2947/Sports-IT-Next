import { SetStateAction } from "react";

export type FilterType =
  | "PLANNING"
  | "RECRUITING"
  | "RECRUITING_END"
  | "IN_PROGRESS"
  | "END"
  | "recruitingEnd"
  | "recommend"
  | "totalPrize";

export interface ISearchInput {
  keyword: string;
}

export interface FilterButtonProps {
  children: string;
  active: boolean;
  onClick: () => void;
}

export interface IContestParams {
  token: string | null;
  keyword: string;
  filterBy: FilterType[];
  orderBy: string;
  page: number;
  size: number;
}

export interface IHost {
  uid: number;
  name: string;
}

export interface IPoster {
  posterUrl: string;
}

export interface IContestInfo {
  argeements: string[];
  category: string;
  competitionId: number;
  competitionType: string;
  content: string;
  createdDate: string;
  endDate: string;
  host: IHost;
  location: string;
  locationDetail: string;
  maxPlayer: number | null;
  maxViewer: number | null;
  name: string;
  posters: IPoster[];
  recruitingEnd: string;
  recruitingStart: string;
  scrapCount: string;
  startDate: string;
  state: string;
  stateDetail: string | null;
  templateID: string;
  totalPrize: number;
  updatedDate: string;
  viewCount: number;
}

export interface IFilterButton {
  filterBy: FilterType[];
  setFilterBy: React.Dispatch<SetStateAction<FilterType[]>>;
  filterKeyWord: FilterType;
  filterContent: string;
}

export interface IContestDetailForm {
  imageList: FileList;
  detail: string;
}

export interface RegisterForm {
  name: string;
  sportCategory: string;
  startDate: string;
  recruitingStart: string;
  recruitingEnd: string;
  totalPrize: number;
  content: string;
  location: string;
  locationDetail: string;
  CompetitionState: string;
  CompetitionType: string;
  maxPlayer: number;
  maxViewer: number;
  templateId: number;
}

export interface ISector {
  name: string;
}

export interface IWeightSector {
  title: string;
  cost: number;
  expandCost: number;
  multi: boolean;
  subSectors: ISector[];
}

export interface IWeightSectorList {
  sectorList: IWeightSector[];
  surveyList: null;
}
