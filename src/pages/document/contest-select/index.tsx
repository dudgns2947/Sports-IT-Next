import Seo from "@component/components/Seo";
import { ContentArea } from "@component/components/area/areaComponent";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import { Input } from "@component/components/input/inputComponent";
import { SearchIcon } from "@component/components/navbar/TopBar.styles";
import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const BoldTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px 0;
`;

const BoldText = styled.span`
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  color: #212121;
  margin-bottom: 2px;
`;

const SearchInputArea = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 335px;
  height: 45px;
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 0 10px;
  background-color: #f9f9fa;
`;

const ContestArea = styled.div``;

const Contest = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const ContestTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TagArea = styled.div``;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 25px;
  padding: 2px 7px;
  background: #f9f9fa;
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #747474;
`;

const ContestTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #212121;
  margin-bottom: 6px;
`;

const ContestHost = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  margin-bottom: 12px;
`;

const ContestDate = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
`;

const ScrapIcon = styled(AiOutlineHeart)`
  width: 25px;
  height: 23px;
  color: #aeaeae;
`;

const ScrapActiveIcon = styled(AiFillHeart)`
  width: 25px;
  height: 23px;
  color: #fd3446;
`;

const index = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <PageWrapper>
      <Seo title="공문서 발급" />
      <GoBackHeader title="공문서 발급" />
      <ContentArea>
        <BoldTextArea>
          <BoldText>대회를</BoldText>
          <BoldText>선택해주세요.</BoldText>
        </BoldTextArea>
        <SearchInputArea>
          <SearchInput
            value={keyword}
            placeholder="대회 검색"
            onChange={(e) => setKeyword(e.currentTarget.value)}
          />
          <SearchIcon />
        </SearchInputArea>
        <ContestArea>
          <Contest>
            <ContestTopArea>
              <TagArea>
                <Tag>팔씨름</Tag>
              </TagArea>
              <ScrapIcon />
            </ContestTopArea>
            <ContestTitle>
              제 26회 대한 팔씨름 연맹 주최 국가대표 선발전
            </ContestTitle>
            <ContestHost>(사)대한 팔씨름 연맹</ContestHost>
            <ContestDate>2023년 3월 13일</ContestDate>
          </Contest>
        </ContestArea>
      </ContentArea>
    </PageWrapper>
  );
};

export default index;
