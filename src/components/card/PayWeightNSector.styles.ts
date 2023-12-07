import styled from "styled-components";

import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";

export const CardWrapper = styled.div`
  width: 600px;
  padding: 25px 25px;
  border: 2px solid #ededed;
  &:hover {
    border: 2px solid #000000;
  }
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const CardTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 2px solid #ededed;
  padding-bottom: 10px;
  margin-bottom: 20px; 
`;

export const Sector = styled.div`
`;

export const LowerIcon = styled(IoIosArrowDown)`
  height: 15px;
  width: 15px;
`;

export const CardContentsArea = styled.div`
`;

export const CardContent = styled.div`
  display : flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Weight = styled.div`
`;

export const Close = styled(IoIosClose)`
  height : 25px;
  width: 25px;
`;

export const Price = styled.div`
`;

export const RightContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;