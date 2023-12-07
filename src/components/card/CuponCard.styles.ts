import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 600px;
  padding: 25px 25px;
  border: 2px solid #ededed;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  font-weight: bolder;
  margin-bottom: 30px;
`;

export const CuponContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

export const CuponText = styled.div`
  color: var(--black-02, #747474);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  flex: 1;
`;

export const CuponSelcetbox = styled.select`
  flex : 3;
  border : 2px solid #ededed;
  border-radius: 5px;
  padding-left: 5px;
  height: 35px;
  &.no-coupon {
    color: #888; /* 회색 텍스트 */
    font-size: 14px;
  }
`;