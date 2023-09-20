import React from "react";
import * as S from "./TextArea.style";

const TextArea = ({ textList }: { textList: string[] }) => {
  return (
    <S.TextArea>
      {textList.map((text, index) => (
        <span key={index}>{text}</span>
      ))}
    </S.TextArea>
  );
};

export default TextArea;
