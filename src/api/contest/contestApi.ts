import { useRecoilValue } from "recoil";
import { baseApi } from "../utils/instance";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import {
  IContestParams,
  RegisterForm,
} from "@component/interfaces/contestInterface";

const CONTEST_LIST_URI = "competitions/slice";

const CONTEST_REGISTER_URI = "competitions";

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

export const registerContest = (registerForm: RegisterForm) =>
  baseApi.post(
    CONTEST_REGISTER_URI,
    {
      name: registerForm.name,
      sportCategory: registerForm.sportCategory,
      startDate: registerForm.startDate,
      recruitingStart: registerForm.recruitingStart,
      recruitingEnd: registerForm.recruitingEnd,
      totalPrize: registerForm.totalPrize,
      content: registerForm.content,
      location: registerForm.location,
      locationDetail: registerForm.locationDetail,
      CompetitionState: registerForm.CompetitionState,
      CompetitionType: registerForm.CompetitionType,
      maxPlayer: registerForm.maxPlayer,
      maxViewer: registerForm.maxViewer,
      templateId: registerForm.templateId,
    },
    {
      headers: {
        Authorization: "",
      },
    }
  );
