import React from "react";
import { useRouter } from "next/router";

const Number = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h1>/pages/sub/[id].tsx</h1>
      <p>Parameter id : {id}</p>
      <a href="/">/pages/index.tsx</a>
    </div>
  );
};

export default Number;
