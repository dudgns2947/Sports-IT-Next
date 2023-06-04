import React from "react";
import Link from "next/link";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>/pages/sub/about.tsx</h1>
        <Link href="/">/pages/index.tsx</Link>
      </div>
    </>
  );
};

export default about;
