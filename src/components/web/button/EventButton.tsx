import { IEvent } from "@component/interfaces/contestInterface";
import React from "react";
import styled from "styled-components";

const EventButton = ({
  active,
  event,
  setSelectEvent,
}: {
  active: boolean;
  event: IEvent;
  setSelectEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
}) => {
  return (
    <EventButtonWrapper active={active} onClick={() => setSelectEvent(event)}>
      <EventName>{event?.name}</EventName>
    </EventButtonWrapper>
  );
};

export default EventButton;

const EventButtonWrapper = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 34px;
  border-radius: 20px;
  margin: 7px 5px;
  border: ${(props) => (props.active ? null : "1px solid #e9ebed")};
  background-color: ${(props) => (props.active ? "#FD3446" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#212121")};
  cursor: pointer;
`;

const EventName = styled.span``;
