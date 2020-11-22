import React, { Component } from "react";

import GenrePart from "./GenrePart";
import SubgenrePart from "./SubgenrePart";

import dumyData from "../database/dumyData.json";
import "./Main.css";
import ModalDialog from './ModalDialog';
import CustomSubgenre from "./CustomSubgenre";
import InformationPart from "./InformationPart";

const steps = ["Genre", "Subgenre", "Information"];
const extendedSteps = ["Genre", "Subgenre", "Add subgenre", "Information"];

class Main extends Component {
  constructor() {
    super();
    this.state = {
      genres: dumyData["genres"],
      step: 1,
      activeStep: 0,
      haveExtendedStep: false,
      isNewSubgenreSelected: false,
      isDescriptionRequired: false,
      selectedSubGenresByGenre: {},
      modalDialogShow:false,
      formError:false,
      newBookData: {
        ISBN: "",
        author: "",
        bookDescription: "",
        bookTitle: "",
        customSubgenre: "",
        datePublished: "",
        edition: "",
        editionLanguage: "",
        format: "",
        numberOfPages: "",
        publisher: "",
        selectedGenre: "",
        selectedSubgenre: "",
      },
    };
  }
  // handleRequiredDecription = (selectedGenre, selectedSubgenre) => {
  //   const name = this.state.selectedSubGenresByGenre.name;
  //   console.log(selectedSubgenre);
  //   // console.log(this.state.genres).find((genre) =>genre.name);
  //   // return this.state.selectedSubGenresByGenre.genres
  //   //   .find((genre) => genre.name === name)
  //   //   ?.this.state.selectedSubGenresByGenre['subgenres'].find((subgenre) => subgenre.name === this.state.selectedSubGenresByGenre.name)
  //   //   ?.isDescriptionRequired;
  // };


  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const newBook = this.createNewBook();
    if(newBook.bookTitle==="")
    {
      this.setState({
        formError:true
      });
    } else{
      this.setState({modalDialogShow:true});
      console.log(newBook);
    }
  }

  handleCustomSubgenreInputs = (field, value) => {
    if (field === "customSubgenre") {
      this.setState({
        newBookData: {
          ...this.state.newBookData,
          [field]: value,
        },
      });
    } else {
      this.setState({
        [field]: value,
      });
    }
  };
  handlerModal = () => {
    this.setState({
      modalDialogShow:false,
      activeStep:0,
      genres: dumyData["genres"],
      step: 1,
      activeStep: 0,
      haveExtendedStep: false,
      isNewSubgenreSelected: false,
      isDescriptionRequired: false,
      selectedSubGenresByGenre: {},
      modalDialogShow:false,
      formError:false,
      newBookData: {
        ISBN: "",
        author: "",
        bookDescription: "",
        bookTitle: "",
        customSubgenre: "",
        datePublished: "",
        edition: "",
        editionLanguage: "",
        format: "",
        numberOfPages: "",
        publisher: "",
        selectedGenre: "",
        selectedSubgenre: "",
    }});
    
  }
  handleChange = (field, value) => {
    if (field === "selectedGenre") {
      const subgenres = this.state.genres.find((genre) => genre.name === value);

      this.setState({
        isNewSubgenreSelected: false,
        selectedSubGenresByGenre: subgenres,
        newBookData: {
          ...this.state.newBookData,
          [field]: value,
          selectedSubgenre: "",
        },
      });
      return;
    }
    if (field === "selectedSubgenre") {
      this.setState({
        haveExtendedStep: false,
        isNewSubgenreSelected: false,
        // isDescriptionRequired: this.handleRequiredDecription(
        //   this.state.newBookData.selectedGenre,
        //   value
        // ),
        newBookData: {
          ...this.state.newBookData,
          [field]: value,
        },
      });
      return;
    }

    this.setState({
      newBookData: {
        ...this.state.newBookData,
        [field]: value,
      },
    });
  };

  nextStep = (event, isLastStep) => {
    const { isNewSubgenreSelected } = this.state;
    if (isLastStep) {
      this.handleSubmit(event);
      console.log("SUCCESS");
      return;
    }

    if (isNewSubgenreSelected) {
      this.setState((prevState) => ({
        activeStep: prevState.activeStep + 1,
        haveExtendedStep: true,
      }));
    } else {
      this.setState((prevState) => ({
        activeStep: prevState.activeStep + 1,
      }));
    }
  };
  previousStep = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };
  handleCustomSubgenre = () => {
    this.setState({
      isNewSubgenreSelected: true,
      isDescriptionRequired: false,
      newBookData: {
        ...this.state.newBookData,
        selectedSubgenre: "",
      },
    });
  };

  createNewBook = () => {
    const { newBookData, isNewSubgenreSelected } = this.state;
    const {
      ISBN,
      author,
      bookDescription,
      bookTitle,
      customSubgenre,
      datePublished,
      edition,
      editionLanguage,
      format,
      numberOfPages,
      publisher,
      selectedGenre,
      selectedSubgenre,
    } = newBookData;

    const newBook = {
      ISBN,
      author,
      bookDescription,
      bookTitle,
      datePublished,
      edition,
      editionLanguage,
      format,
      genre: selectedGenre,
      numberOfPages,
      publisher,
      subgenre: isNewSubgenreSelected ? customSubgenre : selectedSubgenre,
    };

    return newBook;
  };

  isNextDisabled = (isLastStep) => {
    const {
      activeStep,
      newBookData,
      isNewSubgenreSelected,
      isDescriptionRequired,
    } = this.state;
    const { selectedGenre, selectedSubgenre, bookDescription } = newBookData;
    if (activeStep === 0 && !selectedGenre) return true;
    if (activeStep === 1 && isNewSubgenreSelected) return false;
    if (activeStep === 1 && !selectedSubgenre) return true;
    // if (isLastStep) {
    //   if (isDescriptionRequired && !bookDescription) return true;
    //   const newBook = this.createNewBook();
    //   delete newBook.bookDescription;
    //   if (Object.values(newBook).some((value) => !value)) return true;
    // }
    return false;
  };

  render() {
    // const steps = [1,2,3,4];
    // const {step} = this.state;
    const {
      activeStep,
      haveExtendedStep,
      isDescriptionRequired,
      isNewSubgenreSelected,
      newBookData,
      selectedSubGenresByGenre,
      genres,
      formError
    } = this.state;
    const {
      ISBN,
      author,
      bookDescription,
      bookTitle,
      customSubgenre,
      datePublished,
      edition,
      editionLanguage,
      format,
      numberOfPages,
      publisher,
      selectedGenre,
      selectedSubgenre,
    } = newBookData;
    const dynamicSteps = haveExtendedStep ? extendedSteps : steps;
    const subgenres = this.state.genres.find(
      (genre) => genre.name === this.state.selectedGenre
    )?.subgenres;
    const isLastStep = activeStep === dynamicSteps.length - 1;

    // const dynamicSteps = haveExtendedStep ? extendedSteps :steps;
    return (
      <React.Fragment>
        <div>
          {dynamicSteps.map((label, index) => (
            <div
              key={label}
              className={
                index === activeStep
                  ? "activeColor panelIndicator"
                  : "panelIndicator"
              }
            >
              <h4 className="panelIndicatorText">{index+1} {label}</h4>
            </div>
          ))}
        </div>

        {activeStep === 0 && (
          <GenrePart
            genres={genres}
            handleChange={this.handleChange}
            selectedGenre={selectedGenre}
          />
        )}

        {activeStep === 1 && (
          <SubgenrePart
            subgenres={selectedSubGenresByGenre["subgenres"]}
            handleChange={this.handleChange}
            selectedSubgenre={selectedSubgenre}
            handleCustomSubgenre={this.handleCustomSubgenre}
            isNewSubgenreSelected={isNewSubgenreSelected}
          />
        )}

        {haveExtendedStep ? (
          <>
            {activeStep === 2 && (
              <CustomSubgenre
                handleChange={this.handleCustomSubgenreInputs}
                value={customSubgenre}
                isDescriptionRequired={isDescriptionRequired}
              />
            )}
            {activeStep === 3 && (
              <InformationPart
                handleChange={this.handleChange}
                author={author}
                bookTitle={bookTitle}
                ISBN={ISBN}
                publisher={publisher}
                datePublished={datePublished}
                numberOfPages={numberOfPages}
                format={format}
                edition={edition}
                editionLanguage={editionLanguage}
                bookDescription={bookDescription}
                isDescriptionRequired={false}
              />
            )}
          </>
        ) : (
          activeStep === 2 && (
            <InformationPart
              handleChange={this.handleChange}
              author={author}
              bookTitle={bookTitle}
              ISBN={ISBN}
              publisher={publisher}
              datePublished={datePublished}
              numberOfPages={numberOfPages}
              format={format}
              edition={edition}
              editionLanguage={editionLanguage}
              bookDescription={bookDescription}
              isDescriptionRequired={false}
            />
          )
        )}
          <div className={(formError === true) ? "displayError":"errorMsgField"}>
            <h4 className="errorMsg">- Book title is required -</h4>
          </div>
        <div>
          {" "}
          <button
            variant="outlined"
            disabled={activeStep === 0 ? true : false}
            onClick={this.previousStep}
            className="backBtn"
          >
            « Back
          </button>
          <button
            variant="contained"
            color="primary"
            onClick={(e) => this.nextStep(e, isLastStep)}
            disabled={this.isNextDisabled(isLastStep)}
            className="nextBtn tooltip"
          >
            {isLastStep ? "Add [+]" : "Next » "}
            {(this.isNextDisabled(isLastStep)) ? <span className="tooltiptext">Choose data first.</span> : ""}
          </button>
          </div>


        <ModalDialog handleClose={this.handlerModal} modalDialog={this.state.modalDialogShow}/>
      </React.Fragment>
    );
  }
}

export default Main;
