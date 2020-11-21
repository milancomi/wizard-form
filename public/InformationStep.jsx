import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

// Constants
import { authors, publishers, languages, formats } from "../constants";

const InformationStep = ({
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
    <Grid container spacing={1} direction="column">
      {/* --- BOOK TITLE --- */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="outlined-full-width"
          InputLabelProps={{
            shrink: true,
          }}
          label="Book Title"
          margin="dense"
          onChange={(e) => handleChange("bookTitle", e.target.value)}
          placeholder="Book Title"
          value={bookTitle}
          variant="outlined"
        />
      </Grid>
      {/* --- AUTHOR --- */}
      <Grid item xs={12}>
        <TextField
          id="test"
          fullWidth
          label="Author"
          margin="dense"
          onChange={(e) => handleChange("author", e.target.value)}
          select
          value={author}
          variant="outlined"
        >
          {authors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      {/* --- ISBN --- */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="ISBN"
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          onChange={(e) => handleChange("ISBN", e.target.value)}
          placeholder="ISBN"
          value={ISBN}
          variant="outlined"
        />
      </Grid>
      {/* --- PUBLISHER --- */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Publisher"
          margin="dense"
          onChange={(e) => handleChange("publisher", e.target.value)}
          select
          value={publisher}
          variant="outlined"
        >
          {publishers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      {/* --- DATE --- */}
      <Grid item xs={4}>
        <TextField
          fullWidth
          margin="dense"
          value={datePublished}
          label="Date published"
          type="date"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleChange("datePublished", e.target.value)}
        />
      </Grid>
      {/* --- NUMBER OF PAGES --- */}
      <Grid item xs={3}>
        <TextField
          fullWidth
          label="Numbers of page"
          InputLabelProps={{
            shrink: true,
          }}
          margin="dense"
          onChange={(e) => handleChange("numberOfPages", e.target.value)}
          placeholder="Numbers of page"
          value={numberOfPages}
          variant="outlined"
        />
      </Grid>
      {/* --- FORMAT --- */}
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Format"
          margin="dense"
          onChange={(e) => handleChange("format", e.target.value)}
          select
          value={format}
          variant="outlined"
        >
          {formats.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid container item spacing={1}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Edition"
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
            onChange={(e) => handleChange("edition", e.target.value)}
            placeholder="Edition"
            value={edition}
            variant="outlined"
          />
        </Grid>
        {/* --- EDITION LANGUAGE --- */}
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Edition language"
            margin="dense"
            onChange={(e) => handleChange("editionLanguage", e.target.value)}
            select
            value={editionLanguage}
            variant="outlined"
          >
            {languages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      {/* --- DESCRIPTION --- */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          onChange={(e) => handleChange("bookDescription", e.target.value)}
          required={isDescriptionRequired}
          rows={4}
          value={bookDescription}
          variant="outlined"
          placeholder="Type the description..."
        />
      </Grid>
    </Grid>
  );
};

export default InformationStep;
