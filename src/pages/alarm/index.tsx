import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { ToggleProps } from "@component/interfaces/contestInterface";
import React, { useState } from "react";
import styled from "styled-components";

const ToggleBar = styled.div`
  width: 100%;
  display: flex;
`;

const ToggleTab = styled.div<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px 0;
  color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  border-bottom: ${(props) =>
    props.active ? "1.5px solid #212121" : "1.5px solid #AEAEAE"};
  cursor: pointer;
`;

const Alarm = () => {
  const [activity, setActivity] = useState(true);

  return (
    <PageWrapper>
      <Seo title="알림" />
      <GoBackHeader title="알림" />
      <ContentArea>
        <ToggleBar>
          <ToggleTab onClick={() => setActivity(true)} active={activity}>
            활동
          </ToggleTab>
          <ToggleTab onClick={() => setActivity(false)} active={!activity}>
            공지
          </ToggleTab>
        </ToggleBar>
      </ContentArea>
    </PageWrapper>
  );
};

export default Alarm;
