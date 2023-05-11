export interface IContestParams {
  token: string | null;
  keyword: string;
  filterBy: string;
  orderBy: string;
  page: number;
  size: number;
}

export interface IHost {
  uid: number;
  name: string;
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
  posters: string[];
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
