import React from "react";
import * as S from "./GoBackHeaderStyles";
import { useRouter } from "next/router";

const GoBackHeaderWhite = ({
  title,
  setting = false,
}: {
  title?: string;
  setting?: boolean;
}) => {
  const router = useRouter();
  return (
    <S.Header>
      <S.IconArea>
        <S.HeaderLeftIconWhite onClick={() => router.back()} />
      </S.IconArea>
      <S.TitleArea>
        <S.HeaderTitleWhite>{title}</S.HeaderTitleWhite>
      </S.TitleArea>
      <S.IconArea>
        {setting ? (
          <S.HeaderSettingIcon onClick={() => router.push(`/mypage/setting`)} />
        ) : null}
      </S.IconArea>
    </S.Header>
  );
};

export default GoBackHeaderWhite;
