import { SetStateAction } from "react";

export type FilterType =
  | "RECRUITING"
  | "RECRUITING_END"
  | "IN_PROGRESS"
  | "END";

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
  profileImageUrl: string | null;
  hostProfile: string | null;
  following: string[];
  followers: string[];
  feeds: string[];
  description: string | null;
  categories: string[];
  competitionResults: string[];
}

export interface IPoster {
  posterUrl: string;
}

export interface Icategory {
  category: string;
  name: string;
}

export interface IContestInfo {
  argeements: string[];
  categories: Icategory[];
  competitionId: number;
  competitionResults: string[];
  competitionType: string;
  content: string;
  createdDate: string;
  endDate: string;
  host: IHost;
  latitude: number | null;
  longitude: number | null;
  location: string;
  locationDetail: string;
  maxPlayer: number | null;
  maxViewer: number | null;
  name: string;
  posters: IPoster[];
  recruitingEnd: string;
  recruitingStart: string;
  scrapCount: number;
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
  setPage: React.Dispatch<SetStateAction<number>>;
  setIsFresh: React.Dispatch<SetStateAction<boolean>>;
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

// export interface ISector {
//   name: string;
// }

export interface IWeightSector {
  title: string;
  cost: number;
  expandCost: number;
  multi: boolean;
  gender: number;
  subSectors: { name: string }[];
}

export interface IWeightSectorList {
  sectorList: IWeightSector[];
  surveyList: null;
}

export interface ToggleProps {
  active: boolean;
}

export interface PlayerInfo {
  playerName: string;
  playerId: number;
}

export interface IParticipant {
  userName: string;
  uid: number;
  sectorTitle: string;
  subSectorName: string;
  profileImg: string;
  phone: string;
}

export interface ICompetition {
  competitionId: number;
  host: IHost;
  name: string;
  posters: IPoster[];
  sportCategory: string;
  startDate: string;
}

export interface IMyContestList {
  competition: ICompetition;
  joinDate: string;
  type: string;
}

export interface ISurvey {
  isSubject: boolean; // 주관식 여부 (true 주관식, false 객관식)
  multi: boolean; // 중복 가능 여부
  surveyTitle: string; // 설문 제목
  surveyContent: string; // 설문 내용(주관식용)
  options: string[]; // 설문 옵션 목록(객관식용)
  surveyImageFile: File; // 설문 사진 (최대 1개)
}

export interface ISubSector {
  subSectorCode: number;
  subSectorName: string;
}

export interface ISector {
  sectorCode: number;
  sectorName: string;
  sectorGender: number;
  subSectors: ISubSector[] | [];
}

export interface ITeam {
  competitionId: number;
  teamIdx: number;
  teamName: string;
}
