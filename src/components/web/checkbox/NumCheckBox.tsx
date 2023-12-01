import React from "react";
import { FilterInput, FilterLabel } from "./FilterBox.style";

const NumCheckBox = ({
  checkContent,
  active,
  setBoolean,
  setString,
  setNumber,
}: {
  checkContent: string;
  active: boolean;
  setBoolean: React.Dispatch<React.SetStateAction<boolean>>;
  setString: React.Dispatch<React.SetStateAction<string>>;
  setNumber?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <FilterLabel
      style={{
        marginBottom: "10px",
        whiteSpace: "nowrap",
      }}
    >
      <FilterInput
        type="checkbox"
        checked={active}
        onClick={() => {
          setBoolean((current) => !current);
          setString("");
          if (setNumber) {
            setNumber(0);
          }
        }}
      />
      {checkContent}
    </FilterLabel>
  );
};

export default NumCheckBox;
