import styled from "styled-components";

interface BottomTextProps {
  count: number;
}

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 25%;
  padding-left: 18px;
  font-weight: 600;
  margin-bottom: 5%;
`;

export const Text = styled.span`
  font-size: 35px;
  margin-bottom: 10px;
`;

export const SelectArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
  height: 65%;
  padding: 2% 3px 5% 3px;
`;

export const BottomArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
  margin-bottom: 10%;
`;

export const BottomText = styled.span<BottomTextProps>`
  /* color: #747474; */
  color: ${(props) => (props.count > 5 ? "#E05E6D" : "#747474")};
  margin-bottom: 7px;
`;

export const LinkText = styled.span`
  font-size: 14px;
  color: #e05e6d;
  border-bottom: 1px solid #e05e6d;
  cursor: pointer;
`;
