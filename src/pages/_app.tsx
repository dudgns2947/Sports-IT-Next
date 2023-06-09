import Layout from "@component/components/Layout";
import { GlobalStyle } from "@component/styles/global-style";
import { theme } from "@component/styles/theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Script from "next/script";
import { Hydrate } from "react-query/hydration";
import { use } from "react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userTokenAtom } from "@component/atoms/tokenAtom";
import { type } from "os";

// _app.tsx는 모든 페이지에 공통적으로 적용될 내용을 작성 및 서버로부터 요청이 왔을 때 가장 먼저 실행되며,
// 페이지에 적용할 공통 레이아웃을 설정하는 역할을 한다.

// Next.js 에서는 렌더링하고자 하는 페이지(컴포넌트)를 _app.tsx의 Component props로 전달해준다.
// 따라서 _app.tsx는 공통적으로 렌더링할 내용(컴포넌트)들을 추가해주거나, GlobalStyle을 설정해줄 수 있다.

// Next.js는 App 컴포넌트를 사용하여 page를 초기화합니다. 이를 재정의하고 페이지 초기화를 제어할 수 있습니다. 이를 통해 다음과 같은 놀라운 일을 할 수 있습니다.
// 1. 페이지 변경 간에 레이아웃 유지
// 2. 페이지 탐색 시 state 유지
// 3. componentDidCatch를 사용한 Custom 에러 처리
// 4. 페이지에 추가 데이터 삽입
// 5. Global CSS 추가

// + 파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)
// https://nextjs.org/docs/messages/css-global

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    //로그인관련 페이지가 아니면
    if (!router.pathname.startsWith("/auth") && typeof window !== "undefined") {
      const StoredToken = window.localStorage.getItem("jwt");
      if (!StoredToken) {
        router.push("/auth/login");
        alert("로그인이 필요한 페이지입니다.");
      } else {
        setToken(StoredToken);
        localStorage.setItem("jwt", StoredToken);
      }
    }
  }, []);

  // 토큰이 변경될 때마다 토큰을 로컬 스토리지에 저장
  useEffect(() => {
    if (token) {
      localStorage.setItem("jwt", token);
    }
  }, [token]);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Script async src="https://cdn.iamport.kr/v1/iamport.js" />
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
