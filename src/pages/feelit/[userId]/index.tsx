import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@component/components/feel-it/Header";
import { useQuery } from "react-query";
import {
  organizationType,
  userTypeOrganization,
  userTypeSportsman,
  usersDbMock,
} from "@component/libs/mock/users";
import { Sportsman } from "@component/components/feel-it/Sportsman";
import { Organization } from "@component/components/feel-it/Organization";
import {
  tabForOrganization,
  tabForSportsman,
} from "@component/libs/static_data";
// import useSWR from "swr";
// import baseApi from "@component/api/utils/instance";

type userlinksType = {
  type: string;
  url: string;
  imgurl: string;
}[];

type tabForOrganizationType = "정보" | "게시글" | "프리미엄";
type tabForSportsmanType = "게시글" | "포트폴리오";

export type everyTabType = tabForOrganizationType | tabForSportsmanType;

const useRouteRelatedLogic = () => {
  const router = useRouter();
  const longituteUpdated =
    typeof router.query.longitute === "string"
      ? parseFloat(router.query.longitute)
      : null;
  const latiuteUpdated =
    typeof router.query.latitude === "string"
      ? parseFloat(router.query.latitude)
      : null;
  const AddressNameUpdated =
    typeof router.query.addressName === "string"
      ? router.query.addressName
      : null;
  const newAddress =
    typeof router.query.newAddress === "string"
      ? router.query.newAddress
      : null;

  useEffect(() => {
    router.query.longitute &&
      setTimeout(() => {
        window.scrollTo(0, 500);
      }, 100);
  }, [router.query.longitute]);

  return {
    router,
    longituteUpdated,
    latiuteUpdated,
    AddressNameUpdated,
    newAddress,
  };
};

export default function Component() {
  const {
    router,
    longituteUpdated,
    latiuteUpdated,
    AddressNameUpdated,
    newAddress,
  } = useRouteRelatedLogic();
  const [currentTab, setCurrentTab] = useState<
    tabForOrganizationType | tabForSportsmanType
  >();

  const getUserInfo = async (userId: string) => {
    const userdata = await Promise.resolve(
      usersDbMock.find((v) => v.userId === userId)
    );

    if (!userdata) {
      throw new Error("유저 아이디를 찾을 수 없음");
    }
    if (userdata && userdata.userType === "ROLE_USER") {
      setCurrentTab(tabForSportsman.at(0)!.name as tabForSportsmanType);
    } else if (userdata && userdata.userType === "ROLE_INSTITUTION") {
      setCurrentTab(tabForOrganization.at(0)!.name as tabForOrganizationType);
    } else {
      throw new Error("유저 데이터포멧 이상");
    }
    return userdata;
  };

  const {
    data: pageUserInfo,
    isError,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["feelItUserInfo"],
    queryFn: () => getUserInfo(router.query.userId as string),
    enabled: router.isReady,
  });

  const changeDefaultTab = (tabname: everyTabType) => setCurrentTab(tabname);

  const pageUserInfoLatest =
    pageUserInfo?.userType === "ROLE_INSTITUTION" &&
    newAddress &&
    latiuteUpdated &&
    longituteUpdated &&
    AddressNameUpdated
      ? {
          ...pageUserInfo,
          address: newAddress,
          latitude: latiuteUpdated,
          longitude: longituteUpdated,
          addressName: AddressNameUpdated,
        }
      : pageUserInfo;

  const isOrganizationPage =
    status === "success" &&
    pageUserInfoLatest &&
    pageUserInfoLatest.userType === "ROLE_INSTITUTION" &&
    currentTab;

  const isSportsmanPage =
    status === "success" &&
    pageUserInfoLatest &&
    pageUserInfoLatest.userType === "ROLE_USER" &&
    currentTab;

  console.log(pageUserInfoLatest);

  return (
    <div className="w-screen mb-44">
      <Header />
      {isOrganizationPage && (
        <Organization
          currentTab={currentTab}
          pageUserInfo={pageUserInfoLatest}
          changeDefaultTab={changeDefaultTab}
        />
      )}
      {isSportsmanPage && (
        <Sportsman
          currentTab={currentTab}
          changeDefaultTab={changeDefaultTab}
          pageUserInfo={pageUserInfoLatest}
        />
      )}
    </div>
  );
}
