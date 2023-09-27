import Image from "next/image";
import React from "react";
import { Tag, TagArea } from "../web/contest/Contest.style";
import * as S from "./Organization.style";

const Organization = ({
  profileImageUrl,
  name,
  categories,
}: {
  profileImageUrl?: string;
  name: string;
  categories?: string[];
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "0.1px solid #F5F6F7",
        marginBottom: "15px",
      }}
    >
      <Image
        src="/images/example/sample_org.png"
        width={50}
        height={50}
        alt="organization-image"
        style={{
          marginRight: "15px",
        }}
      />

      <S.TextArea>
        <S.OrganizationName>{name}</S.OrganizationName>
        <TagArea>
          {categories?.map((category, index) => (
            <Tag key={index} is_premium={false}>
              {category}
            </Tag>
          ))}
          <Tag is_premium={false}>씨름</Tag>
        </TagArea>
      </S.TextArea>
    </div>
  );
};

export default Organization;
