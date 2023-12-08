import React from "react";
import styled from "styled-components";

interface LableProps {
  bold: boolean | undefined;
}

const CheckBox = ({
  value,
  content,
  id,
  bold,
  setGender,
  setCategory,
  disable,
}: {
  value?: number;
  content?: string;
  id?: number;
  bold?: boolean | undefined;
  setGender?: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCategory?: React.Dispatch<React.SetStateAction<number | undefined>>;
  disable?: boolean;
}) => {
  return (
    <Label htmlFor={String(id)} bold={bold}>
      {setGender && (
        <Input
          type="checkbox"
          id={String(id)}
          value={content}
          checked={bold}
          onChange={() => setGender(value)}
          disabled={disable}
        />
      )}
      {setCategory && (
        <Input
          type="checkbox"
          id={String(id)}
          value={content}
          checked={bold}
          onChange={() => setCategory(value)}
          disabled={disable}
        />
      )}

      <span>{content}</span>
    </Label>
  );
};

export default CheckBox;

const Label = styled.label<LableProps>`
  display: flex;
  align-items: center;
  user-select: none;
  padding: 5px 0;
  font-size: 0.8rem;
  color: ${(props) => (props.bold ? "#212121" : "#747474")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin-right: 10px;
  :checked {
    color: #fd3446;
  }
`;

const Input = styled.input`
  margin-right: 7px;
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid #e9ebed;
  border-radius: 2px;

  &:checked {
    border: none;
    background-color: #fd3446;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  &:checked + span {
    color: #fd3446;
  }
`;
