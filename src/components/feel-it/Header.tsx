import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex mt-5 mb-5 mr-3 ml-3 items-center justify-between">
        <img alt="" src={"../images/icon/prev.png"} onClick={(e) => router.back()}></img>
        <img alt="" src={"../images/icon/three_dot.png"} onClick={(e) => alert("준비중입니다")}></img>
      </div>
    </>
  );
};
