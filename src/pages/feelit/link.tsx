import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { validateURL } from "../../libs/lib";
import Swal from "sweetalert2";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";

const links = [
  { url: "", name: "홈페이지" },
  { url: "", name: "홈페이지" },
  { url: "", name: "인스타그램" },
  { url: "", name: "페이스북" },
  { url: "", name: "네이버" },
  { url: "", name: "유튜브" },
];

const onRouterBack = () => {
  window.history.back();
};

export default function Component() {
  const router = useRouter();
  const [someValue, setSomeValue] = useState("SOME VALUE");

  useEffect(() => {
    setSomeValue(globalThis.location.href);
  }, []);

  const saveUrl: React.MouseEventHandler<HTMLInputElement> = (e) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    const input = e.currentTarget.childNodes[0];
    if (!(input instanceof HTMLInputElement)) return;

    const url = input.value.trim();
    const isValid = validateURL(url);
    if (!isValid) {
      alert("유효한 주소가 아닙니다");
      return;
    }
    Swal.fire({
      icon: "success",
      title: "저장되었습니다.",
      confirmButtonText: '<div class="background : black ; color : white">확인</div>',
      customClass: {
        image: " swal-image",
        icon: " swal-icon",
        title: "swal-title",
      },
    });
  };

  return (
    <>
      <div className="w-[100vw] flex flex-col justify-center items-center">
        <GoBackHeader title="링크" />
        <div className="w-full flex flex-col gap-5 mb-32">
          {links.map((link) => {
            return (
              <>
                <div className="w-full pl-5 pr-5" key={link.name}>
                  <div className="font-medium pt-2 pb-2 text-[.9em]">{link.name}</div>
                  <div className="w-full flex flex-row justify-center gap-2" onClick={saveUrl}>
                    <input
                      type="text"
                      className="w-full text-sm pl-3 border-2 rounded-lg bg-slate-100"
                      placeholder="URL을 입력해 주세요."
                    />
                    <button style={{ minWidth: "max-content" }} className="text-sm bg-black py-3 px-5 text-white font-medium rounded-lg">
                      저장
                    </button>
                  </div>
                </div>
                <div onClick={onRouterBack}>
                  <NavBar navText="확인" active={true} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
