import { GlobalStyle } from "@component/styles/global-style";
import { theme } from "@component/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// _app.tsx는 모든 페이지에 공통적으로 적용될 내용을 작성 및 서버로부터 요청이 왔을 때 가장 먼저 실행되며,
// 페이지에 적용할 공통 레이아웃을 설정하는 역할을 한다.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
