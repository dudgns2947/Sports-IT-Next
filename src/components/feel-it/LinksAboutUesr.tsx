import Link from "next/link";
import Image from "next/image";
import { TitleForOrganization } from "./TitleForOrganization";
import { useRouter } from "next/router";
import { organizationType } from "@component/libs/mock/users";

type argsType = {
  pageUserInfo: organizationType;
  isUserMyself: boolean;
};

export const LinksAboutUser = ({ pageUserInfo, isUserMyself }: argsType) => {
  const router = useRouter();
  return (
    <>
      <div className="mr-5 ml-5">
        <div className="header flex pt-5 pb-5 justify-between">
          <div className="text-[.9em] font-medium">{"링크"}</div>
          {isUserMyself && (
            <div
              className="text-[.8em] text-[#4C8BFF]"
              onClick={() => router.push({ pathname: "/feelit/link", query: pageUserInfo.userId })}
            >
              수정
            </div>
          )}
        </div>
        <div className="flex" style={{ maxWidth: "80%" }}>
          {pageUserInfo.links.map((link) => {
            return (
              <Link href={link.url} className="flex-[1]" key={link.type}>
                <img loading="lazy" src={link.imgurl} alt="" style={{ width: "80%" }} />
              </Link>
            );
          })}
          <div className=""></div>
        </div>
      </div>
    </>
  );
};
