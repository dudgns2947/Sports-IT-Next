import { baseApi } from "@component/api/utils/instance";
import Seo from "@component/components/Seo";
import { ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  async function getMyPayment() {
    if (typeof window !== "undefined") {
      console.log(window.localStorage.getItem("jwt"));
      try {
        const response = await baseApi.get(`/payment/myTransaction`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
          },
        });
        console.log(response);
        // console.log(response);
        // setPlayer(parseInt(response.data.result.availablePlayer));
        // setViewer(parseInt(response.data.result.availableViewer));
      } catch (e: any) {
        alert(e.response.data.message);
        router.back();
      }
    }
  }

  useEffect(() => {
    getMyPayment();
  }, []);

  return (
    <PageWrapper>
      <Seo title="결제 내역" />
      <GoBackHeader title="결제 내역" />
      <ContentPaddingArea></ContentPaddingArea>
    </PageWrapper>
  );
};

export default Index;
