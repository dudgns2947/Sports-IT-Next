import Seo from "@component/components/Seo";
import * as S from "./index.styles";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ImageSlider from "@component/components/container/ImageSlider";
import CustomButton from "@component/components/button/Custombutton";
import { ContentArea } from "@component/components/area/areaComponent";
import MainPagePost from "@component/components/container/mainpagepost";
import MainPageRecommanduser from "@component/components/container/mainragerecommanduser";
import BottomBar from "@component/components/navbar/BottomBar";

export default function Home() {  
  const images = [
    "/images/logo/advertise.png",
    "/images/logo/advertise.png",
    "/images/logo/advertise.png",
  ];
  const iconProps = [
    ["/images/icon/Icon1.png", "대회"],
    ["/images/icon/Icon2.png", "선수등록"],
    ["/images/icon/Icon3.png", "공문서"],
    ["/images/icon/Icon4.png", "통계"],
  ]
  const userName = "김영훈"
  return (
    <PageWrapper>
      <Seo title="메인 페이지"/>
      <ContentArea>
        <S.CustomMenu>
          <S.Banner>
            <ImageSlider images={images}/>
          </S.Banner>
          <S.IconContainer>
            <CustomButton imageUrl="/images/icon/Icon1.png" buttonName="대회"/>
            <CustomButton imageUrl="/images/icon/Icon2.png" buttonName="선수등록" />
            <CustomButton imageUrl="/images/icon/Icon3.png" buttonName="공문서" />
            <CustomButton imageUrl="/images/icon/Icon4.png" buttonName="통계" />
          </S.IconContainer>
        </S.CustomMenu>
        <S.Divider/>
        <MainPagePost userName={userName} />
        <MainPageRecommanduser />
      </ContentArea>
      <BottomBar/>
    </PageWrapper>
  );
}
// getServerSideProps(완전한 SSR) ⭐️

// page에서 서버 측 랜더링 함수인 getServerSideProps함수를 export하는 경우
// Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render합니다.
// getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행되지 않습니다.(SEO가 필요한 페이지에서 SSR을 적용할 수 있다.)

// return한 props는 각 페이지(컴포넌트)의 props로 받는다.(_app.tsx의 pageProps로 전달)
// ex) fetch, DB 요청, API 불러오기, API key 사용 등

// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

////////////////////////////////////////

// Next.js 에서 Navigate하는 방법 2가지 ☑️

// 1. <Link href="URL"></Link>
// 2. useRouter Hook을 사용하여 이벤트 핸들러에 router.push(URL) 추가
// ex) form 제출 시 페이지 이동

// 'router.push의 인자', '<Link>의 href props'로 url외에 query 속성을 통해 다른 정보들을 전달할 수 있고,
// 두번째 인자인 as를 통해 "마스킹(Masking)"하여 그 정보를 노출시키지 않을 수 있다.

// router.push({
//   pathname: '/post/[pid]',
//   query: { pid: post.id },
//   })

export async function getServerSideProps() {
  return {
    props: {},
  };
}

// getServerSideProps ⭐️
// 페이지에서 getServerSideProps(서버 측 렌더링)라는 함수를 export하는 경우 Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render합니다.
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

// getServerSideProps (Context parameter)
// params: 이 페이지에서 dynamic route(동적 경로)를 사용하는 경우 params에 route parameter가 포함됩니다. 페이지 이름이 [id].js이면 params는 { id: ... }처럼 보일 것입니다.
// query: 쿼리 문자열을 나타내는 객체입니다.
// https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#context-parameter

////////////////////

// Catch All ⭐️
// [id].tsx 와 같은 경우에는 query에 URL에 전달된 값 하나를 받아오지만,
// 페이지에서 동적경로를 사용하는 경우 [...params]와 같은 경우에는
// route parameter들이 query에 params에 배열 형식으로 받아온다.
