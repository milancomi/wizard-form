import React from "react";
import SelectBtn from "./SelectBtn";

const SubgenrePart = ({
  subgenres,
  handleChange,
  selectedSubgenre,
  handleCustomSubgenre,
  isNewSubgenreSelected,
}) => {
  return (
    <React.Fragment>

    <div  className="genreForm">
    <h2 className="formText">Subenres:</h2>

      {subgenres.map((subgenre) => (
        <div key={subgenre.id}  className="genreField2">
          <SelectBtn
            handleOnClick={handleChange}
            name="selectedSubgenre"
            key={subgenre.id}
            text={subgenre.name}
            selected={subgenre.name === selectedSubgenre}
          ></SelectBtn>
        </div>
      ))}


      <SelectBtn
               handleOnClick={handleCustomSubgenre}
               name="customSubgenre"
               key="customSubgenre"
               text="Add new"
               selected={isNewSubgenreSelected}
               color="secondary"
      >

      </SelectBtn>
    </div>
    </React.Fragment>
  );
};

export default SubgenrePart;
