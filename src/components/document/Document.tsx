import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const DocumentWrapper = styled.div`
  width: 100px;
  height: 120px;
  margin: 7px 5px;
  position: relative;
  cursor: pointer;
`;

const DocumentLogo = styled.img`
  width: 100px;
  height: 120px;
  position: absolute;
`;

const PremiumLogo = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 11px;
  top: 10px;
`;

const DocumentName = styled.span`
  width: 60px;
  height: 32px;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  color: #4d4d4d;
  position: absolute;
  left: 11px;
  bottom: 10px;
`;

interface DocumentProps {
  name: string;
  documentId: number;
}

const Document = ({ name, documentId }: DocumentProps) => {
  const router = useRouter();
  return (
    <DocumentWrapper onClick={() => router.push(`/document/${documentId}`)}>
      <DocumentLogo src="/images/logo/documentLogo.png" />
      <PremiumLogo src="/images/logo/premiumLogo.png" />
      <DocumentName>{name}</DocumentName>
    </DocumentWrapper>
  );
};

export default Document;
