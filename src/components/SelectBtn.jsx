import React from "react";

// Material UI

const SelectBtn = ({ name, text, handleOnClick, selected, color }) => {
  return (
    <button
      className="genreField"
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
