import React from "react";

const CustomSubgenre = ({ handleChange, value, isDescriptionRequired }) => {
  return (
    <div className="customSubGenreForm ">
      <div className="form-input mt-5">
        <label className="inputDescr" htmlFor="fname">
          Subgenre name
        </label>
        <input
          margin="dense"
          onChange={(e) => handleChange("customSubgenre", e.target.value)}
          placeholder="Insert subgenre name"
          className="form-text-input"
          value={value}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default CustomSubgenre;
