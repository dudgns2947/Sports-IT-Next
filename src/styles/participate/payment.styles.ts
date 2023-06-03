import styled from "styled-components";
import { MdRadioButtonChecked } from "react-icons/md";

interface RadioIconProps {
  active: boolean;
}

export const HistoryArea = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #aeaeae;
`;

export const BoldText = styled.span`
  display: block;
  font-weight: 700;
  font-size: 17px;
  line-height: 19px;
  margin-bottom: 10px;
  color: #212121;
`;

export const HistoryContent = styled.div`
  border-bottom: 1px solid #aeaeae;
  padding-bottom: 10px;
`;

export const LightText = styled.span`
  color: #212121;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
`;

export const RadioArea = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

export const RadioSubArea = styled(RadioArea)`
  justify-content: space-between;
  padding-left: 20px;
`;

export const SubArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

export const RadioLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioIcon = styled(MdRadioButtonChecked)`
  color: #fd3446;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const CostText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #212121;
`;

export const BoldCostText = styled(CostText)`
  font-size: 16px;
`;

export const BoldSmallText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  color: #212121;
`;

export const HistoryBottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 0;
`;

export const InsuranceArea = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #aeaeae;
`;

export const InsuranceRadioArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 0 0;
`;

export const ManualText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #aeaeae;
`;

export const RadioIconComponent = styled(MdRadioButtonChecked)<RadioIconProps>`
  color: ${(props) => (props.active ? "#fd3446" : "#AEAEAE")};
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const TotalCostArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 5px;
`;

export const TotalCostText = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #fd3446;
`;

export const PayImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const PayArea = styled.div``;
