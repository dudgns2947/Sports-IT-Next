export const getDday = (timestamp: number) => {
  // 주어진 타임스탬프 값을 Date 객체로 변환
  const date = new Date(timestamp * 1000);
  // 현재 날짜와 시간을 나타내는 Date 객체 생성
  const today = new Date();
  // 두 날짜 간의 차이 계산
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
