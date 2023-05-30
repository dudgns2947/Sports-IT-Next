import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Number = () => {
  const router = useRouter();
  console.log(router);
  const id = router.query.id;
  return (
    <div>
      <h1>/pages/sub/[id].tsx</h1>
      <p>Parameter id : {id}</p>
      <Link href="/">/pages/index.tsx</Link>
    </div>
  );
};

export default Number;
