import { useRecoilState } from "recoil";
import * as S from "./EventSelectButtonStyles";
import { EventSelectButtonProps } from "@component/interfaces/selectInterface";

const EventSelectButton = ({
  text,
  active,
  setCount,
  setEvent,
}: EventSelectButtonProps) => {
  // const onClickEvent = (eventName: string) => {
  //   setEvent((events) => {
  //     const eventState = events[eventName];
  //     return {
  //       ...events,
  //       [eventName]: !eventState,
  //     };
  //   });
  // };
  return (
    <S.SelectButton
      onClick={() => {
        if (active) {
          setCount((count) => count - 1);
        } else {
          setCount((count) => (count += 1));
        }
        // onClickEvent(text);
      }}
      active={active}
    >
      <S.SelectText active={active}>{text}</S.SelectText>
    </S.SelectButton>
  );
};

export default EventSelectButton;
