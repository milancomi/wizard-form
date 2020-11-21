// import React from "react";

// // Material UI
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";

// const CustomSubgenre = ({ handleChange, value, isDescriptionRequired }) => {
//   return (
//     <Grid>
//       <TextField
//         fullWidth
//         InputLabelProps={{
//           shrink: true,
//         }}
//         margin="dense"
//         onChange={(e) => handleChange("customSubgenre", e.target.value)}
//         placeholder="Subgenre name"
//         value={value}
//         variant="outlined"
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
//             checkedIcon={<CheckBoxIcon fontSize="small" color="primary" />}
//             name="checkedI"
//             checked={isDescriptionRequired}
//           />
//         }
//         label="Description is required for this subgenre"
//         onChange={(e) =>
//           handleChange("isDescriptionRequired", e.target.checked)
//         }
//       />
//     </Grid>
//   );
// };

// export default CustomSubgenre;
