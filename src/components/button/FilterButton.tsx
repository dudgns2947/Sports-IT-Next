import React, { SetStateAction } from "react";
import * as S from "./FilterButton.styles";
import {
  FilterType,
  IFilterButton,
} from "@component/interfaces/contestInterface";

const FilterButton = ({
  filterBy,
  setFilterBy,
  setPage,
  setIsFresh,
  filterKeyWord,
  filterContent,
}: IFilterButton) => {
  return (
    <S.FilterButton
      active={filterBy.includes(filterKeyWord)}
      onClick={() => {
        setIsFresh(true);
        setPage(0);
        if (filterBy.includes(filterKeyWord)) {
          const newFilterBy = filterBy.filter((item) => item !== filterKeyWord);
          setFilterBy(newFilterBy);
        } else {
          const newFilterBy = [...filterBy, filterKeyWord];
          setFilterBy(newFilterBy);
        }
      }}
    >
      {filterContent}
    </S.FilterButton>
  );
};

export default FilterButton;
