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
    // <Grid>
    //   <TextField
    //     fullWidth
    //     InputLabelProps={{
    //       shrink: true,
    //     }}
    //     margin="dense"
    //     onChange={(e) => handleChange("customSubgenre", e.target.value)}
    //     placeholder="Subgenre name"
    //     value={value}
    //     variant="outlined"
    //   />
    //   <FormControlLabel
    //     control={
    //       <Checkbox
    //         icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
    //         checkedIcon={<CheckBoxIcon fontSize="small" color="primary" />}
    //         name="checkedI"
    //         checked={isDescriptionRequired}
    //       />
    //     }
    //     label="Description is required for this subgenre"
    //     onChange={(e) =>
    //       handleChange("isDescriptionRequired", e.target.checked)
    //     }
    //   />
    // </Grid>
  );
};

export default CustomSubgenre;
