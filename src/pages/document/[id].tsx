import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import CloseHeader from "@component/components/header/CloseHeader";
import React from "react";
import styled from "styled-components";

const DocumentImage = styled.img`
  width: 335px;
  height: 459.96px;
  margin: 98px 0 50px 0;
`;

const DownloadButton = styled.button`
  width: 335px;
  height: 50px;
  background: #212121;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  color: #ffffff;
`;

const Document = () => {
  return (
    <PageWrapper>
      <Seo title="공문서" />
      <CloseHeader />
      <ContentArea>
        <DocumentImage src="/images/example/Document1.png" />
        <DownloadButton>PDF 문서로 다운로드</DownloadButton>
      </ContentArea>
    </PageWrapper>
  );
};

export default Document;
