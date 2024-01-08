import { useRouter } from "next/router";
import React from "react";

const NextButton = ({ content }: { content?: string }) => {
  return (
    <div
      style={{
        width: "314px",
        height: "56px",
        borderRadius: "6px",
        backgroundColor: "#FD3446",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
      }}
    >
      {content ? content : "다음"}
    </div>
  );
};

export default NextButton;
