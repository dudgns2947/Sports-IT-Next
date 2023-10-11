import React from "react";
import * as S from "./FilterBox.style";
import { SetStateAction } from "jotai";
import { FilterType } from "@component/interfaces/contestInterface";

const FilterBox = ({
  filterKeyword,
  filterContent,
  filterBy,
  setFilterBy,
}: {
  filterKeyword: FilterType;
  filterContent: string;
  filterBy: FilterType[];
  setFilterBy: React.Dispatch<SetStateAction<FilterType[]>>;
}) => {
  return (
    <S.FilterLabel htmlFor={filterKeyword}>
      <S.FilterInput
        checked={filterBy.includes(filterKeyword)}
        type="checkbox"
        name="status"
        value={filterKeyword}
        id={filterKeyword}
        onChange={() => {
          if (filterBy.includes(filterKeyword)) {
            const newFilterBy = filterBy.filter(
              (item) => item !== filterKeyword
            );
            setFilterBy(newFilterBy);
          } else {
            setFilterBy([...filterBy, filterKeyword]);
          }
        }}
      />
      {filterContent}
    </S.FilterLabel>
  );
};

export default FilterBox;
