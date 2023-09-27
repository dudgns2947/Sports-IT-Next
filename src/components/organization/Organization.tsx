import Image from "next/image";
import React from "react";
import { Tag, TagArea } from "../web/contest/Contest.style";

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

      <div>
        <span>{name}</span>
        <TagArea>
          {categories?.map((category, index) => (
            <Tag key={index} is_premium={false}>
              {category}
            </Tag>
          ))}
          <Tag is_premium={false}>씨름</Tag>
        </TagArea>
      </div>
    </div>
  );
};

export default Organization;
