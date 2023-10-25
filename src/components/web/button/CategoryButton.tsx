import { SetStateAction } from "jotai";
import React from "react";
import styled from "styled-components";

const CategoryButton = ({
  active,
  categoryName,
  setCategory,
}: {
  active: boolean;
  categoryName: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <CategoryButtonWrapper onClick={() => setCategory(categoryName)}>
      <Square active={active} />
      <CategoryName active={active}>{categoryName}</CategoryName>
    </CategoryButtonWrapper>
  );
};

export default CategoryButton;

const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 20px;
  cursor: pointer;
`;

const Square = styled.div<{ active: boolean }>`
  margin-bottom: 15px;
  width: 64px;
  height: 64px;
  background-color: ${(props) => (props.active ? "#ffebeb" : "#F5F6F7")};
  border: ${(props) => (props.active ? "2px solid #FD3446" : null)};
  border-radius: 10px;
`;
const CategoryName = styled.span<{ active: boolean }>`
  color: ${(props) => (props.active ? "#FD3446" : "#212121")};
  font-size: 14px;
`;
