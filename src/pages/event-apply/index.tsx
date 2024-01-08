import baseApi from "@component/api/utils/instance";
import Seo from "@component/components/Seo";
import { ContentPaddingArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { Text } from "@component/styles/auth/event-select.styles";
import { TextArea } from "@component/styles/auth/event-select.styles";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const SubText = styled.span`
  font-size: 20px;
  color: #aeaeae;
  margin-top: 2%;
`;

const SearchArea = styled.div`
  padding: 0 15px;
  display: flex;
  width: 100%;
  position: relative;
  margin-top: 10%;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  background: #f9f9fa;
  border-radius: 12px;
  width: 100%;
  height: 40px;
  padding-left: 15px;
`;

const ApplyButtonArea = styled.div`
  padding: 0 15px;
`;

const ApplyButton = styled.div`
  width: 100%;
  background-color: #212121;
  color: #ffffff;
  border-radius: 6px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

const Index = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  async function postEvent() {
    try {
      const response = await baseApi.post("/category/customCategory", {
        name: keyword,
      });
      console.log(response);
      alert("종목 신청이 완료되었습니다 !");
      router.back();
    } catch (e) {
      alert("오류가 발생하였습니다. 잠시 후 다시 시도해주세요.");
    }
  }
  return (
    <PageWrapper>
      <Seo title="종목 신청" />
      <GoBackHeader title="종목 신청" />
      <ContentPaddingArea>
        <TextArea>
          <Text>추가하고자 하는</Text>
          <Text>종목을 입력해주세요.</Text>
          <SubText>빠른 시일 내 검토 후 종목이 추가됩니다.</SubText>
        </TextArea>
        <SearchArea>
          <SearchInput
            value={keyword}
            onChange={(e) => setKeyword(e.currentTarget.value)}
            placeholder="추가할 종목 이름을 입력해주세요."
          />
        </SearchArea>
        <ApplyButtonArea>
          <ApplyButton onClick={() => postEvent()}>종목 신청</ApplyButton>
        </ApplyButtonArea>
      </ContentPaddingArea>
    </PageWrapper>
  );
};

export default Index;
