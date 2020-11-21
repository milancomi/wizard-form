import React from "react";
import "./InformationPart.css";

// Material UI
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";

// Constants
import { authors, publishers, languages, formats } from "../constants";

const InformationPart = ({
//   ISBN,
//   author,
//   bookDescription,
//   bookTitle,
//   datePublished,
//   edition,
//   editionLanguage,
//   format,
//   handleChange,
//   isDescriptionRequired,
//   numberOfPages,
//   publisher,
}) => {
  return (
    <div className="infoForm">
<div className="form-input">

 <label className="inputDescr" for="fname">Book Title</label>
    <input type="text" id="fname" name="firstname" placeholder="Book Title">
    </input>
</div>
<div className="form-input">
    <label className="inputDescr" for="country">Author</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
    </div>

    <div className="form-input">

    <label className="inputDescr" for="fname">ISBN</label>
    <input type="text" id="fname" name="firstname" placeholder="ISBN">
    </input>
</div>

<div className="form-input">

    <label className="inputDescr" for="country">Publisher</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
</div>
<div className="form-input">

    <label className="inputDescr" for="fname">Number of pages</label>
    <input type="text" id="fname" name="firstname" placeholder="Number of pages">
    </input>

</div>

<div className="form-input">

    <label className="inputDescr" for="country">Format</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
</div>

<div className="form-input">

    <label className="inputDescr" for="fname">Edition</label>
    <input type="text" id="fname" name="firstname" placeholder="Number of pages">
    </input>
</div>

<div className="form-input">

    <label className="inputDescr" for="country">Edition Language</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
</div>
<div className="form-input">

    <textarea>
  Hello there, this is some text in a text area
</textarea>
</div>
</div>
  );
};

export default InformationPart;
