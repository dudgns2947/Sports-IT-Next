import styled from "styled-components";

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  padding: 5px 0;
  font-size: 14px;
  color: #747474;
`;

export const FilterInput = styled.input`
  margin-right: 7px;
  appearance: none;
  width: 16px;
  height: 16px;
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
`;
