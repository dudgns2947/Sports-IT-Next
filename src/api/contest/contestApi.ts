import { useRecoilValue } from "recoil";
import { baseApi } from "../utils/instance";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import { IContestParams } from "@component/interfaces/contestInterface";

const CONTEST_LIST_URI = "competitions/slice";

export const getContestList = (competitionListProps: IContestParams) =>
  baseApi.get(CONTEST_LIST_URI, {
    headers: {
      Authorization: `Bearer ${competitionListProps.token}`,
    },
    params: {
      keyword: competitionListProps.keyword,
      filterBy: competitionListProps.filterBy,
      page: competitionListProps.page,
      size: competitionListProps.size,
    },
  });
