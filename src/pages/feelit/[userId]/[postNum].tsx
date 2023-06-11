import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NextComponentType } from "next";
import { useRouter } from "next/router";

export default function Component() {
  const router = useRouter();
  const [someValue, setSomeValue] = useState("SOME VALUE");

  useEffect(() => {
    setSomeValue(globalThis.location.href);
  }, []);

  return (
    <>
      <div className="">{someValue}</div>
    </>
  );
}
