import React from "react";
import styled from "styled-components";

interface NavTitleProps {
  content: string;
}

const NavTitleArea = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #f9f9fa;
  margin-top: 5px;
`;

const NavTitleText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #aeaeae;
`;

const NavTitle = ({ content }: NavTitleProps) => {
  return (
    <NavTitleArea>
      <NavTitleText>{content}</NavTitleText>
    </NavTitleArea>
  );
};

export default NavTitle;
