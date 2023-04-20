import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: red;
  width: 200px;
  height: 200px;
`;

export default function Home() {
  return (
    <div>
      <h1>/pages/index.tsx</h1>
      <ul>
        <li>
          <Link href="/sub">/pages/sub/index.tsx</Link>
          <Link href="/sub/about">/pages/sub/about.tsx</Link>
          <Link href="/sub/1">/pages/sub/[id].tsx</Link>
          <Link href="/sub/2">/pages/sub/[id].tsx</Link>
          <Link href="/auth/login">/auth/login</Link>
          <Nav />
        </li>
      </ul>
    </div>
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
