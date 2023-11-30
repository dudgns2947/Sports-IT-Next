import React from "react";
import { FilterInput, FilterLabel } from "./FilterBox.style";

const NumCheckBox = ({
  checkContent,
  active,
  setNoLimit,
  setMaxNum,
}: {
  checkContent: string;
  active: boolean;
  setNoLimit: React.Dispatch<React.SetStateAction<boolean>>;
  setMaxNum: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <FilterLabel style={{ marginBottom: "10px" }}>
      <FilterInput
        type="checkbox"
        checked={active}
        onClick={() => {
          setNoLimit((current) => !current);
          setMaxNum("");
        }}
      />
      {checkContent}
    </FilterLabel>
  );
};

export default NumCheckBox;
