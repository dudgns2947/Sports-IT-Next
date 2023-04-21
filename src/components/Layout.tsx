import React from "react";
import { GlobalStyle } from "@component/styles/global-style";
import { Container } from "./container/container";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Layouts
// React 모델을 사용하면 페이지를 일련의 컴포넌트로 분해할 수 있습니다.
// 이러한 컴포넌트 중 많은 부분이 페이지 간에 재사용되는 경우가 많습니다.
// 예를 들어 모든 페이지에 동일한 navigation과 footer가 있을 수 있습니다.
// https://nextjs.org/docs/basic-features/layouts

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container>
      <GlobalStyle />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
