import React, { SetStateAction } from "react";

export interface EventSelectButtonProps {
  text: string;
  active: boolean;
  setCount: React.Dispatch<SetStateAction<number>>;
}

export interface SelectProps {
  active: boolean;
}
