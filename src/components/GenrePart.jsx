import React from "react";
import "./GenrePart.css";
import "./StepPanel.css";
import SelectBtn from "./SelectBtn"
const GenrePart = ({ genres,handleChange,selectedGenre}) =>{
  return(
      <React.Fragment>
    <div className="genreForm">
    <h2 className="formText">Genres:</h2>
      {genres.map((genre) => (
        <div key={genre.id} className="genreField2">
          <SelectBtn handleOnClick={handleChange}
          name="selectedGenre"
          text={genre.name}
          selected={genre.name ===selectedGenre} 
          ></SelectBtn>
        </div>
      ))}
    </div>
    <div>
    
    </div>
  </React.Fragment>
  )
}

export default GenrePart;
