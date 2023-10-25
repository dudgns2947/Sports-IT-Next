import React from "react";
import styled from "styled-components";

const EventButton = ({
  active,
  eventName,
  setSelectEvent,
}: {
  active: boolean;
  eventName: string;
  setSelectEvent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <EventButtonWrapper
      active={active}
      onClick={() => setSelectEvent(eventName)}
    >
      <EventName>{eventName}</EventName>
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
