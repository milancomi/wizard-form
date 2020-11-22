import React from "react";

const SelectBtn = ({ name, text, handleOnClick, selected, color }) => {
  return (
    <button
      className={selected ? "genreField grayClr" : "genreField"}
      variant={selected ? "contained" : "outlined"}
      size="medium"
      color={color || "primary"}
      onClick={() => handleOnClick(name, text)}
    >
      {text}
    </button>
  );
};

export default SelectBtn;
