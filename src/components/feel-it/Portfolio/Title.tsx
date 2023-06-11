export const Title = ({ title, isUserMyself }: { title: string; isUserMyself: boolean }) => {
  return (
    <div className="header flex pt-5 pb-2 justify-between">
      <div className="text-[.7em] font-medium">{title}</div>
      {isUserMyself && (
        <div
          className="text-[.7em] text-[#4C8BFF]"
          onClick={() => {
            alert("준비중인 기능입니다.");
          }}
        >
          수정
        </div>
      )}
    </div>
  );
};
