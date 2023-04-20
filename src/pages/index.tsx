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
