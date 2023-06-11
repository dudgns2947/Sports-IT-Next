import Link from "next/link";

export const JoinMembershipBtn = ({ userId }: { userId: string }) => {
  return (
    <div className="fixed bottom-20 w-screen flex justify-center">
      <Link href={`/membership/${userId}`}>
        <button className="bg-black  text-white font-medium py-3 px-8 rounded-3xl flex justify-center items-center gap-1">
          {/* <span className="">+ </span> */}
          <img alt="" src={"../images/icon/join_membership.png"} />
          <span className="text-sm">멤버십 가입</span>
        </button>
      </Link>
    </div>
  );
};
