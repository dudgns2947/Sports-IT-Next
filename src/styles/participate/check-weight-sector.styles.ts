import { Container } from "@component/components/container/container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  margin-right : 25px;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const AsideContainer = styled.aside`
  margin-top: 10px;
  border: 1px solid #e9ebed;
  border-radius: 10px;
  width: 350px;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  top: 60px;
`;
export const RoleSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Contents = styled.div`
  display:flex;
  flex-direction: row;
`;

export const PaymentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #e9ebed;
  border-radius: 10px;
  float: right;
`;

export const ButtonArea = styled.div`
  
`;

export const FilterCategoryContents = styled.div`

`;

export const AsideCategory = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
`;

export const FilterCategoryTitle = styled.p`
  display:inline;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 14px;
  margin-right: 20px;
  color: #212121;
`;

export const QuestionArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  margin-bottom: 47px;
`;

export const QuestionText = styled.span`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ChoiceContainer = styled.div`
  height: 45%;
  margin-left: 15px;
  margin-right: 10px;
  margin-bottom: 100px;
`;

export const UpperIcon = styled(IoIosArrowUp)`
  height: 25px;
  width: 25px;
`;

export const LowerIcon = styled(IoIosArrowDown)`
  height: 25px;
  width: 25px;
`;

export const SectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 2px solid #000000;
  margin-bottom: 20px;
`;

export const SectorArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export const weightArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const HeaderText = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 14 5px;
  font-size: 16px;
  width: 100%;
  font-weight: 600;
  padding-bottom: 15px;
`;

export const SurveyArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const SurveyCheckBox = styled.input`
  margin-right: 10px;
  vertical-align: middle;
  font-weight: 600;
  appearance: none;
  border: max(1.3px, 0.1em) #eaeaea solid;
  border-radius: 0;
  width: 1em;
  height: 1em;
  transition: border 0.1s ease-in-out;
  &:checked {
    border: 0.35em solid #fd3446;
    padding: 2px;
    background-color: #fd3446;
  }
  &:focus-visible {
    outline-offset: max(1.5px, 0, 1em);
    outline: max(1.5px, 0.1em) solid #fd3446;
  }
  &:hover {
    box-shadow: 0 0 0 max(2px, 0.2em) lightgray;
    cursor: pointer;
  }
  &:disabled {
    background-color: lightgray;
    box-shadow: none;
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SurveyCheckLabel = styled.label`
  font-size: 13px;
  margin-bottom: 14px;
  align-items: center;
  display: flex;
`;

export const NavArea = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 10%;
  bottom: 0;
  left: 0;
  background-color: #212121;
`;

export const NavText = styled.span`
  color: #ffffff;
`;
