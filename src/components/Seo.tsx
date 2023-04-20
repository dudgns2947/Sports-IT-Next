import Head from "next/head";
import React from "react";

// Head (next/head)
// 페이지 head에 엘리먼트를 추가하기 위한 내장 컴포넌트를 노출합니다.
// head에 태그가 중복되지 않도록 하려면 다음 예제와 같이 태그가 한 번만 렌더링되도록 하는 key 속성을 사용할 수 있습니다.
// 이 경우 두 번째 meta property="og:title"만 렌더링됩니다. 중복 키 속성이 있는 메타 태그는 자동으로 처리됩니다.

// Head 컴포넌트 안에 들어가는 모든 것들이 HTML의 head에 반영된다.

const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | Sports-IT</title>
    </Head>
  );
};

export default Seo;
