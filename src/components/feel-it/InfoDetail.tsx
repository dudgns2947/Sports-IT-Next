import { organizationType } from "@component/libs/mock/users";
import { TitleForOrganization } from "./TitleForOrganization";

export const InfoDetail = ({ pageUserInfo, isUserMyself }: { pageUserInfo: organizationType; isUserMyself: boolean }) => {
  return (
    <>
      <div className="flex flex-col mr-5 ml-5">
        {/* <div className="text-[.9em] font-medium mt-3 mb-3">
                    상세
                </div> */}
        <TitleForOrganization title="상세" isUserMyself={isUserMyself} />
        <div className="flex flex-col text-xs gap-3">
          <div className="flex gap-2 items-center">
            <img alt="" src="../images/icon/email.png"></img>
            <div className="">{pageUserInfo.email}</div>
          </div>
          <div className="flex gap-2 items-center">
            <img alt="" src="../images/icon/phone.png"></img>
            <div className="">{pageUserInfo.phone}</div>
          </div>
          <div className="flex gap-2 items-center">
            <img alt="" src="../images/icon/geo.png"></img>
            <div className="whitespace-pre-wrap">{pageUserInfo.address}</div>
          </div>
        </div>
      </div>
    </>
  );
};
