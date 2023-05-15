import styled from "styled-components";
import { AiFillCamera, AiFillCloseCircle } from "react-icons/ai";
import { Input } from "./headcount.styles";

export const LargeInput = styled(Input)`
  height: 400px;
`;

export const InputWrapper = styled.div`
  padding: 10px 20px;
`;

export const ImageInputArea = styled.div`
  display: flex;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export const ImageInputLabel = styled.label`
  width: 72px;
  height: 72px;
  border: 1px solid #ededed;
  margin-right: 10px;
  position: relative;
`;

export const ImageInput = styled.input``;

export const PreviewImage = styled.img`
  width: 72px;
  height: 72px;
`;

export const CameraIcon = styled(AiFillCamera)`
  color: #d9d9d9;
  width: 25px;
  height: 20px;
`;

export const DeleteIcon = styled(AiFillCloseCircle)`
  height: 14px;
  width: 14px;
  color: gba(34, 36, 40, 0.5);
  position: absolute;
  right: 4px;
  top: 4px;
`;
