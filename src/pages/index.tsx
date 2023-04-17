import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

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
          <a href="/sub">/pages/sub/index.tsx</a>
          <a href="/sub/about">/pages/sub/about.tsx</a>
          <a href="/sub/1">/pages/sub/[id].tsx</a>
          <a href="/sub/2">/pages/sub/[id].tsx</a>
          <Nav />
        </li>
      </ul>
    </div>
  );
}
