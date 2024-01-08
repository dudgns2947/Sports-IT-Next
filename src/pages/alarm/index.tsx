import baseApi from "@component/api/utils/instance";
import Seo from "@component/components/Seo";
import {
  ContentArea,
  ContentPaddingArea,
} from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { ToggleProps } from "@component/interfaces/contestInterface";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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

const AlarmWrapper = styled.div``;

const AlarmCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

const AlarmImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  /* border-radius: 27px; */
`;

const AlarmInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlarmContent = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #212121;
  margin-bottom: 4px;
`;

const AlarmHost = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #aeaeae;
`;

interface IReceiver {
  activated: boolean;
  birth: string | null;
  // competitionResults: ;
  createdDate: string;
  description: string | null;
  email: "sportsittest3253@ajou.ac.kr";
  feeds: [];
  followers: [];
  following: [];
  hostProfile: null;
  memberType: [];
  name: "테스트_사용자";
  phone: "013211425";
  profileImageUrl: null;
  subscription: "FREE";
  uid: 268;
  updatedDate: "2023-05-06T14:43:11.798134";
}

interface IAlarm {
  checked: boolean;
  createdDate: string;
  id: number;
  link: string;
  message: string;
  notificationType: string;
}

const Alarm = () => {
  const [activity, setActivity] = useState(false);
  const [notiList, setNotiList] = useState([]);
  const [actiList, setActiList] = useState([]);
  const router = useRouter();

  function getLast(str: string) {
    return parseInt(str.split("/").filter(Boolean).pop()!);
  }

  async function postCheck(id: number, alarmId: number) {
    if (typeof window !== "undefined") {
      try {
        const response = await baseApi.get(`/notification/check/${alarmId}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        router.push(`/contest/${id}`);
      } catch (e) {
        alert("오류가 발생했습니다.");
      }
    }
  }

  async function getAlarms() {
    if (typeof window !== "undefined") {
      try {
        if (!activity) {
          const response = await baseApi.get(`/notification/list/competition`, {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          });
          console.log("공지", response);
          setNotiList(response.data.result);
        } else {
          const response = await baseApi.get(`/notification/list/activity`, {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
            },
          });
          console.log("활동", response);
          setActiList(response.data.result);
        }
      } catch (e: any) {
        alert("오류가 발생하였습니다. 잠시 후 다시 시도해주세요.");
        router.back();
      }
    }
  }

  useEffect(() => {
    getAlarms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);

  return (
    <PageWrapper>
      <Seo title="알림" />
      <GoBackHeader title="알림" />
      <ContentArea>
        <ToggleBar>
          <ToggleTab onClick={() => setActivity(false)} active={!activity}>
            공지
          </ToggleTab>
          <ToggleTab onClick={() => setActivity(true)} active={activity}>
            활동
          </ToggleTab>
        </ToggleBar>
        {!activity && notiList && notiList.length > 0
          ? notiList.map((noti: any, index) => (
              <AlarmCard
                key={index}
                onClick={() => postCheck(getLast(noti?.link), noti.id)}
              >
                <AlarmImage src="/images/logo/AppLogo.png" />
                <AlarmInfo>
                  <AlarmContent>{noti.message}</AlarmContent>
                  <AlarmHost>{noti.sender.name}</AlarmHost>
                </AlarmInfo>
              </AlarmCard>
            ))
          : activity && actiList && actiList.length > 0
          ? actiList.map((acti: any, index) => (
              <AlarmCard
                key={index}
                onClick={() => postCheck(getLast(acti.link), acti.id)}
              >
                <AlarmImage src="/images/logo/AppLogo.png" />
                <AlarmInfo>
                  <AlarmContent>{acti.message}</AlarmContent>
                  <AlarmHost>{acti.sender.name}</AlarmHost>
                </AlarmInfo>
              </AlarmCard>
            ))
          : null}
      </ContentArea>
    </PageWrapper>
  );
};

export default Alarm;
