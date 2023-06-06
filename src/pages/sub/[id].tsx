import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Number = () => {
  const router = useRouter();
  console.log(router);
  const id = router.query.id;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>/pages/sub/[id].tsx</h1>
        <p>Parameter id : {id}</p>
        <Link href="/">/pages/index.tsx</Link>
      </div>
    </>
  );
};

export default Number;
