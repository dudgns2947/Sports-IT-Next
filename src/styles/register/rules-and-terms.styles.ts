import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { GrClose } from "react-icons/gr";

interface SelectButtonProps {
  active: boolean;
}

export const ContentArea = styled.div`
  height: 100%;
  padding: 10px 20px;
`;

export const DataArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeleteButton = styled(GrClose)`
  width: 17px;
  height: 17px;
`;

export const DataTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #212121;
  margin-bottom: 10px;
`;

export const DataContent = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #aeaeae;
`;

export const UploadForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e9ebed;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #212121;
`;

export const LoadRulesArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoadRulesText = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #222428;
  margin-right: 10px;
`;

export const LoadRulesIcon = styled(MdArrowForwardIos)`
  height: 12px;
  width: 7px;
`;

export const SelectArea = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%;
`;

export const FileSelectButton = styled.button<SelectButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 45px;
  border-radius: 6px 0px 0px 6px;
  border: 1px solid #212121;
  border-color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  color: ${(props) => (props.active ? "#212121" : "#AEAEAE")};
  background-color: #ffffff;
  font-weight: 400;
  font-size: 14px;
`;

export const UrlSelectButton = styled(FileSelectButton)<SelectButtonProps>`
  border-radius: 0px 6px 6px 0px;
`;

export const FileUploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UrlUploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UrlInputArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UploadNoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const UploadNotice = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #747474;
  margin-bottom: 3px;
`;

export const FileUploadButton = styled.label`
  width: 168px;
  height: 45px;
  border: 1px solid #ededed;
  background-color: #ffffff;
  border-radius: 6px;
  /* margin-top: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PlusIcon = styled(AiOutlinePlusCircle)`
  width: 21px;
  height: 21px;
  color: #212121;
  margin-right: 8px;
`;

export const FileUploadText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #212121;
`;

export const FileInput = styled.input`
  display: none;
`;

export const RegisterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted #000000;
  width: 100%;
  height: 56px;
  font-size: 16px;
  border-radius: 6px;
  margin: 20px 0;
  cursor: pointer;
`;
