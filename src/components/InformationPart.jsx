import React from "react";
import "./InformationPart.css";

// Material UI
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";

// Constants
import { authors, publishers, languages, formats } from "../constants";

const InformationPart = ({
  ISBN,
  author,
  bookDescription,
  bookTitle,
  datePublished,
  edition,
  editionLanguage,
  format,
  handleChange,
  isDescriptionRequired,
  numberOfPages,
  publisher,
}) => {
  return (
    <div className="infoForm">
      <div className="form-input">
        <label className="inputDescr" htmlFor="fname">
          Book Title
        </label>
        <input
          id="outlined-full-width"
          label="Book Title"
          margin="dense"
          className="form-text-input"
          onChange={(e) => handleChange("bookTitle", e.target.value)}
          placeholder="Book Title"
          value={bookTitle}
          variant="outlined"
        />
      </div>
      <div className="form-input">
        <label className="inputDescr" htmlFor="country">
          Author
        </label>
        <select
          id="test"
          label="Author"
          margin="dense"
          onChange={(e) => handleChange("author", e.target.value)}
          value={author}
          variant="outlined"
        >
          {authors.map((option) => (
            <option key={option.value} value={option.value}>
              {" "}
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-input">
        <label className="inputDescr" htmlFor="ISBN">
          ISBN
        </label>
        <input
          className="form-text-input"
          label="ISBN"
          margin="dense"
          onChange={(e) => handleChange("ISBN", e.target.value)}
          placeholder="ISBN"
          value={ISBN}
          variant="outlined"
        />
      </div>

      <div className="form-input">
        <label className="inputDescr" htmlFor="country">
          Publisher
        </label>
        <select
           
          label="Publisher"
          margin="dense"
          onChange={(e) => handleChange("publisher", e.target.value)}
          value={publisher}
          variant="outlined"
        >
          {publishers.map((option) => (
            <option key={option.value} value={option.value}>
              {" "}
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-input">
        <label className="inputDescr" htmlFor="fname">
          No. of pages
        </label>
        <input
          className="form-text-input"
          label="Numbers of page"
          margin="dense"
          onChange={(e) => handleChange("numberOfPages", e.target.value)}
          placeholder="Numbers of page"
          value={numberOfPages}
          variant="outlined"
        />
      </div>

      <div className="form-input">
        <label className="inputDescr" htmlFor="country">
          Format
        </label>
        <select
          label="Format"
          margin="dense"
          onChange={(e) => handleChange("format", e.target.value)}
          value={format}
          variant="outlined"
        >
        <option value="">Pick format</option>

          {formats.map((option) => (
            <option key={option.value} value={option.value} >
              {" "}
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-input">
        <label className="inputDescr" htmlFor="fname">
          Edition
        </label>
        <input
           
          label="Edition"
          className="form-text-input"
          margin="dense"
          onChange={(e) => handleChange("edition", e.target.value)}
          placeholder="Edition"
          value={edition}
          variant="outlined"
        />
      </div>

      <div className="form-input">
        <label className="inputDescr" htmlFor="country">
          Edition Lang.
        </label>
        <select
           
          label="Edition language"
          margin="dense"
          onChange={(e) => handleChange("editionLanguage", e.target.value)}
          value={editionLanguage}
          variant="outlined"
        >
          {languages.map((option) => (
            <option key={option.value} value={option.value}>
              {" "}
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-input">
        <label className="inputDescr" htmlFor="country">
          Description
        </label>
        <textarea
          label="Description"
          onChange={(e) => handleChange("bookDescription", e.target.value)}
          required={isDescriptionRequired}
          rows={4}
          value={bookDescription}
          className="form-text-input"
          variant="outlined"
          placeholder="Type the description..."
        ></textarea>
      </div>
    </div>
  );
};

export default InformationPart;
