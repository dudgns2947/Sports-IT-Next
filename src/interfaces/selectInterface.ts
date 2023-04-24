import React, { SetStateAction } from "react";
import { IEvent } from "./eventInterface";

export interface EventSelectButtonProps {
  text: string;
  active: boolean;
  setCount: React.Dispatch<SetStateAction<number>>;
  setEvent: React.Dispatch<SetStateAction<IEvent>>;
}

export interface SelectProps {
  active: boolean;
}
